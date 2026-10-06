// Lógica do teste: embaralha, pagina, guarda respostas e calcula o resultado.
const POR_PAGINA = 5;          // modo completo
const POR_PAGINA_RAPIDO = 4;   // modo rápido: 2 páginas gerais + 3 específicas
const N_CANDIDATAS = 3;
const PERGUNTAS_POR_CANDIDATA = 4;
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

// ---------- teste rápido (adaptativo): 8 gerais + 12 específicas = 20 ----------
function mediaGeral(respostas, areaId) {
  const v = GERAIS.filter((g) => g.areas.includes(areaId) && respostas[g.id] !== undefined).map((g) => respostas[g.id]);
  return v.length ? v.reduce((a, b) => a + b, 0) / v.length : 0;
}

function fortes(respostas, areaId) { // respostas 6 ou 7 (critério de desempate)
  return GERAIS.filter((g) => g.areas.includes(areaId) && respostas[g.id] >= 6).length;
}

// As 3 áreas com maior média nas perguntas gerais (empate: mais respostas fortes; depois sorteio).
function escolherCandidatas(respostas) {
  const sorteio = {};
  AREAS.forEach((a) => (sorteio[a.id] = Math.random()));
  return AREAS.map((a) => a.id)
    .sort((x, y) => mediaGeral(respostas, y) - mediaGeral(respostas, x) || fortes(respostas, y) - fortes(respostas, x) || sorteio[y] - sorteio[x])
    .slice(0, N_CANDIDATAS);
}

// 4 perguntas específicas por candidata, intercaladas A B C A B C… (mesma área sempre a 3 posições).
function gerarFase2(candidatas) {
  const ordemAreas = embaralhar(candidatas);
  const filas = {};
  candidatas.forEach((id) => {
    const area = AREAS.find((a) => a.id === id);
    filas[id] = embaralhar(area.perguntas.map((_, i) => `${id}-${i}`)).slice(0, PERGUNTAS_POR_CANDIDATA);
  });
  const ordem = [];
  for (let r = 0; r < PERGUNTAS_POR_CANDIDATA; r++) ordemAreas.forEach((id) => ordem.push(filas[id][r]));
  return ordem;
}

function respostaFase1Chave(respostas) {
  return JSON.stringify(GERAIS.map((g) => respostas[g.id] ?? null));
}

// Pontuação de 5 a 35 por área (média das respostas ×5), compatível com a página de resultado.
// As candidatas vêm primeiro, ordenadas pela pontuação final; as demais, pela fase 1.
function calcularResultadoRapido(respostas, candidatas) {
  const sorteio = {};
  AREAS.forEach((a) => (sorteio[a.id] = Math.random()));
  const info = AREAS.map((a) => {
    const v = GERAIS.filter((g) => g.areas.includes(a.id)).map((g) => respostas[g.id]);
    let altas = v.filter((x) => x >= 6).length;
    if (candidatas.includes(a.id)) {
      a.perguntas.forEach((_, i) => {
        const r = respostas[`${a.id}-${i}`];
        if (r !== undefined) { v.push(r); if (r >= 6) altas++; }
      });
    }
    const media = v.reduce((x, y) => x + y, 0) / v.length;
    return { id: a.id, nome: a.nome, pontos: Math.min(35, Math.max(5, Math.round(media * 5))), altas, cand: candidatas.includes(a.id) };
  });
  return info
    .sort((x, y) => Number(y.cand) - Number(x.cand) || y.pontos - x.pontos || y.altas - x.altas || sorteio[y.id] - sorteio[x.id])
    .map(({ id, nome, pontos }) => ({ id, nome, pontos }));
}

function textoPergunta(id) {
  const g = GERAIS.find((q) => q.id === id);
  return g ? g.texto : perguntaPorId(id).texto;
}

function modoAtual() {
  const url = new URLSearchParams(location.search).get('modo');
  if (url === 'completo' || url === 'rapido') { STORE.setItem('modo', url); return url; }
  return STORE.getItem('modo') === 'completo' ? 'completo' : 'rapido';
}

// ---------- página de perguntas ----------
const VERSAO_TESTE = 4; // aparece no console; ajuda a conferir se o navegador carregou os arquivos novos

function mostrarFalha(motivo, erro) {
  if (erro) console.error('[Teste vocacional v' + VERSAO_TESTE + ']', motivo, erro);
  const aviso = document.getElementById('aviso');
  if (!aviso) return;
  aviso.innerHTML = '';
  aviso.append('Algo deu errado (' + motivo + '). Atualize a página com Ctrl+F5 (ou limpe o cache do navegador) e ');
  const a = document.createElement('a');
  a.href = 'index.html';
  a.textContent = 'recomece o teste';
  a.addEventListener('click', reiniciarTeste);
  aviso.append(a, '.');
}

function iniciarPerguntas() {
  console.info('[Teste vocacional] versão', VERSAO_TESTE);
  const faltando = [];
  if (typeof AREAS === 'undefined') faltando.push('quiz-data.js');
  if (typeof GERAIS === 'undefined') faltando.push('quiz-rapido-data.js');
  if (faltando.length) {
    mostrarFalha('arquivo não carregado: ' + faltando.join(', ') + '. Confira se ele está na mesma pasta do perguntas.html e se a página tem a tag <script> dele');
    return;
  }
  const modo = modoAtual();
  const rapido = modo === 'rapido';
  const respostas = lerJSON('respostas', {});
  const porPagina = rapido ? POR_PAGINA_RAPIDO : POR_PAGINA;

  // modo completo: 70 perguntas embaralhadas; rápido: fase 1 (gerais) e fase 2 (específicas, gerada depois)
  let ordem1 = rapido ? lerJSON('ordem1', null) : obterOrdem();
  if (rapido && (!ordem1 || ordem1.length !== GERAIS.length)) { ordem1 = embaralhar(GERAIS.map((g) => g.id)); gravarJSON('ordem1', ordem1); }
  let fase2 = rapido ? lerJSON('fase2', null) : null; // { candidatas, ordem, chave }

  const paginasFase1 = rapido ? Math.ceil(ordem1.length / porPagina) : 0;
  const totalPaginas = rapido ? paginasFase1 + Math.ceil((N_CANDIDATAS * PERGUNTAS_POR_CANDIDATA) / porPagina) : Math.ceil(ordem1.length / porPagina);
  let pagina = Math.min(Number(STORE.getItem('pagina') || 0), totalPaginas - 1);
  if (rapido && pagina >= paginasFase1 && !fase2) pagina = paginasFase1 - 1;

  const lista = document.getElementById('lista');
  const barra = document.getElementById('barra');
  const texto = document.getElementById('progresso');
  const aviso = document.getElementById('aviso');
  const voltar = document.getElementById('voltar');
  const proximo = document.getElementById('proximo');
  const etapa = document.getElementById('etapa');

  const idsDaPagina = () => {
    if (!rapido) return ordem1.slice(pagina * porPagina, (pagina + 1) * porPagina);
    return pagina < paginasFase1
      ? ordem1.slice(pagina * porPagina, (pagina + 1) * porPagina)
      : fase2.ordem.slice((pagina - paginasFase1) * porPagina, (pagina - paginasFase1 + 1) * porPagina);
  };
  const todasAsPerguntas = () => ordem1.concat(rapido && fase2 ? fase2.ordem : []);
  const totalPerguntas = rapido ? GERAIS.length + N_CANDIDATAS * PERGUNTAS_POR_CANDIDATA : ordem1.length;

  function atualizarProgresso() {
    const respondidas = todasAsPerguntas().filter((id) => respostas[id] !== undefined).length;
    const pct = Math.round((respondidas / totalPerguntas) * 100);
    barra.style.width = pct + '%';
    texto.textContent = pct + '%';
  }

  function render() {
    STORE.setItem('pagina', pagina);
    aviso.textContent = '';
    if (etapa) {
      etapa.textContent = !rapido ? '' : pagina < paginasFase1
        ? 'Etapa 1 de 2: perguntas gerais'
        : 'Etapa 2 de 2: perguntas mais específicas para o seu perfil';
    }
    lista.innerHTML = '';
    idsDaPagina().forEach((id) => {
      const item = document.createElement('div');
      item.className = 'question-item';
      item.innerHTML = `<p class="question-title"></p>
        <div class="scale-container">
          <span class="label concordar">Concordo</span>
          <div class="options" role="radiogroup"></div>
          <span class="label discordar">Discordo</span>
        </div>`;
      item.querySelector('.question-title').textContent = textoPergunta(id); // sem numeração
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
    try { avancar(); } catch (e) { mostrarFalha('não foi possível avançar', e); }
  });

  function avancar() {
    if (idsDaPagina().some((id) => respostas[id] === undefined)) {
      aviso.textContent = 'Responda todas as perguntas para continuar.';
      return;
    }
    if (pagina === totalPaginas - 1) {
      const resultado = rapido ? calcularResultadoRapido(respostas, fase2.candidatas) : calcularResultado(respostas);
      gravarJSON('resultado', resultado);
      location.href = 'resultado.html';
      return;
    }
    if (rapido && pagina === paginasFase1 - 1) {
      // fim da fase 1: define (ou mantém, se as respostas não mudaram) as áreas da fase 2
      const chave = respostaFase1Chave(respostas);
      if (!fase2 || fase2.chave !== chave) {
        const candidatas = escolherCandidatas(respostas);
        fase2 = { candidatas, ordem: gerarFase2(candidatas), chave };
        gravarJSON('fase2', fase2);
      }
    }
    pagina++; render();
  }

  try { render(); } catch (e) { mostrarFalha('não foi possível carregar as perguntas', e); }
}

function reiniciarTeste() {
  ['ordem', 'ordem1', 'fase2', 'respostas', 'pagina', 'resultado'].forEach((k) => STORE.removeItem(k));
}
