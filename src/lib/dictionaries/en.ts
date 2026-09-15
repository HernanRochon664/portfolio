export const en = {
  meta: {
    title: "Hernan Rochon - ML Engineer & Data Scientist",
    description:
      "ML Engineer and Data Scientist building production ML systems with a focus on interpretability and measurable impact.",
  },
  nav: {
    projects: "Projects",
    lab: "Lab",
    about: "About",
    resume: "Resume",
    toggleTheme: "Toggle theme",
    github: "GitHub profile",
    language: "Change language",
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
        "Building production ML systems with a focus on interpretability and measurable impact.",
      ctaProjects: "View Projects",
      ctaResume: "Download Resume",
    },
    featured: {
      eyebrow: "FEATURED PROJECTS",
      title: "Selected work",
    },
    skills: {
      eyebrow: "TECHNICAL SKILLS",
      title: "What I work with",
      groups: {
        ml: "Machine Learning",
        mlops: "MLOps & Pipelines",
        data: "Data Engineering",
        frontend: "Frontend & Viz",
      },
    },
    lab: {
      eyebrow: "EXPERIMENTS & NOTEBOOKS",
      title: "Lab",
      viewAll: "View all experiments →",
    },
  },
  projects: {
    title: "All Projects",
    subtitle: "A collection of ML engineering work",
    metaTitle: "Projects",
    metaDescription:
      "Machine learning case studies: end-to-end platforms, price intelligence and recommendation systems.",
    status: {
      completed: "Completed",
      "in-progress": "In Progress",
      planned: "Planned",
    },
    viewCaseStudy: "View case study →",
    liveDemo: "↗ Live demo",
    liveDemoTitle: "Free tier - may have cold start",
    viewSource: "View source on GitHub",
    back: "← Back to projects",
    viewOnGithub: "View on GitHub",
    sections: {
      problem: "The Problem",
      solution: "The Solution",
      impact: "Impact",
      challenges: "Engineering Challenges",
      lessons: "Lessons Learned",
    },
  },
  lab: {
    title: "Lab",
    subtitle: "Experiments, notebooks and mini-projects",
    metaTitle: "Lab",
    metaDescription:
      "Experiments, notebooks and smaller machine learning studies by Hernan Rochon.",
    viewSource: "View source on GitHub",
  },
  about: {
    title: "About",
    metaTitle: "About",
    metaDescription:
      "ML Engineer and Data Scientist based in Uruguay, building end-to-end machine learning systems.",
    bio: {
      originBefore:
        "My first contact with programming happened inside Minecraft. I already played it as a kid, but as a teenager I drifted toward the more technical side of the game - I started experimenting with commands, building custom items and mobs and sketching out a Capture-the-Flag-style map that never quite got finished. That was the moment the word ",
      originEmphasis: "programming",
      originAfter:
        " stopped being abstract for me. I went looking for \u201chow to learn to code\u201d and landed on the usual web stack - HTML, CSS and JavaScript - then moved into Python, a language I had been hearing about for years, and followed it into machine learning once I saw what it was actually used for.",
      intro:
        "I'm Hernan Rochon, a ML Engineer and Data Scientist based in Uruguay. I build end-to-end machine learning systems that solve concrete business problems - customer risk, churn, anomaly detection, demand anticipation - turning them into reliable services that decision-makers can actually act on. The work spans the full ML lifecycle, from data pipelines and feature engineering to model training, evaluation and deployment, with a strong focus on production readiness, interpretability and measurable impact.",
      values:
        "I care about systems that are reproducible, testable and honest about their limitations - models that ship, keep working and tell you when they shouldn't be trusted.",
      looking:
        "I'm currently looking for my first professional role as a ML Engineer or Data Scientist. I'm open to remote opportunities.",
    },
    practicesTitle: "HOW I BUILD",
    practices: {
      aiAssisted: {
        title: "AI-assisted development",
        description:
          "OpenCode as implementation engine, guided by detailed specs and architectural decisions I define and review",
      },
      testing: {
        title: "Testing",
        description: "pytest with coverage reporting - 127 tests, 82% coverage in BizSentinel",
      },
      tracking: {
        title: "Experiment tracking",
        description: "MLflow for model registry, metrics and artifact versioning",
      },
      containers: {
        title: "Containerization",
        description: "Docker and docker-compose for reproducible environments",
      },
      cicd: {
        title: "CI/CD",
        description: "GitHub Actions for automated linting, type checking and test runs",
      },
      types: {
        title: "Type safety",
        description: "Pydantic data contracts, Pyright static analysis across all projects",
      },
      repro: {
        title: "Reproducibility",
        description: "uv for environment management, YAML configs, documented decisions",
      },
      git: {
        title: "Git discipline",
        description: "Conventional commits and feature branches",
      },
      docs: {
        title: "Documentation",
        description: "Architecture docs, decision logs and AGENTS.md in every project",
      },
    },
  },
  contact: {
    title: "Contact",
    metaTitle: "Contact",
    metaDescription: "Get in touch with Hernan Rochon.",
  },
  resume: {
    metaTitle: "Resume",
    metaDescription: "Resume of Hernan Rochon, ML Engineer & Data Scientist.",
    role: "ML Engineer & Data Scientist",
    photoAlt: "Portrait of Hernan Rochon",
    download: "Download PDF",
    sections: {
      summary: "Summary",
      projects: "Projects",
      skills: "Skills",
      certifications: "Certifications",
      education: "Education",
      languages: "Languages",
    },
    summary:
      "Self-taught ML Engineer and Data Scientist with hands-on experience building end-to-end machine learning systems. Focused on production-ready pipelines, model interpretability, and measurable impact. Looking for a first professional role as a ML Engineer or Data Scientist.",
    stackLabel: "Stack:",
    projects: [
      {
        title: "BizSentinel",
        subtitle: "End-to-end ML platform for e-commerce customer intelligence",
        bullets: [
          "Detects at-risk customers, anomalous transactions and churn signals so SMBs can act before losing revenue - 97,896 customers scored",
          "Implemented privacy-preserving ML with HMAC pseudonymization and differential privacy (ε≤5)",
          "127 unit tests, 82% coverage",
        ],
        stack: "Python, LightGBM, Kedro, MLflow, FastAPI, Docker",
      },
      {
        title: "Hardware Pulse",
        subtitle: "PC hardware price intelligence system",
        bullets: [
          "Helps Uruguayan PC buyers time their purchase and find the cheapest retailer across GPUs, CPUs, SSDs and RAM",
          "Three-tier entity resolution (exact → regex → fuzzy) reconciles inconsistent retailer listings into canonical SKUs, so comparisons are reliable",
        ],
        stack: "Python, BeautifulSoup, SQLite, RapidFuzz, Scikit-learn, Streamlit",
      },
      {
        title: "Music Taste Recommender",
        subtitle: "Business-driven hybrid recommendation engine",
        bullets: [
          "Boosts music discovery without sacrificing relevance - raising genre diversity from 19% to 70% at a 0.89 relevance score, so listeners explore more of the catalog without churning out",
          "Evaluated across 500 simulated users and 5 configurable business strategies",
        ],
        stack: "Python, Sentence-Transformers, Scikit-learn, Streamlit, Hugging Face",
      },
    ],
    skills: {
      ml: { label: "Machine Learning", values: "Python, Scikit-learn, LightGBM, Keras, SHAP" },
      mlops: { label: "MLOps & Pipelines", values: "Kedro, MLflow, Prefect, Docker, FastAPI" },
      data: {
        label: "Data Engineering",
        values: "pandas, SQLite, PostgreSQL, BeautifulSoup, RapidFuzz",
      },
      frontend: { label: "Frontend & Visualization", values: "Streamlit, Dash" },
    },
    certifications: [
      "Microsoft AI & ML Engineering Professional Certificate - Coursera (5 courses)",
      "IBM AI Fundamentals",
      "Udemy: Machine Learning, Deep Learning, MLOps, Web Scraping, Data Analysis & Visualization",
    ],
    education: "Secondary School Diploma, Scientific & Engineering track - 2025",
    languages: {
      spanish: { label: "Spanish", level: "Native" },
      english: { label: "English", level: "B2 Cambridge International Certificate" },
    },
  },
  notFound: {
    title: "Page not found",
    description: "The page you're looking for doesn't exist or has been moved.",
    goHome: "Go home",
    viewProjects: "View projects",
  },
};

export type Dictionary = typeof en;
