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
