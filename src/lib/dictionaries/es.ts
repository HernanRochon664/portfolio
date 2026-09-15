import type { Dictionary } from "./en";

export const es: Dictionary = {
  meta: {
    title: "Hernan Rochon - ML Engineer & Data Scientist",
    description:
      "ML Engineer y Data Scientist: sistemas de machine learning en producción, con foco en interpretabilidad e impacto medible.",
  },
  nav: {
    projects: "Proyectos",
    lab: "Lab",
    about: "Sobre mí",
    resume: "CV",
    toggleTheme: "Cambiar tema",
    github: "Perfil de GitHub",
    language: "Cambiar idioma",
  },
  footer: {
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
  },
  home: {
    hero: {
      headline: "ML Engineer & Data Scientist",
      tagline:
        "Sistemas de machine learning en producción, con foco en interpretabilidad e impacto medible.",
      ctaProjects: "Ver proyectos",
      ctaResume: "Descargar CV",
    },
    featured: {
      eyebrow: "PROYECTOS DESTACADOS",
      title: "Trabajo seleccionado",
    },
    skills: {
      eyebrow: "SKILLS TÉCNICAS",
      title: "Con qué trabajo",
      groups: {
        ml: "Machine Learning",
        mlops: "MLOps y pipelines",
        data: "Data Engineering",
        frontend: "Frontend y visualización",
      },
    },
    lab: {
      eyebrow: "EXPERIMENTOS Y NOTEBOOKS",
      title: "Lab",
      viewAll: "Ver todos los experimentos →",
    },
  },
  projects: {
    title: "Todos los proyectos",
    subtitle: "Una colección de trabajo en ingeniería de machine learning",
    metaTitle: "Proyectos",
    metaDescription:
      "Casos de estudio de machine learning: plataformas end-to-end, inteligencia de precios y sistemas de recomendación.",
    status: {
      completed: "Completado",
      "in-progress": "En curso",
      planned: "Planificado",
    },
    viewCaseStudy: "Ver caso de estudio →",
    liveDemo: "↗ Demo en vivo",
    liveDemoTitle: "Plan gratuito - puede tardar en arrancar",
    viewSource: "Ver código en GitHub",
    back: "← Volver a proyectos",
    viewOnGithub: "Ver en GitHub",
    sections: {
      problem: "El problema",
      solution: "La solución",
      impact: "Impacto",
      challenges: "Desafíos de ingeniería",
      lessons: "Aprendizajes",
    },
  },
  lab: {
    title: "Lab",
    subtitle: "Experimentos, notebooks y mini-proyectos",
    metaTitle: "Lab",
    metaDescription:
      "Experimentos, notebooks y estudios breves de machine learning de Hernan Rochon.",
    viewSource: "Ver código en GitHub",
  },
  about: {
    title: "Sobre mí",
    metaTitle: "Sobre mí",
    metaDescription:
      "ML Engineer y Data Scientist radicado en Uruguay, construyendo sistemas de machine learning end-to-end.",
    bio: {
      originBefore:
        "Mi primer contacto con la programación fue dentro de Minecraft. Ya lo jugaba de chico, pero en la adolescencia me fui hacia el lado más técnico del juego: empecé a experimentar con comandos, a crear ítems y mobs propios y a bocetar un mapa estilo Capture the Flag que nunca llegué a terminar. Ahí fue cuando la palabra ",
      originEmphasis: "programar",
      originAfter:
        " dejó de ser algo abstracto para mí. Busqué “cómo aprender a programar” y caí en el stack web de siempre - HTML, CSS y JavaScript -, después pasé a Python, un lenguaje del que venía escuchando hacía años, y lo seguí hasta el machine learning cuando vi para qué se usaba realmente.",
      intro:
        "Soy Hernan Rochon, ML Engineer y Data Scientist radicado en Uruguay. Construyo sistemas de machine learning end-to-end que resuelven problemas concretos de negocio - riesgo de clientes, fuga, detección de anomalías, anticipación de demanda - y los convierto en servicios confiables sobre los que se puede decidir. El trabajo cubre todo el ciclo de vida del ML, desde pipelines de datos y feature engineering hasta entrenamiento, evaluación y despliegue, con foco en que esté listo para producción, sea interpretable y tenga impacto medible.",
      values:
        "Me importan los sistemas reproducibles, testeables y honestos sobre sus limitaciones: modelos que llegan a producción, siguen funcionando y avisan cuando no hay que confiar en ellos.",
      looking:
        "Actualmente busco mi primer rol profesional como ML Engineer o Data Scientist. Estoy abierto a oportunidades remotas.",
    },
    practicesTitle: "CÓMO TRABAJO",
    practices: {
      aiAssisted: {
        title: "Desarrollo asistido por IA",
        description:
          "OpenCode como motor de implementación, guiado por specs detalladas y decisiones de arquitectura que defino y reviso yo",
      },
      testing: {
        title: "Testing",
        description: "pytest con reporte de cobertura - 127 tests, 82% de cobertura en BizSentinel",
      },
      tracking: {
        title: "Tracking de experimentos",
        description: "MLflow para registro de modelos, métricas y versionado de artefactos",
      },
      containers: {
        title: "Contenedores",
        description: "Docker y docker-compose para entornos reproducibles",
      },
      cicd: {
        title: "CI/CD",
        description: "GitHub Actions para linting, chequeo de tipos y tests automatizados",
      },
      types: {
        title: "Tipado estricto",
        description: "Contratos de datos con Pydantic y análisis estático con Pyright en todos los proyectos",
      },
      repro: {
        title: "Reproducibilidad",
        description: "uv para gestión de entornos, configs en YAML, decisiones documentadas",
      },
      git: {
        title: "Disciplina con Git",
        description: "Conventional commits y ramas por feature",
      },
      docs: {
        title: "Documentación",
        description: "Docs de arquitectura, registro de decisiones y AGENTS.md en cada proyecto",
      },
    },
  },
  contact: {
    title: "Contacto",
    metaTitle: "Contacto",
    metaDescription: "Contactate con Hernan Rochon.",
  },
  resume: {
    metaTitle: "CV",
    metaDescription: "CV de Hernan Rochon, ML Engineer & Data Scientist.",
    role: "ML Engineer & Data Scientist",
    photoAlt: "Retrato de Hernan Rochon",
    download: "Descargar PDF",
    sections: {
      summary: "Perfil",
      projects: "Proyectos",
      skills: "Skills",
      certifications: "Certificaciones",
      education: "Formación",
      languages: "Idiomas",
    },
    summary:
      "ML Engineer y Data Scientist autodidacta, con experiencia práctica construyendo sistemas de machine learning end-to-end. Foco en pipelines listos para producción, interpretabilidad de modelos e impacto medible. Busco mi primer rol profesional como ML Engineer o Data Scientist.",
    stackLabel: "Stack:",
    projects: [
      {
        title: "BizSentinel",
        subtitle: "Plataforma de ML end-to-end para inteligencia de clientes",
        bullets: [
          "Detecta clientes en riesgo, transacciones anómalas y señales de fuga para que las pymes actúen antes de perder ingresos - 97.896 clientes evaluados",
          "ML con preservación de privacidad: seudonimización HMAC y privacidad diferencial (ε≤5)",
          "127 tests unitarios, 82% de cobertura",
        ],
        stack: "Python, LightGBM, Kedro, MLflow, FastAPI, Docker",
      },
      {
        title: "Hardware Pulse",
        subtitle: "Inteligencia de precios de hardware de PC",
        bullets: [
          "Ayuda a los compradores uruguayos a elegir cuándo comprar y en qué retailer, en GPUs, CPUs, SSDs y RAM",
          "Resolución de entidades en tres niveles (exacto → regex → fuzzy) unifica listados inconsistentes en SKUs canónicos y hace fiable la comparación",
        ],
        stack: "Python, BeautifulSoup, SQLite, RapidFuzz, Scikit-learn, Streamlit",
      },
      {
        title: "Music Taste Recommender",
        subtitle: "Motor de recomendación híbrido orientado a negocio",
        bullets: [
          "Impulsa el descubrimiento sin sacrificar relevancia: sube la diversidad de géneros del 19% al 70% con relevancia 0,89, así el oyente explora más catálogo sin irse",
          "Evaluado sobre 500 usuarios simulados y 5 estrategias de negocio configurables",
        ],
        stack: "Python, Sentence-Transformers, Scikit-learn, Streamlit, Hugging Face",
      },
    ],
    skills: {
      ml: { label: "Machine Learning", values: "Python, Scikit-learn, LightGBM, Keras, SHAP" },
      mlops: { label: "MLOps y pipelines", values: "Kedro, MLflow, Prefect, Docker, FastAPI" },
      data: {
        label: "Data Engineering",
        values: "pandas, SQLite, PostgreSQL, BeautifulSoup, RapidFuzz",
      },
      frontend: { label: "Frontend y visualización", values: "Streamlit, Dash" },
    },
    certifications: [
      "Microsoft AI & ML Engineering Professional Certificate - Coursera (5 cursos)",
      "IBM AI Fundamentals",
      "Udemy: Machine Learning, Deep Learning, MLOps, Web Scraping, Análisis y Visualización de Datos",
    ],
    education: "Bachillerato completo, orientación Científico-Ingeniería - 2025",
    languages: {
      spanish: { label: "Español", level: "Nativo" },
      english: { label: "Inglés", level: "B2 Cambridge International Certificate" },
    },
  },
  notFound: {
    title: "Página no encontrada",
    description: "La página que buscás no existe o fue movida.",
    goHome: "Ir al inicio",
    viewProjects: "Ver proyectos",
  },
};
