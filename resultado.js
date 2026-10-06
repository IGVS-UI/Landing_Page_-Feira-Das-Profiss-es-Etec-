// Página de resultado: lê o resultado calculado pelo teste e monta o conteúdo da área.
(function () {
  const IMAGENS_PROPRIAS = {
    'educacao-e-licenciaturas': 'img/Professora e aluna colorindo juntas.png',
  };
  const MODALIDADES = {
    ead: 'EaD (online)',
    mtec: 'Ensino Médio integrado ao técnico',
    mtecn: 'Integrado ao Ensino Médio – noturno',
  };

  const $ = (id) => document.getElementById(id);

  // Lê e valida o resultado; devolve null se estiver ausente ou inconsistente.
  function lerResultado() {
    let dados;
    try { dados = JSON.parse(sessionStorage.getItem('resultado')); } catch { return null; }
    if (!Array.isArray(dados) || !dados.length) return null;
    const vistos = new Set();
    for (const r of dados) {
      if (!r || typeof r.id !== 'string' || !AREAS_INFO[r.id] || vistos.has(r.id)) return null;
      if (!Number.isInteger(r.pontos) || r.pontos < 5 || r.pontos > 35) return null; // 5 perguntas × 1–7
      vistos.add(r.id);
    }
    // a ordem já vem definida pelo teste (pontuação e desempate; no modo rápido, as áreas exploradas na etapa 2 vêm primeiro)
    return dados.slice(0, 3);
  }

  function el(tag, cls, texto) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (texto !== undefined) e.textContent = texto;
    return e;
  }

  function km(v) { return v.toFixed(1).replace('.', ','); }

  function cartaoUnidade(oferta) {
    const u = UNIDADES[oferta.unidade];
    const prioridade = u.id === ADHEMAR_ID;
    const li = el('li', 'etec' + (prioridade ? ' etec--prioridade' : ''));
    if (prioridade) li.appendChild(el('span', 'etec__selo', 'Prioridade'));
    li.appendChild(el('p', 'etec__nome', u.nome));
    li.appendChild(el('p', 'etec__end', u.endereco));
    li.appendChild(el('p', 'etec__dist', prioridade
      ? 'Unidade de referência'
      : `≈ ${km(u.distanciaKm)} km em linha reta da Etec Adhemar`));
    const ul = el('ul', 'etec__cursos');
    oferta.cursos.forEach((c) => {
      const item = el('li');
      item.appendChild(el('strong', null, c.nome));
      if (c.modalidade) item.appendChild(el('span', 'etiqueta', MODALIDADES[c.modalidade]));
      if (c.relacionada) item.appendChild(el('span', 'etiqueta etiqueta--rel', 'Curso relacionado'));
      ul.appendChild(item);
    });
    li.appendChild(ul);
    // só mostra a nota quando traz algo além do genérico "opção relacionada"
    if (oferta.notaCursos && !/^opç(ão|ões) relacionad[ao]s?$/.test(oferta.notaCursos)) {
      li.appendChild(el('p', 'etec__dist', oferta.notaCursos.charAt(0).toUpperCase() + oferta.notaCursos.slice(1) + '.'));
    }
    if (/^https:\/\//.test(u.url)) {
      const a = el('a', 'etec__link', 'Ver página da unidade');
      a.href = u.url; a.target = '_blank'; a.rel = 'noopener';
      li.appendChild(a);
    }
    return li;
  }

  function imagem(area) {
    const fig = $('imagem'), img = $('imagem-img');
    const icone = () => {
      fig.classList.remove('imagem--cheia');
      img.width = 256; img.height = 256;
      img.alt = ''; // decorativa: o nome da área já está no título
      img.src = area.icone;
    };
    icone();
    const propria = IMAGENS_PROPRIAS[area.id] || `img/resultado-${area.id}.png`;
    const teste = new Image();
    teste.onload = () => {
      if (!$('imagem') || $('area-nome').dataset.id !== area.id) return; // usuário trocou de área
      fig.classList.add('imagem--cheia');
      img.removeAttribute('width'); img.removeAttribute('height');
      img.alt = 'Ilustração da área ' + area.nome.toLowerCase();
      img.src = teste.src;
    };
    teste.src = propria;
  }

  function mostrarArea(top, posicao) {
    const area = AREAS_INFO[top[posicao].id];
    $('area-nome').textContent = area.nome;
    $('area-nome').dataset.id = area.id;
    $('area-rotulo').textContent = posicao === 0
      ? 'A área de atuação mais compatível com você é:'
      : 'Esta área também combina com você:';
    document.title = 'Teste Vocacional – ' + area.nome;
    $('explicacao').textContent = area.explicacao;

    const atuacao = $('atuacao'); atuacao.replaceChildren();
    area.atuacao.forEach((t) => atuacao.appendChild(el('li', null, t)));

    const sal = $('salario'); sal.replaceChildren();
    area.salario.forEach((linha) => {
      const li = el('li');
      const i = linha.indexOf(':');
      if (i > 0) { li.appendChild(el('strong', null, linha.slice(0, i + 1) + ' ')); li.appendChild(document.createTextNode(linha.slice(i + 1).trim())); }
      else li.textContent = linha;
      sal.appendChild(li);
    });
    $('aviso-salario').textContent = AVISOS.salario;

    $('etecs-qtd').textContent = `(${area.ofertas.length})`;
    const sem = $('aviso-sem-exato');
    sem.hidden = !area.semCursoExato;
    sem.textContent = area.semCursoExato
      ? 'Não há um curso técnico equivalente a esta área nas ETECs consultadas. Os cursos abaixo são alternativas relacionadas e não substituem a graduação.'
      : '';
    $('nota-tipo').textContent = 'Esta é uma área profissional ampla. As ETECs oferecem cursos técnicos; graduações (como as licenciaturas) são cursadas no ensino superior.';
    const lista = $('etecs'); lista.replaceChildren();
    area.ofertas.forEach((o) => lista.appendChild(cartaoUnidade(o)));
    $('observacao').textContent = area.observacao ? 'Observação: ' + area.observacao : '';

    const notas = $('notas'); notas.replaceChildren();
    [AVISOS.distancia, AVISOS.modalidades, AVISOS.selecao, AVISOS.ofertaMuda, AVISOS.consulta]
      .forEach((t) => notas.appendChild(el('li', null, t)));

    imagem(area);
    document.querySelectorAll('.chip').forEach((b, i) => b.setAttribute('aria-pressed', String(i === posicao)));
  }

  function iniciar() {
    const top = lerResultado();
    if (!top) { $('erro').hidden = false; document.title = 'Teste Vocacional – Resultado indisponível'; return; }

    if (top.length > 1) {
      const lista = $('outras-lista');
      top.forEach((r, i) => {
        const li = el('li');
        const nomeTeste = AREAS.find((a) => a.id === r.id).nome;
        const b = el('button', 'chip', `${i + 1}º ${nomeTeste}`);
        b.type = 'button';
        b.appendChild(el('small', null, `${r.pontos}/35`));
        b.addEventListener('click', () => mostrarArea(top, i));
        li.appendChild(b);
        lista.appendChild(li);
      });
      $('outras').hidden = false;
    }
    $('resultado').hidden = false;
    mostrarArea(top, 0);
  }

  $('voltar-inicio').addEventListener('click', () => {
    ['ordem', 'ordem1', 'fase2', 'respostas', 'pagina', 'resultado'].forEach((k) => sessionStorage.removeItem(k));
  });

  iniciar();
})();
