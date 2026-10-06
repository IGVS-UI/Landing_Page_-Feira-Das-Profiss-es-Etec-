// Teste rápido (20 perguntas): 8 perguntas gerais + 12 específicas.
// RASCUNHO das perguntas gerais: precisa de revisão da Mariana.
// Cada pergunta geral pontua em 3 a 4 áreas; todas as 14 áreas aparecem em pelo menos 2 perguntas.
const GERAIS = [
  { id: 'g1', texto: 'Gosto de ajudar as pessoas a aprender, a se cuidar ou a se sentir bem.',
    areas: ['educacao-e-licenciaturas', 'saude-biologicas-e-meio-ambiente', 'estetica-beleza-e-bem-estar', 'gastronomia-turismo-e-servicos'] },
  { id: 'g2', texto: 'Tenho curiosidade para entender como máquinas, sistemas e equipamentos funcionam por dentro.',
    areas: ['tecnologia-e-informatica', 'industria-mecanica-e-automacao', 'construcao-civil-e-infraestrutura', 'agronegocio-e-zootecnia'] },
  { id: 'g3', texto: 'Gosto de criar coisas: desenhar, editar imagens e vídeos, escrever ou inventar ideias originais.',
    areas: ['artes-design-e-comunicacao', 'economia-criativa-e-midias-sociais', 'producao-cultural-e-entretenimento', 'estetica-beleza-e-bem-estar'] },
  { id: 'g4', texto: 'Costumo organizar e liderar: dividir tarefas, cuidar de prazos, de dinheiro e de resultados.',
    areas: ['gestao-negocios-e-financas', 'logistica-transporte-e-comercio', 'economia-criativa-e-midias-sociais', 'setor-publico-direito-e-seguranca'] },
  { id: 'g5', texto: 'Gosto de ficar ao ar livre, perto da natureza, dos animais e das plantas.',
    areas: ['agronegocio-e-zootecnia', 'saude-biologicas-e-meio-ambiente'] },
  { id: 'g6', texto: 'Gosto de receber e atender pessoas, de viajar, cozinhar e de organizar encontros e eventos.',
    areas: ['gastronomia-turismo-e-servicos', 'estetica-beleza-e-bem-estar', 'producao-cultural-e-entretenimento', 'logistica-transporte-e-comercio'] },
  { id: 'g7', texto: 'Me importo com regras e justiça, e gosto de debater e defender uma causa.',
    areas: ['setor-publico-direito-e-seguranca', 'educacao-e-licenciaturas', 'gestao-negocios-e-financas'] },
  { id: 'g8', texto: 'Gosto de ver ideias virarem algo real: montar, construir, programar ou planejar como algo será feito.',
    areas: ['construcao-civil-e-infraestrutura', 'industria-mecanica-e-automacao', 'tecnologia-e-informatica', 'artes-design-e-comunicacao'] },
];
