// Lógica do teste: embaralha, pagina, guarda respostas e calcula o resultado.
const POR_PAGINA = 5;
const MIN_DISTANCIA = 3; // perguntas da mesma área ficam ao menos 3 posições distantes
const STORE = sessionStorage;

// Escala visual (esquerda → direita): Concordo (7) … Discordo (1)
const ESCALA = [
  { cor: 'yellow', tam: 'lg', valor: 7 },
  { cor: 'yellow', tam: 'md', valor: 6 },
  { cor: 'yellow', tam: 'sm', valor: 5 },
  { cor: 'neutral', tam: 'xs', valor: 4 },
  { cor: 'purple', tam: 'sm', valor: 3 },
  { cor: 'purple', tam: 'md', valor: 2 },
  { cor: 'purple', tam: 'lg', valor: 1 },
];

function lerJSON(chave, padrao) {
  try { return JSON.parse(STORE.getItem(chave)) ?? padrao; } catch { return padrao; }
}
function gravarJSON(chave, valor) { STORE.setItem(chave, JSON.stringify(valor)); }

function embaralhar(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Monta a ordem das 70 perguntas respeitando a distância mínima entre perguntas da mesma área.
function gerarOrdem() {
  const todas = AREAS.flatMap((a) => a.perguntas.map((texto, i) => ({ id: `${a.id}-${i}`, area: a.id, texto })));
  for (let tentativa = 0; tentativa < 200; tentativa++) {
    const restantes = {};
    AREAS.forEach((a) => (restantes[a.id] = embaralhar(todas.filter((q) => q.area === a.id))));
    const ordem = [];
    const ultima = {};
    let ok = true;
    for (let pos = 0; pos < todas.length; pos++) {
      const candidatas = Object.keys(restantes).filter(
        (id) => restantes[id].length && (ultima[id] === undefined || pos - ultima[id] >= MIN_DISTANCIA)
      );
      if (!candidatas.length) { ok = false; break; }
      // prioriza as áreas com mais perguntas restantes (evita becos sem saída), com sorteio nos empates
      const max = Math.max(...candidatas.map((id) => restantes[id].length));
      const topo = candidatas.filter((id) => restantes[id].length === max);
      const escolhida = topo[Math.floor(Math.random() * topo.length)];
      ordem.push(restantes[escolhida].pop());
      ultima[escolhida] = pos;
    }
    if (ok) return ordem.map((q) => q.id);
  }
  return todas.map((q) => q.id); // fallback improvável
}

function obterOrdem() {
  let ordem = lerJSON('ordem', null);
  if (!ordem || ordem.length !== 70) { ordem = gerarOrdem(); gravarJSON('ordem', ordem); }
  return ordem;
}

function perguntaPorId(id) {
  const area = AREAS.find((a) => id.startsWith(a.id + '-'));
  const idx = Number(id.slice(area.id.length + 1));
  return { id, area: area.id, texto: area.perguntas[idx] };
}

function calcularResultado(respostas) {
  const pontos = {}, altas = {};
  AREAS.forEach((a) => { pontos[a.id] = 0; altas[a.id] = 0; });
  Object.entries(respostas).forEach(([id, v]) => {
    const area = perguntaPorId(id).area;
    pontos[area] += v;
    if (v >= 6) altas[area]++;
  });
  // desempate: mais respostas fortes (6 ou 7); persistindo o empate, sorteio
  const sorteio = {};
  AREAS.forEach((a) => (sorteio[a.id] = Math.random()));
  return AREAS.map((a) => ({ id: a.id, nome: a.nome, pontos: pontos[a.id] }))
    .sort((x, y) => y.pontos - x.pontos || altas[y.id] - altas[x.id] || sorteio[y.id] - sorteio[x.id]);
}

// ---------- página de perguntas ----------
function iniciarPerguntas() {
  const ordem = obterOrdem();
  const respostas = lerJSON('respostas', {});
  const totalPaginas = Math.ceil(ordem.length / POR_PAGINA);
  let pagina = Math.min(Number(STORE.getItem('pagina') || 0), totalPaginas - 1);

  const lista = document.getElementById('lista');
  const barra = document.getElementById('barra');
  const texto = document.getElementById('progresso');
  const aviso = document.getElementById('aviso');
  const voltar = document.getElementById('voltar');
  const proximo = document.getElementById('proximo');

  function atualizarProgresso() {
    const pct = Math.round((Object.keys(respostas).length / ordem.length) * 100);
    barra.style.width = pct + '%';
    texto.textContent = pct + '%';
  }

  function render() {
    STORE.setItem('pagina', pagina);
    aviso.textContent = '';
    const ids = ordem.slice(pagina * POR_PAGINA, (pagina + 1) * POR_PAGINA);
    lista.innerHTML = '';
    ids.forEach((id) => {
      const q = perguntaPorId(id);
      const item = document.createElement('div');
      item.className = 'question-item';
      item.innerHTML = `<p class="question-title"></p>
        <div class="scale-container">
          <span class="label concordar">Concordo</span>
          <div class="options" role="radiogroup"></div>
          <span class="label discordar">Discordo</span>
        </div>`;
      item.querySelector('.question-title').textContent = q.texto; // sem numeração, conforme pedido
      const opcoes = item.querySelector('.options');
      ESCALA.forEach((o) => {
        const lab = document.createElement('label');
        lab.className = `circle-option ${o.cor} ${o.tam}`;
        lab.innerHTML = `<input type="radio" name="${id}" value="${o.valor}"><span></span>`;
        const input = lab.querySelector('input');
        input.setAttribute('aria-label', `${o.valor} de 7`);
        input.checked = respostas[id] === o.valor;
        input.addEventListener('change', () => {
          respostas[id] = o.valor;
          gravarJSON('respostas', respostas);
          atualizarProgresso();
          aviso.textContent = '';
        });
        opcoes.appendChild(lab);
      });
      lista.appendChild(item);
    });
    proximo.innerHTML = pagina === totalPaginas - 1 ? 'VER RESULTADO &rarr;' : 'PRÓXIMO &rarr;';
    atualizarProgresso();
    window.scrollTo({ top: 0 });
  }

  voltar.addEventListener('click', () => {
    if (pagina === 0) { location.href = 'index.html'; return; }
    pagina--; render();
  });

  proximo.addEventListener('click', () => {
    const ids = ordem.slice(pagina * POR_PAGINA, (pagina + 1) * POR_PAGINA);
    if (ids.some((id) => respostas[id] === undefined)) {
      aviso.textContent = 'Responda todas as perguntas para continuar.';
      return;
    }
    if (pagina === totalPaginas - 1) {
      gravarJSON('resultado', calcularResultado(respostas));
      location.href = 'resultado.html';
      return;
    }
    pagina++; render();
  });

  render();
}

function reiniciarTeste() {
  ['ordem', 'respostas', 'pagina', 'resultado'].forEach((k) => STORE.removeItem(k));
}
