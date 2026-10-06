// Mostra a área mais compatível e, abaixo, as próximas duas.
(function () {
  let resultado = null;
  try { resultado = JSON.parse(sessionStorage.getItem('resultado')); } catch {}
  if (!resultado || !resultado.length) { location.replace('index.html'); return; }

  const [primeira, segunda, terceira] = resultado;
  document.getElementById('area').textContent = primeira.nome;
  document.title = 'Teste Vocacional – ' + primeira.nome;

  const outras = [segunda, terceira].filter(Boolean).map((a) => a.nome);
  if (outras.length) {
    const el = document.getElementById('outras');
    el.textContent = 'Também combinam com você: ' + outras.join(' e ') + '.';
    el.hidden = false;
  }

  // Imagem própria da área (img/resultado-<id>.png); se não existir, mantém a imagem padrão.
  const img = document.getElementById('ilustracao');
  const padrao = img.getAttribute('src');
  const teste = new Image();
  teste.onload = () => { img.src = teste.src; };
  teste.src = `img/resultado-${primeira.id}.png`;
  img.alt = '';

  document.getElementById('voltar-inicio').addEventListener('click', () => {
    ['ordem', 'respostas', 'pagina', 'resultado'].forEach((k) => sessionStorage.removeItem(k));
  });
})();

// ---------- Cursos técnicos e unidades Etec ----------
(function () {
  if (typeof CURSOS === 'undefined' || !CURSOS.length) return;
  let resultado = null;
  try { resultado = JSON.parse(sessionStorage.getItem('resultado')); } catch {}
  if (!resultado) return;

  const areas = resultado.slice(0, 3);
  const secao = document.getElementById('etecs');
  const lista = document.getElementById('etecs-lista');
  const filtro = document.getElementById('filtro-cidade');

  const cidades = [...new Set(CURSOS.flatMap((c) => c.unidades.map((u) => u.cidade)))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
  cidades.forEach((c) => filtro.add(new Option(c, c)));

  function el(tag, cls, texto) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (texto) e.textContent = texto;
    return e;
  }

  function render() {
    const cidade = filtro.value;
    lista.innerHTML = '';
    areas.forEach((area) => {
      const cursos = CURSOS.filter((c) => c.areas.includes(area.id))
        .map((c) => ({ ...c, unidades: c.unidades.filter((u) => !cidade || u.cidade === cidade) }))
        .filter((c) => c.unidades.length);
      if (!cursos.length) return;
      const bloco = el('div', 'etecs__area');
      bloco.appendChild(el('h4', 'etecs__area-nome', area.nome));
      cursos.forEach((c) => {
        const card = el('article', 'etecs__curso');
        card.appendChild(el('h5', 'etecs__curso-nome', c.nome));
        const ul = el('ul', 'etecs__unidades');
        c.unidades.forEach((u) => {
          const li = el('li');
          if (u.url) {
            const a = el('a', null, u.nome);
            a.href = u.url; a.target = '_blank'; a.rel = 'noopener';
            li.appendChild(a);
          } else li.appendChild(document.createTextNode(u.nome));
          li.appendChild(el('span', 'etecs__cidade', ' – ' + u.cidade));
          ul.appendChild(li);
        });
        card.appendChild(ul);
        bloco.appendChild(card);
      });
      lista.appendChild(bloco);
    });
    if (!lista.children.length) lista.appendChild(el('p', 'etecs__vazio', 'Nenhuma unidade encontrada para essa cidade.'));
  }

  filtro.addEventListener('change', render);
  secao.hidden = false;
  render();
})();
