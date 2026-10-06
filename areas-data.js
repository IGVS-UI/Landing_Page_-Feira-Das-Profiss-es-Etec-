// Gerado por tools/xlsx_para_areas.py a partir de dados/Cursos_Etecs_Zona_Leste.xlsx. Não edite à mão.
const ADHEMAR_ID = "etec-professor-adhemar-batista-hemeritas";
const UNIDADES = {
 "etec-professor-adhemar-batista-hemeritas": {
  "id": "etec-professor-adhemar-batista-hemeritas",
  "nome": "Etec Professor Adhemar Batista Heméritas",
  "endereco": "Rua Abilene, 16 – Parque Santo Antônio",
  "distanciaKm": 0.0,
  "lat": -23.58067,
  "lng": -46.5233566,
  "precisao": "Coordenadas da escola",
  "url": "https://www.cps.sp.gov.br/etecs/etec-prof-adhemar-batista-hemeritas-vila-formosa/"
 },
 "etec-de-vila-formosa": {
  "id": "etec-de-vila-formosa",
  "nome": "Etec de Vila Formosa",
  "endereco": "Rua Bactória, 38 – Jardim Vila Formosa",
  "distanciaKm": 0.64,
  "lat": -23.57495,
  "lng": -46.52245,
  "precisao": "Coordenadas aproximadas do logradouro",
  "url": "https://www.cps.sp.gov.br/etecs/etec-de-vila-formosa-vila-formosa/"
 },
 "etec-sao-mateus": {
  "id": "etec-sao-mateus",
  "nome": "Etec São Mateus",
  "endereco": "Rua Soledade de Minas, 87 – São Mateus",
  "distanciaKm": 2.6,
  "lat": -23.58034,
  "lng": -46.4978578,
  "precisao": "Coordenadas aproximadas do logradouro",
  "url": "https://www.cps.sp.gov.br/etecs/etec-sao-mateus-sao-mateus/"
 },
 "etec-de-sapopemba": {
  "id": "etec-de-sapopemba",
  "nome": "Etec de Sapopemba",
  "endereco": "Rua Benjamim de Tudela, 155 – Fazenda da Juta",
  "distanciaKm": 5.17,
  "lat": -23.61275,
  "lng": -46.48661,
  "precisao": "Coordenadas aproximadas do logradouro",
  "url": "https://www.cps.sp.gov.br/etecs/etec-de-sapopemba-sapopemba/"
 },
 "etec-tereza-aparecida-cardoso-nunes-de-oliveira": {
  "id": "etec-tereza-aparecida-cardoso-nunes-de-oliveira",
  "nome": "Etec Tereza Aparecida Cardoso Nunes de Oliveira",
  "endereco": "Av. Waldemar Tietz, 1477 – Artur Alvim",
  "distanciaKm": 5.24,
  "lat": -23.5495668,
  "lng": -46.4847982,
  "precisao": "Coordenadas aproximadas do logradouro",
  "url": "https://www.cps.sp.gov.br/etecs/etec-tereza-aparecida-cardoso-nunes-de-oliveira-arthur-alvim/"
 },
 "etec-jose-rocha-mendes": {
  "id": "etec-jose-rocha-mendes",
  "nome": "Etec José Rocha Mendes",
  "endereco": "Rua Américo Vespucci, 1241 – Vila Prudente",
  "distanciaKm": 5.59,
  "lat": -23.58359,
  "lng": -46.57808,
  "precisao": "Coordenadas da escola",
  "url": "https://www.cps.sp.gov.br/etecs/etec-jose-rocha-mendes-vila-prudente/"
 },
 "etec-martin-luther-king": {
  "id": "etec-martin-luther-king",
  "nome": "Etec Martin Luther King",
  "endereco": "Rua Apucarana, 815 – Tatuapé",
  "distanciaKm": 5.61,
  "lat": -23.5456619,
  "lng": -46.5630187,
  "precisao": "Coordenadas da escola",
  "url": "https://www.cps.sp.gov.br/etecs/etec-martin-luther-king-tatuape/"
 },
 "etec-itaquera-ii": {
  "id": "etec-itaquera-ii",
  "nome": "Etec Itaquera II",
  "endereco": "Av. Miguel Ignácio Curi, s/nº – Vila Carmosina",
  "distanciaKm": 6.96,
  "lat": -23.54465,
  "lng": -46.4675,
  "precisao": "Coordenadas da escola",
  "url": "https://www.cps.sp.gov.br/etecs/etec-itaquera-ii-itaquera/"
 },
 "etec-de-tiquatira": {
  "id": "etec-de-tiquatira",
  "nome": "Etec de Tiquatira",
  "endereco": "Av. Condessa Elisabeth de Robiano, 5200 – Penha",
  "distanciaKm": 7.65,
  "lat": -23.5181279,
  "lng": -46.5546537,
  "precisao": "Coordenadas da escola",
  "url": "https://www.cps.sp.gov.br/etecs/etec-de-tiquatira-penha/"
 },
 "etec-parque-belem": {
  "id": "etec-parque-belem",
  "nome": "Etec Parque Belém",
  "endereco": "Rua Ulisses Cruz, 85 – Belém",
  "distanciaKm": 8.14,
  "lat": -23.53485,
  "lng": -46.58561,
  "precisao": "Coordenadas da escola",
  "url": "https://www.cps.sp.gov.br/etecs/etec-parque-belem-parque-belem/"
 },
 "etec-de-cidade-tiradentes": {
  "id": "etec-de-cidade-tiradentes",
  "nome": "Etec de Cidade Tiradentes",
  "endereco": "Rua Igarapé Água Azul, 70 – Cidade Tiradentes",
  "distanciaKm": 11.8,
  "lat": -23.595057,
  "lng": -46.4086497,
  "precisao": "Coordenadas aproximadas do logradouro",
  "url": "https://www.cps.sp.gov.br/etecs/etec-cidade-tiradentes-cidade-tiradentes/"
 },
 "etec-de-guaianazes": {
  "id": "etec-de-guaianazes",
  "nome": "Etec de Guaianazes",
  "endereco": "Rua Feliciano de Mendonça, 290 – Guaianases",
  "distanciaKm": 12.96,
  "lat": -23.5531345,
  "lng": -46.3997554,
  "precisao": "Coordenadas da escola",
  "url": "https://www.cps.sp.gov.br/etecs/etec-de-guaianazes-guaianases/"
 }
};
const AREAS_INFO = {
 "educacao-e-licenciaturas": {
  "id": "educacao-e-licenciaturas",
  "semCursoExato": true,
  "nome": "EDUCAÇÃO E LICENCIATURAS",
  "explicacao": "Forma profissionais para ensinar e organizar o processo de aprendizagem. As licenciaturas (Pedagogia, Letras, Matemática etc.) habilitam para dar aula na educação básica.",
  "atuacao": [
   "Professor(a) na educação infantil, fundamental ou médio",
   "Coordenação e gestão escolar",
   "Educação corporativa (treinamentos em empresas)",
   "Produção de material didático e EdTech"
  ],
  "salario": [
   "Início/apoio: R$ 1.800 – 3.000",
   "Professor(a) licenciado: R$ 3.500 – 7.000"
  ],
  "observacao": "Licenciatura é graduação e não existe na Etec. Secretariado e Recursos Humanos são alternativas relacionadas, não habilitam para lecionar.",
  "icone": "img/areas/educacao-e-licenciaturas.png",
  "ofertas": [
   {
    "unidade": "etec-professor-adhemar-batista-hemeritas",
    "cursos": [
     {
      "nome": "Secretariado",
      "modalidade": "ead",
      "relacionada": true
     },
     {
      "nome": "Recursos Humanos",
      "modalidade": "mtec",
      "relacionada": true
     }
    ],
    "notaCursos": "opções relacionadas"
   },
   {
    "unidade": "etec-de-vila-formosa",
    "cursos": [
     {
      "nome": "Secretariado",
      "modalidade": "ead",
      "relacionada": true
     },
     {
      "nome": "Recursos Humanos",
      "modalidade": null,
      "relacionada": true
     }
    ],
    "notaCursos": ""
   },
   {
    "unidade": "etec-tereza-aparecida-cardoso-nunes-de-oliveira",
    "cursos": [
     {
      "nome": "Recursos Humanos",
      "modalidade": null,
      "relacionada": true
     }
    ],
    "notaCursos": ""
   }
  ]
 },
 "tecnologia-e-informatica": {
  "id": "tecnologia-e-informatica",
  "semCursoExato": false,
  "nome": "TECNOLOGIA E INFORMÁTICA",
  "explicacao": "Estuda a criação de programas, sites, aplicativos e a manutenção de computadores e redes. É uma das áreas com mais vagas abertas no mercado.",
  "atuacao": [
   "Desenvolvimento de sistemas, sites e apps",
   "Suporte técnico e redes de computadores",
   "Banco de dados e análise de dados",
   "Segurança da informação"
  ],
  "salario": [
   "Início: R$ 2.500 – 4.000",
   "Experiente: R$ 6.000 – 12.000+"
  ],
  "observacao": "Adhemar priorizada. M-Tec = técnico integrado ao Ensino Médio. ADS é graduação; Desenvolvimento de Sistemas é curso técnico.",
  "icone": "img/areas/tecnologia-e-informatica.png",
  "ofertas": [
   {
    "unidade": "etec-professor-adhemar-batista-hemeritas",
    "cursos": [
     {
      "nome": "Desenvolvimento de Sistemas",
      "modalidade": null,
      "relacionada": false
     },
     {
      "nome": "Manutenção e Suporte em Informática",
      "modalidade": null,
      "relacionada": false
     }
    ],
    "notaCursos": ""
   },
   {
    "unidade": "etec-de-vila-formosa",
    "cursos": [
     {
      "nome": "Desenvolvimento de Sistemas",
      "modalidade": "mtec",
      "relacionada": false
     },
     {
      "nome": "Informática",
      "modalidade": "mtec",
      "relacionada": false
     }
    ],
    "notaCursos": ""
   },
   {
    "unidade": "etec-de-sapopemba",
    "cursos": [
     {
      "nome": "Desenvolvimento de Sistemas",
      "modalidade": null,
      "relacionada": false
     }
    ],
    "notaCursos": ""
   }
  ]
 },
 "industria-mecanica-e-automacao": {
  "id": "industria-mecanica-e-automacao",
  "semCursoExato": false,
  "nome": "INDÚSTRIA, MECÂNICA E AUTOMAÇÃO",
  "explicacao": "Prepara para projetar, operar e consertar máquinas, sistemas elétricos e linhas de produção automatizadas (robôs, sensores e CLPs).",
  "atuacao": [
   "Manutenção mecânica e elétrica industrial",
   "Automação e robótica (programação de CLP)",
   "Projetos mecânicos em CAD",
   "Controle de qualidade e produção"
  ],
  "salario": [
   "Início: R$ 2.500 – 4.000",
   "Experiente: R$ 5.000 – 9.000"
  ],
  "observacao": "A Adhemar atende à área elétrica/eletrônica. Para Mecânica, Mecatrônica e Automação Industrial, veja as demais unidades.",
  "icone": "img/areas/industria-mecanica-e-automacao.png",
  "ofertas": [
   {
    "unidade": "etec-professor-adhemar-batista-hemeritas",
    "cursos": [
     {
      "nome": "Eletroeletrônica",
      "modalidade": null,
      "relacionada": false
     },
     {
      "nome": "Eletrotécnica",
      "modalidade": null,
      "relacionada": false
     }
    ],
    "notaCursos": ""
   },
   {
    "unidade": "etec-jose-rocha-mendes",
    "cursos": [
     {
      "nome": "Eletroeletrônica",
      "modalidade": null,
      "relacionada": false
     },
     {
      "nome": "Eletrotécnica",
      "modalidade": null,
      "relacionada": false
     },
     {
      "nome": "Automação Industrial",
      "modalidade": "mtec",
      "relacionada": false
     }
    ],
    "notaCursos": ""
   },
   {
    "unidade": "etec-martin-luther-king",
    "cursos": [
     {
      "nome": "Mecânica",
      "modalidade": null,
      "relacionada": false
     },
     {
      "nome": "Mecatrônica",
      "modalidade": null,
      "relacionada": false
     },
     {
      "nome": "Automação Industrial",
      "modalidade": null,
      "relacionada": false
     }
    ],
    "notaCursos": ""
   }
  ]
 },
 "artes-design-e-comunicacao": {
  "id": "artes-design-e-comunicacao",
  "semCursoExato": false,
  "nome": "ARTES, DESIGN E COMUNICAÇÃO",
  "explicacao": "Trabalha com criação visual: cores, formas, imagens e textos para transmitir mensagens em peças gráficas, embalagens, placas e meios digitais.",
  "atuacao": [
   "Design gráfico e identidade visual",
   "Comunicação visual e sinalização",
   "Ilustração e animação",
   "Fotografia e edição de imagem"
  ],
  "salario": [
   "Início: R$ 2.000 – 3.500",
   "Experiente: R$ 4.500 – 8.000"
  ],
  "observacao": "A Adhemar não consta com Design Gráfico ou Design Gráfico no cadastro consultado. As opções foram ordenadas por proximidade.",
  "icone": "img/areas/artes-design-e-comunicacao.png",
  "ofertas": [
   {
    "unidade": "etec-de-vila-formosa",
    "cursos": [
     {
      "nome": "Design Gráfico",
      "modalidade": null,
      "relacionada": false
     }
    ],
    "notaCursos": ""
   },
   {
    "unidade": "etec-jose-rocha-mendes",
    "cursos": [
     {
      "nome": "Design Gráfico",
      "modalidade": null,
      "relacionada": false
     }
    ],
    "notaCursos": ""
   },
   {
    "unidade": "etec-de-tiquatira",
    "cursos": [
     {
      "nome": "Design Gráfico",
      "modalidade": null,
      "relacionada": false
     }
    ],
    "notaCursos": ""
   }
  ]
 },
 "gestao-negocios-e-financas": {
  "id": "gestao-negocios-e-financas",
  "semCursoExato": false,
  "nome": "GESTÃO, NEGÓCIOS E FINANÇAS",
  "explicacao": "Ensina a administrar empresas: organizar pessoas, dinheiro, documentos e processos para o negócio funcionar e dar lucro.",
  "atuacao": [
   "Administração de empresas",
   "Contabilidade e departamento fiscal",
   "Finanças e bancos",
   "Recursos humanos"
  ],
  "salario": [
   "Início: R$ 2.000 – 3.500",
   "Experiente: R$ 5.000 – 10.000"
  ],
  "observacao": "Na Adhemar, Recursos Humanos aparece no M-Tec. As escolas selecionadas não necessariamente oferecem todos os cursos desta área.",
  "icone": "img/areas/gestao-negocios-e-financas.png",
  "ofertas": [
   {
    "unidade": "etec-professor-adhemar-batista-hemeritas",
    "cursos": [
     {
      "nome": "Administração",
      "modalidade": null,
      "relacionada": false
     },
     {
      "nome": "Recursos Humanos",
      "modalidade": "mtec",
      "relacionada": false
     }
    ],
    "notaCursos": ""
   },
   {
    "unidade": "etec-de-vila-formosa",
    "cursos": [
     {
      "nome": "Administração",
      "modalidade": "mtec",
      "relacionada": false
     },
     {
      "nome": "Recursos Humanos",
      "modalidade": null,
      "relacionada": false
     }
    ],
    "notaCursos": ""
   },
   {
    "unidade": "etec-de-sapopemba",
    "cursos": [
     {
      "nome": "Administração",
      "modalidade": null,
      "relacionada": false
     }
    ],
    "notaCursos": ""
   }
  ]
 },
 "saude-biologicas-e-meio-ambiente": {
  "id": "saude-biologicas-e-meio-ambiente",
  "semCursoExato": false,
  "nome": "SAÚDE, BIOLÓGICAS E MEIO AMBIENTE",
  "explicacao": "Envolve o cuidado com a saúde das pessoas, a alimentação, os medicamentos e a preservação do meio ambiente.",
  "atuacao": [
   "Farmácias e drogarias",
   "Nutrição em hospitais, escolas e restaurantes",
   "Laboratórios de análises e química",
   "Gestão e fiscalização ambiental"
  ],
  "salario": [
   "Início (técnico): R$ 2.000 – 3.200",
   "Experiente/superior: R$ 4.000 – 7.000"
  ],
  "observacao": "Farmácia confirmada na Adhemar. As demais opções atendem a Nutrição ou Meio Ambiente; não substituem Farmácia.",
  "icone": "img/areas/saude-biologicas-e-meio-ambiente.png",
  "ofertas": [
   {
    "unidade": "etec-professor-adhemar-batista-hemeritas",
    "cursos": [
     {
      "nome": "Farmácia",
      "modalidade": null,
      "relacionada": false
     },
     {
      "nome": "Biotecnologia",
      "modalidade": null,
      "relacionada": false
     }
    ],
    "notaCursos": ""
   },
   {
    "unidade": "etec-de-vila-formosa",
    "cursos": [
     {
      "nome": "Meio Ambiente",
      "modalidade": "mtec",
      "relacionada": false
     }
    ],
    "notaCursos": ""
   },
   {
    "unidade": "etec-sao-mateus",
    "cursos": [
     {
      "nome": "Nutrição e Dietética",
      "modalidade": null,
      "relacionada": false
     }
    ],
    "notaCursos": ""
   }
  ]
 },
 "gastronomia-turismo-e-servicos": {
  "id": "gastronomia-turismo-e-servicos",
  "semCursoExato": false,
  "nome": "GASTRONOMIA, TURISMO E SERVIÇOS",
  "explicacao": "Forma profissionais para cozinhar, receber turistas, organizar viagens e atender bem em hotéis, restaurantes e eventos.",
  "atuacao": [
   "Cozinha em restaurantes e hotéis",
   "Agências de viagem e turismo",
   "Hotelaria e hospedagem",
   "Organização de eventos"
  ],
  "salario": [
   "Início: R$ 1.800 – 3.000",
   "Experiente: R$ 3.500 – 6.000"
  ],
  "observacao": "A Adhemar oferece Guia de Turismo online. Distância refere-se à sede/polo; cursos EaD não exigem o mesmo deslocamento diário de cursos presenciais.",
  "icone": "img/areas/gastronomia-turismo-e-servicos.png",
  "ofertas": [
   {
    "unidade": "etec-professor-adhemar-batista-hemeritas",
    "cursos": [
     {
      "nome": "Guia de Turismo",
      "modalidade": "ead",
      "relacionada": false
     }
    ],
    "notaCursos": ""
   },
   {
    "unidade": "etec-de-vila-formosa",
    "cursos": [
     {
      "nome": "Guia de Turismo",
      "modalidade": "ead",
      "relacionada": false
     }
    ],
    "notaCursos": ""
   },
   {
    "unidade": "etec-de-sapopemba",
    "cursos": [
     {
      "nome": "Gastronomia",
      "modalidade": "mtecn",
      "relacionada": false
     }
    ],
    "notaCursos": ""
   }
  ]
 },
 "setor-publico-direito-e-seguranca": {
  "id": "setor-publico-direito-e-seguranca",
  "semCursoExato": false,
  "nome": "SETOR PÚBLICO, DIREITO E SEGURANÇA",
  "explicacao": "Estuda as leis, os documentos jurídicos e o funcionamento dos órgãos públicos, além da segurança das pessoas e do trabalho.",
  "atuacao": [
   "Escritórios de advocacia e cartórios",
   "Servidor público (via concurso)",
   "Segurança do trabalho",
   "Segurança pública e privada"
  ],
  "salario": [
   "Início: R$ 2.200 – 3.500",
   "Experiente/concursado: R$ 5.000 – 10.000+"
  ],
  "observacao": "A Adhemar não consta com Serviços Jurídicos ou Segurança do Trabalho. As opções próximas atendem a subáreas diferentes; Direito é graduação.",
  "icone": "img/areas/setor-publico-direito-e-seguranca.png",
  "ofertas": [
   {
    "unidade": "etec-sao-mateus",
    "cursos": [
     {
      "nome": "Segurança do Trabalho",
      "modalidade": null,
      "relacionada": false
     }
    ],
    "notaCursos": ""
   },
   {
    "unidade": "etec-jose-rocha-mendes",
    "cursos": [
     {
      "nome": "Segurança do Trabalho",
      "modalidade": null,
      "relacionada": false
     }
    ],
    "notaCursos": ""
   },
   {
    "unidade": "etec-martin-luther-king",
    "cursos": [
     {
      "nome": "Serviços Jurídicos",
      "modalidade": null,
      "relacionada": false
     }
    ],
    "notaCursos": ""
   }
  ]
 },
 "agronegocio-e-zootecnia": {
  "id": "agronegocio-e-zootecnia",
  "semCursoExato": true,
  "nome": "AGRONEGÓCIO E ZOOTECNIA",
  "explicacao": "Cuida da produção no campo: plantações, criação de animais, alimentos e o comércio desses produtos.",
  "atuacao": [
   "Produção agrícola e pecuária",
   "Criação e manejo de animais",
   "Agroindústria e processamento de alimentos",
   "Venda de insumos e cooperativas"
  ],
  "salario": [
   "Início: R$ 2.200 – 3.500",
   "Experiente: R$ 4.500 – 8.000"
  ],
  "observacao": "Não há Agropecuária/Zootecnia nas opções locais deste guia. Alimentos, Química e Nutrição são alternativas relacionadas, não o curso exato.",
  "icone": "img/areas/agronegocio-e-zootecnia.png",
  "ofertas": [
   {
    "unidade": "etec-de-sapopemba",
    "cursos": [
     {
      "nome": "Alimentos",
      "modalidade": null,
      "relacionada": true
     }
    ],
    "notaCursos": "opção relacionada à agroindústria"
   },
   {
    "unidade": "etec-de-tiquatira",
    "cursos": [
     {
      "nome": "Química",
      "modalidade": null,
      "relacionada": true
     }
    ],
    "notaCursos": "opção relacionada"
   },
   {
    "unidade": "etec-de-cidade-tiradentes",
    "cursos": [
     {
      "nome": "Química",
      "modalidade": null,
      "relacionada": true
     },
     {
      "nome": "Nutrição e Dietética",
      "modalidade": null,
      "relacionada": true
     }
    ],
    "notaCursos": "opções relacionadas"
   }
  ]
 },
 "construcao-civil-e-infraestrutura": {
  "id": "construcao-civil-e-infraestrutura",
  "semCursoExato": false,
  "nome": "CONSTRUÇÃO CIVIL E INFRAESTRUTURA",
  "explicacao": "Prepara para planejar, desenhar e acompanhar obras de casas, prédios, estradas e instalações.",
  "atuacao": [
   "Técnico de obras e edificações",
   "Desenho técnico e projetos (CAD/BIM)",
   "Orçamento e planejamento de obras",
   "Instalações elétricas e hidráulicas"
  ],
  "salario": [
   "Início: R$ 2.500 – 4.000",
   "Experiente: R$ 5.000 – 9.000"
  ],
  "observacao": "A Adhemar não oferece Edificações no cadastro consultado. Está priorizada pelas opções relacionadas: Eletrotécnica e Transações Imobiliárias (EaD).",
  "icone": "img/areas/construcao-civil-e-infraestrutura.png",
  "ofertas": [
   {
    "unidade": "etec-professor-adhemar-batista-hemeritas",
    "cursos": [
     {
      "nome": "Eletrotécnica (instalações elétricas)",
      "modalidade": null,
      "relacionada": true
     },
     {
      "nome": "Transações Imobiliárias",
      "modalidade": "ead",
      "relacionada": true
     }
    ],
    "notaCursos": "opções relacionadas"
   },
   {
    "unidade": "etec-tereza-aparecida-cardoso-nunes-de-oliveira",
    "cursos": [
     {
      "nome": "Eletrotécnica (instalações prediais)",
      "modalidade": null,
      "relacionada": false
     }
    ],
    "notaCursos": ""
   },
   {
    "unidade": "etec-itaquera-ii",
    "cursos": [
     {
      "nome": "Edificações",
      "modalidade": null,
      "relacionada": false
     }
    ],
    "notaCursos": ""
   }
  ]
 },
 "estetica-beleza-e-bem-estar": {
  "id": "estetica-beleza-e-bem-estar",
  "semCursoExato": true,
  "nome": "ESTÉTICA, BELEZA E BEM-ESTAR",
  "explicacao": "Trabalha com cuidados de pele, cabelo, corpo e autoestima, usando técnicas e produtos de beleza com segurança.",
  "atuacao": [
   "Clínicas de estética",
   "Salões de beleza",
   "Spas e massoterapia",
   "Venda e consultoria de cosméticos"
  ],
  "salario": [
   "Início: R$ 1.800 – 3.000",
   "Experiente/autônomo: R$ 3.500 – 6.000+"
  ],
  "observacao": "A Adhemar não oferece Técnico em Estética: Farmácia é alternativa relacionada a dermocosméticos. As outras opções também são áreas relacionadas.",
  "icone": "img/areas/estetica-beleza-e-bem-estar.png",
  "ofertas": [
   {
    "unidade": "etec-professor-adhemar-batista-hemeritas",
    "cursos": [
     {
      "nome": "Farmácia",
      "modalidade": null,
      "relacionada": true
     }
    ],
    "notaCursos": "opção relacionada a dermocosméticos"
   },
   {
    "unidade": "etec-sao-mateus",
    "cursos": [
     {
      "nome": "Nutrição e Dietética",
      "modalidade": null,
      "relacionada": true
     }
    ],
    "notaCursos": "opção relacionada ao bem-estar"
   },
   {
    "unidade": "etec-de-tiquatira",
    "cursos": [
     {
      "nome": "Química",
      "modalidade": null,
      "relacionada": true
     }
    ],
    "notaCursos": "opção relacionada à indústria de cosméticos"
   }
  ]
 },
 "logistica-transporte-e-comercio": {
  "id": "logistica-transporte-e-comercio",
  "semCursoExato": false,
  "nome": "LOGÍSTICA, TRANSPORTE E COMÉRCIO",
  "explicacao": "Organiza como os produtos são comprados, guardados e entregues, do estoque até a casa do cliente.",
  "atuacao": [
   "Armazenagem e controle de estoque",
   "Transporte e distribuição",
   "Compras e suprimentos",
   "Comércio e e-commerce"
  ],
  "salario": [
   "Início: R$ 2.000 – 3.500",
   "Experiente: R$ 4.500 – 8.000"
  ],
  "observacao": "A Adhemar atende à parte de comércio. Para o curso técnico específico de Logística, veja a Etec Parque Belém.",
  "icone": "img/areas/logistica-transporte-e-comercio.png",
  "ofertas": [
   {
    "unidade": "etec-professor-adhemar-batista-hemeritas",
    "cursos": [
     {
      "nome": "Comércio Exterior",
      "modalidade": null,
      "relacionada": false
     },
     {
      "nome": "Comércio",
      "modalidade": "ead",
      "relacionada": false
     }
    ],
    "notaCursos": ""
   },
   {
    "unidade": "etec-de-vila-formosa",
    "cursos": [
     {
      "nome": "Comércio",
      "modalidade": null,
      "relacionada": false
     }
    ],
    "notaCursos": ""
   },
   {
    "unidade": "etec-parque-belem",
    "cursos": [
     {
      "nome": "Logística",
      "modalidade": null,
      "relacionada": false
     }
    ],
    "notaCursos": ""
   }
  ]
 },
 "economia-criativa-e-midias-sociais": {
  "id": "economia-criativa-e-midias-sociais",
  "semCursoExato": false,
  "nome": "ECONOMIA CRIATIVA E MÍDIAS SOCIAIS",
  "explicacao": "Usa criatividade e internet para gerar renda: conteúdo para redes sociais, marketing digital e divulgação de marcas.",
  "atuacao": [
   "Social media e gestão de redes",
   "Produção de conteúdo (vídeo, podcast)",
   "Marketing digital e tráfego pago",
   "Design para web"
  ],
  "salario": [
   "Início: R$ 2.000 – 3.500",
   "Experiente/freelancer: R$ 4.000 – 8.000+"
  ],
  "observacao": "Marketing confirmado na Adhemar como M-Tec (integrado ao Ensino Médio). Verifique modalidade, turno e vagas no Vestibulinho do semestre.",
  "icone": "img/areas/economia-criativa-e-midias-sociais.png",
  "ofertas": [
   {
    "unidade": "etec-professor-adhemar-batista-hemeritas",
    "cursos": [
     {
      "nome": "Marketing",
      "modalidade": "mtec",
      "relacionada": false
     }
    ],
    "notaCursos": ""
   },
   {
    "unidade": "etec-de-sapopemba",
    "cursos": [
     {
      "nome": "Marketing",
      "modalidade": null,
      "relacionada": false
     }
    ],
    "notaCursos": ""
   },
   {
    "unidade": "etec-martin-luther-king",
    "cursos": [
     {
      "nome": "Marketing",
      "modalidade": null,
      "relacionada": false
     }
    ],
    "notaCursos": ""
   }
  ]
 },
 "producao-cultural-e-entretenimento": {
  "id": "producao-cultural-e-entretenimento",
  "semCursoExato": false,
  "nome": "PRODUÇÃO CULTURAL E ENTRETENIMENTO",
  "explicacao": "Planeja e realiza shows, festas, peças, exposições e outros eventos culturais, cuidando da parte artística e da organização.",
  "atuacao": [
   "Produção de eventos e shows",
   "Artes cênicas e música",
   "Produção audiovisual",
   "Gestão de projetos culturais"
  ],
  "salario": [
   "Início: R$ 1.800 – 3.000",
   "Experiente: R$ 4.000 – 7.000"
  ],
  "observacao": "A Adhemar não consta com Eventos, Modelagem do Vestuário ou Design Gráfico. As opções próximas atendem a cursos diferentes da área cultural.",
  "icone": "img/areas/producao-cultural-e-entretenimento.png",
  "ofertas": [
   {
    "unidade": "etec-jose-rocha-mendes",
    "cursos": [
     {
      "nome": "Modelagem do Vestuário",
      "modalidade": "mtec",
      "relacionada": true
     }
    ],
    "notaCursos": "opção relacionada à produção cultural"
   },
   {
    "unidade": "etec-de-tiquatira",
    "cursos": [
     {
      "nome": "Modelagem do Vestuário",
      "modalidade": null,
      "relacionada": false
     },
     {
      "nome": "Design Gráfico",
      "modalidade": null,
      "relacionada": false
     }
    ],
    "notaCursos": ""
   },
   {
    "unidade": "etec-parque-belem",
    "cursos": [
     {
      "nome": "Eventos",
      "modalidade": null,
      "relacionada": false
     }
    ],
    "notaCursos": ""
   }
  ]
 }
};
const AVISOS = {
 "ofertaMuda": "A oferta de cursos muda a cada semestre. Antes de se inscrever, confirme no site oficial: vestibulinho.etec.sp.gov.br",
 "salario": "Faixas salariais são estimativas aproximadas para a cidade de São Paulo. Variam conforme cargo, empresa, experiência e formação técnica ou superior.",
 "distancia": "Distância aproximada em linha reta a partir da Etec Professor Adhemar Batista Heméritas. Não representa percurso, tempo de viagem ou transporte público.",
 "selecao": "Seleção de unidades da zona leste com cursos pertinentes; não é um levantamento exaustivo de todas as ETECs. Cadastro de cursos não garante abertura de vagas.",
 "modalidades": "M-Tec = Ensino Médio integrado ao técnico; M-Tec-N = integrado no período noturno; EaD = online.",
 "consulta": "Dados consultados em 06/10/2026."
};
