// Áreas e perguntas do teste (5 perguntas por área, 70 no total).
const AREAS = [
  {
    "id": "educacao-e-licenciaturas",
    "nome": "Educação e licenciaturas",
    "perguntas": [
      "Quando aprendo algo novo e acho interessante, sinto muita vontade de explicar isso para os meus amigos ou familiares.",
      "Eu tenho muita paciência para ajudar um colega que está com dificuldade em uma matéria ou questão que eu já entendi.",
      "Acredito que a melhor forma de melhorar o mundo e a sociedade é garantindo todos tenham acesso à informação e ao conhecimento.",
      "Sou frequentemente a pessoa que organiza ou insiste em fazer grupos de estudo entre meus colegas.",
      "Gosto de participar de projetos escolares que envolvem apresentações para outros alunos"
    ]
  },
  {
    "id": "tecnologia-e-informatica",
    "nome": "Tecnologia e informática",
    "perguntas": [
      "Quando uso um aplicativo ou jogo novo, sinto curiosidade para saber como ele funciona.",
      "Posso passar horas tentando resolver um problema no computador, configurando ou montando um setup.",
      "Prefiro lidar com os problemas de máquinas, códigos e lógica do que ter que passar o dia resolvendo problemas com pessoas.",
      "Meus amigos ou familiares sempre me pedem ajuda quando precisam resolver algo relacionado a tecnologia ou internet.",
      "Sou o tipo de pessoa que prefere explorar todas as configurações do que simplesmente ler o tutorial."
    ]
  },
  {
    "id": "industria-mecanica-e-automacao",
    "nome": "Indústria, mecânica e automação",
    "perguntas": [
      "Quando alguma coisa quebra em casa, minha primeira reação é tentar abri-lo para arrumar ao invés de ir direto ao conserto.",
      "Programas de TV ou vídeos que mostram \"como as coisas são feitas\" nas fábricas chamam muito a minha atenção.",
      "Gosto de atividades que envolvem montar peças, usar ferramentas manuais e construir coisas físicas, como maquetes ou lego.",
      "Gosto de quando as coisas são automatizadas, vê-las funcionando de forma autônoma é fascinante.",
      "Nas aulas de ciências ou física, os experimentos que envolvem mecânica e eletricidade são os que eu mais gosto."
    ]
  },
  {
    "id": "artes-design-e-comunicacao",
    "nome": "Artes, design e comunicação",
    "perguntas": [
      "Eu me importo muito com a aparência das coisas: cores, formato, estilo, tudo deve ser harmônico e belo.",
      "Tenho o costume de desenhar, talvez fazer rabiscos ou esboços, ou até editar e criar imagens no meu tempo livre.",
      "Quando vejo alguma coisa, como propagandas ou cartazes, com um design ruim, isso me incomoda e sei que poderia fazer melhor.",
      "As pessoas expressam mais o seu verdadeiro eu através de roupas, músicas ou obras favoritas do que por meio de conversas.",
      "Museus, exposições de arte, animações ou feiras de artesanato são coisas muito interessante na minha concepção."
    ]
  },
  {
    "id": "gestao-negocios-e-financas",
    "nome": "Gestão, negócios e finanças",
    "perguntas": [
      "Em trabalhos em grupo, geralmente eu quem assumo o papel de dividir as tarefas, cobrar os prazos e garantir que o trabalho seja entregue.",
      "Gosto de guardar dinheiro, pensar em como gastar e tentar fazer ele render mais.",
      "Tenho facilidade em convencer meus amigos ou família a toparem uma ideia minha ou seguirem minhas sugestões.",
      "Tenho vontade de iniciar um pequeno negócio ou gerenciar uma empresa no futuro.",
      "Já pensei em vender coisinhas na escola ou para meus colegas só pela emoção de criar meu próprio negócio e lucrar."
    ]
  },
  {
    "id": "saude-biologicas-e-meio-ambiente",
    "nome": "Saúde, biológicas e meio ambiente",
    "perguntas": [
      "Quando alguém se machuca ou passa mal perto de mim, gostaria de ter o conhecimento para ajudar apropriadamente.",
      "Nas aulas de biologia, assuntos ligados ao corpo humano, doenças e suas curas e como os órgãos funcionam me intrigam genuinamente.",
      "Gosto da ideia de passar meu tempo livre em meio à natureza, lendo ou assistindo a documentários sobre a vida animal e onde vivem.",
      "Eu me genuinamente me preocupo com questões do dia a dia ligadas à reciclagem e preservação do meio ambiente e gostaria de poder fazer mais sobre.",
      "Fazer experimentos em laboratórios, olhar coisas no microscópio ou dissecar algo nas aulas de ciências parece algo que eu gostaria de fazer."
    ]
  },
  {
    "id": "gastronomia-turismo-e-servicos",
    "nome": "Gastronomia, turismo e serviços",
    "perguntas": [
      "Gosto de testar receitas na cozinha, tentar inventar um prato novo e sinto me feliz em ver as pessoas apreciando o que eu preparo.",
      "Quando vai acontecer um passeio com amigos ou uma viagem em família, adoro organizar um tipo de roteiro, descobrir os melhores lugares para ir, para comer e se entreter.",
      "Fazer com que as visitas se sintam confortáveis e bem recebidas na minha casa é algo natural e merece a devida importância.",
      "Gosto de lugares movimentados, interagir com pessoas diferentes e animadas me cativa muito.",
      "Aprender sobre a cultura, a culinária típica e as tradições de outros lugares é o que me faz ter vontade de viajar por aí."
    ]
  },
  {
    "id": "setor-publico-direito-e-seguranca",
    "nome": "Setor público, direito e segurança",
    "perguntas": [
      "Fico indignado quando vejo uma injustiça acontecer perto de mim e sinto necessidade de defender as vítimas.",
      "Em discussões, busco me embasar em argumentos lógicos, fatos e regras para provar meu ponto, as motivações e emoções vem depois.",
      "Tenho paciência para ler regulamentos, manuais ou regras de conduta para garantir que tudo esteja dentro dos conformes.",
      "Admiro aqueles que protegem os outros, mantem a ordem garantir ou que garantem que a justiça seja para todos.",
      "Tenho forte interesse em participar de coisas como Grêmios Estudantis ou atividades que envolvem debates e a defesa de uma causa."
    ]
  },
  {
    "id": "agronegocio-e-zootecnia",
    "nome": "Agronegócio e zootecnia",
    "perguntas": [
      "A ideia de trabalhar em um escritório ou na cidade não é tão interessante; trabalhar ao ar livre ou no campo por outro lado, são cativantes.",
      "Tenho um certo interesse no cuidado de animais de fazenda e sobre como funciona o plantio.",
      "Entender sobre plantações, tratores e a tecnologia moderna aplicada nos animais e vegetais é um assunto interessante.",
      "Gosto da ideia cuidar de plantas, hortas ou jardins, e me interesso em como fazê-los crescerem mais fortes e saudáveis.",
      "Trocar as férias na cidade agitada por um período no interior, em chácaras ou fazendas, vivendo a rotina do campo, quase sempre é uma melhor opção"
    ]
  },
  {
    "id": "construcao-civil-e-infraestrutura",
    "nome": "Construção civil e infraestrutura",
    "perguntas": [
      "Sempre me causou certa curiosidade, ao olhar para prédios ou pontes, de como aquelas estruturas foram planejadas e feitas.",
      "Quando jogo algo como Minecraft ou The Sims, até mesmo montar LEGO, minha parte favorita é de planejar a estrutura e erguê-la da melhor forma.",
      "Tenho facilidade em olhar para um desenho feito no papel e imaginar exatamente como aquilo ficaria no mundo real.",
      "Quando acontecem reformas e eu estou presente, me pego pensando em como poderia deixar ainda melhor.",
      "Fico impressionado ao assistir vídeos ou documentários sobre megaestruturas, pontes quilométricas ou prédios que atingem os céus são um tipo de obra de arte."
    ]
  },
  {
    "id": "estetica-beleza-e-bem-estar",
    "nome": "Estética, beleza e bem-estar",
    "perguntas": [
      "Meus amigos frequentemente me pedem conselhos sobre qual roupa vestir, como arrumar o cabelo ou recomendações de produtos.",
      "Gosto muito de acompanhar o mundo da moda, da maquiagem ou de produtos de cuidado pessoal nas redes sociais.",
      "Acredito que um dos melhores jeitos de ajudar uma pessoa é melhorar a sua aparência, um jeito poderoso de garantir confiança e autoestima.",
      "Sou bastante vaidoso(a) com meus cuidados pessoais: skincare, hidratação ou cuidados com o cabelo.",
      "Adoro assistir a vídeos de transformações de visual (\"antes e depois\") e notar os detalhes que fizeram a maior diferença."
    ]
  },
  {
    "id": "logistica-transporte-e-comercio",
    "nome": "Logística, transporte e comércio",
    "perguntas": [
      "Sou o tipo de pessoa que, ao arrumar o quarto ou mochila, pensa na forma mais inteligente de encaixar tudo e otimizar espaço.",
      "Me interesso por entender a logística dos caminhões, navios ou aviões e imaginar toda a organização para que as encomendas cheguem nos seus destinos.",
      "Quando peço algo pela internet, acompanho o rastreamento e fico curioso sobre o caminho absurdo que ele teve de fazer até chegar em mim.",
      "Quando ando de carro, ônibus ou metrô, gosto de olhar o mapa ou o GPS para entender o trajeto e pensar se haveria um caminho mais rápido.",
      "Ao entrar em um grande supermercado ou atacadão, acho legal observar como os produtos são organizados, estocados e repostos nas prateleiras."
    ]
  },
  {
    "id": "economia-criativa-e-midias-sociais",
    "nome": "Economia criativa e mídias sociais",
    "perguntas": [
      "Já vi tantos memes, vídeos e propagandas que sei dizer o que faz elas viralizarem por aí.",
      "Produzir vídeos, editar fotos com filtros engraçado e roteiros criativos para postar nas redes sociais são coisas intuitivas e divertidas.",
      "Entender como os influenciadores ganham dinheiro e como os algoritmos das redes sociais funcionam é algo que realmente me interessa.",
      "Já tive, ou tenho, o sonho de criar um canal de vídeos no YouTube, talvez produzir um podcast ou fazer live streams sobre algo que gosto.",
      "Quando eu posto, não gosto que seja algo isolado, prefiro fazer meus posts serem um tipo de história contínua, ou um 'quadro' ou talvez uma série de vídeos que faça as pessoas quererem voltar sempre ao meu perfil."
    ]
  },
  {
    "id": "producao-cultural-e-entretenimento",
    "nome": "Produção cultural e entretenimento",
    "perguntas": [
      "Quando vou a um show, teatro ou evento da escola, gosto de reparar nos bastidores: a iluminação, o som, o palco e como tudo foi organizado, acho isso fascinante.",
      "Gosto da ideia de ajudar a organizar uma festa, um campeonato, evento ou uma apresentação, mesmo sabendo que dá muito trabalho.",
      "Trabalhar na madrugada ou em fins de semana não seria um problema se fosse para fazer um grande evento acontecer da forma mais incrível possível.",
      "Além de gostar de assistir filmes ou peças de teatros, me interesso em saber como foram feitas as gravações, os cenários e o trabalho da equipe de produção por trás das câmeras.",
      "Consigo me imaginar facilmente trabalhando diretamente com artistas, bandas ou atores, ajudando a organizar suas agendas, buscando patrocínios ou planejando suas turnês e apresentações."
    ]
  }
];
