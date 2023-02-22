const pt = {
  title: 'Título português!',

  banner: {
    firstLine: 'Olá mundo!',
    title: 'EU SOU O ELI',
    lastLine: 'Front End Developer & UI Designer'
  },

  features: {
    title: 'Características',
    cards: {
      1: {
        image: '/img/icons/interfaces.svg',
        title: 'Interfaces de Alta Fidelidade',
        text: 'I develop interfaces the way they were thought and designed.'
      },
      2: {
        image: '/img/icons/agile-methodologies.svg',
        title: 'Metodologias Ageis',
        text: 'I work using agile methodologies, to ensure quality & agility.'
      },
      3: {
        image: '/img/icons/web-development.svg',
        title: 'Web Development',
        text: 'I use the best technologies on the market to develop great solutions.'
      },
      4: {
        image: '/img/icons/web-app-design.svg',
        title: 'Web App Design',
        text: 'Responsive design',
        text2: '&',
        text3: 'Mobile first'
      }
    }
  },

  about: {
    title: 'Sobre mim',
    text: `Meu nome é Elissandro Vieira, mas pode me chamar de Eli.`,
    text2: `Tenho 27 anos e amo todo tipo de tecnologia.`,
    text3: `Trabalhei como UI Designer e Designer Gráfico nos últimos 10 anos.`,
    text4: `
            Em 2022 me apaixonei pelo Desenvolvimento Front-end e desde então estou focado em aprender mais e me tornar um profissional competente.
        `,
    text5: `
            Busco minha primeira oportunidade no mercado de tecnologia, estou animado com a ideia de contribuir com um time e adquirir muita experiência.
        `,

    downloadBtn: 'Baixar Currículo',
    downloadHref: 'https://github.com/elissandrovieira/portfolio/raw/main/public/cv/pt/cv-elissandro-vieira.pdf',
    contactBtn: 'Entre em contato'
  },

  skills: {
    title: 'Habilidades'
  },

  projects: {
    title: 'Ultimos projetos',

    repository: 'Repositório',

    live: 'Demonstração',

    seeMoreBtn: 'Veja mais projetos aqui',


    lastProjects: [
      {
        image: '/img/projects/second-hand.png',
        title: 'Second-Hand Marketplace',
        text: 'Um marketplace de items usados. Procure, compre ou venda items.',
        repository: 'https://github.com/elissandrovieira/second-hand-marketplace',
        live: 'https://second-hand-marketplace.vercel.app/'
      },
      {
        image: '/img/projects/react-crud-app.png',
        title: 'Projeto CRUD',
        text: 'Projeto CRUD desenvolvido com React.js.',
        repository: 'https://github.com/elissandrovieira/react-crud-project',
        live: 'https://react-crud-project-one.vercel.app/'
      },
    ],

    projectsList: [
      {
        image: '/img/projects/second-hand.png',
        title: 'Second-Hand Marketplace',
        text: 'Um marketplace de items usados. Procure, compre ou venda items.',
        repository: 'https://github.com/elissandrovieira/second-hand-marketplace',
        live: 'https://second-hand-marketplace.vercel.app/'
      },
      {
        image: '/img/projects/react-crud-app.png',
        title: 'Projeto CRUD',
        text: 'Projeto CRUD desenvolvido com React.js.',
        repository: 'https://github.com/elissandrovieira/react-crud-project',
        live: 'https://react-crud-project-one.vercel.app/'
      },
      {
        image: '/img/projects/to-do-list.png',
        title: 'Lista de tarefas',
        text: 'Registre tarefas, exclua ou complete suas tarefas.',
        repository: 'https://github.com/elissandrovieira/To-do-list',
        live: 'https://elissandrovieira.github.io/To-do-list/'
      },
      {
        image: '/img/projects/toa-website.png',
        title: 'Site The Orange Arrow',
        text: 'Site da agência de marketing de moda The Orange Arrow.',
        repository: 'https://github.com/elissandrovieira/The-Orange-Arrow-Website',
        live: 'https://elissandrovieira.github.io/The-Orange-Arrow-Website/'
      },
    ]
  },

  contact: {
    title: 'Interessado em',
    title2: 'trabalharmos',
    title3: 'juntos?',
    subtitle: 'Entre em contato',
    form: {
      fname: 'Digite seu nome',
      email: 'Digite seu e-mail',
      phone: 'Digite seu número de telefone',
      message: 'Me envie sua mensagem aqui'
    }
  }
}

export default pt