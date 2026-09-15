import type { ProjectCaseStudy } from "@/types";

export const projects: ProjectCaseStudy[] = [
  {
    slug: "bizsentinel",
    title: "BizSentinel",
    subtitle: {
      en: "End-to-end ML platform for e-commerce customer intelligence",
      es: "Plataforma de ML end-to-end para inteligencia de clientes en e-commerce",
    },
    description: {
      en: "Spot high-risk customers, anomalous transactions and churn before revenue leaks - 97,896 SMB e-commerce customers scored end-to-end.",
      es: "Detecta clientes de riesgo, transacciones anómalas y fuga antes de perder ingresos - 97.896 clientes de e-commerce pyme evaluados de punta a punta.",
    },
    year: "2025",
    status: "completed",
    featured: true,
    tags: ["mlops", "anomaly-detection", "churn-prediction", "privacy"],
    coverImage: "/images/projects/bizsentinel.jpg",
    architectureImage: "",
    demoUrl: "https://biz-sentinel-dashboard.onrender.com",
    articleUrl: "",
    technologies: ["Python", "LightGBM", "Scikit-learn", "Kedro", "MLflow", "FastAPI", "Dash", "Docker"],
    metrics: [
      { label: { en: "Customers processed", es: "Clientes procesados" }, value: "97,896" },
      { label: { en: "Anomaly rate", es: "Tasa de anomalías" }, value: "1.47%" },
      { label: { en: "Test coverage", es: "Cobertura de tests" }, value: "82%" },
      { label: { en: "Unit tests", es: "Tests unitarios" }, value: "127" },
    ],
    problem: {
      en: "Small and medium e-commerce businesses collect transactional data but lack dedicated data science teams to extract actionable insights from it.",
      es: "Las pymes de e-commerce acumulan datos transaccionales pero no tienen equipos de data science que puedan convertirlos en decisiones accionables.",
    },
    solution: {
      en: "Three interconnected ML modules: Isolation Forest for anomaly detection, K-Means for customer segmentation, and LightGBM for churn scoring - each module feeding the next.",
      es: "Tres módulos de ML encadenados: Isolation Forest para detección de anomalías, K-Means para segmentación de clientes y LightGBM para scoring de fuga - cada módulo alimenta al siguiente.",
    },
    impact: {
      en: "Gives SMB e-commerce operators early warning on churn, fraud-like behavior and customer segments so they can intervene before revenue is lost - across 97,896 customers, with privacy-preserving pseudonymization and differential privacy on the churn model.",
      es: "Da a las pymes de e-commerce alerta temprana sobre fuga, comportamiento sospechoso y segmentos de clientes para intervenir antes de perder ingresos - sobre 97.896 clientes, con seudonimización y privacidad diferencial en el modelo de fuga.",
    },
    challenges: [
      {
        title: {
          en: "Module dependency chain",
          es: "Cadena de dependencias entre módulos",
        },
        description: {
          en: "Anomaly scores and segment labels from unsupervised modules needed to feed as features into the supervised churn model without data leakage.",
          es: "Los scores de anomalía y las etiquetas de segmento de los módulos no supervisados debían alimentar como features al modelo supervisado de fuga sin filtrar información.",
        },
      },
      {
        title: {
          en: "Privacy-preserving ML",
          es: "ML que preserva la privacidad",
        },
        description: {
          en: "Implementing differential privacy via diffprivlib while maintaining acceptable model performance required careful epsilon tuning.",
          es: "Implementar privacidad diferencial con diffprivlib sin degradar el rendimiento del modelo exigió un ajuste fino del epsilon.",
        },
      },
    ],
    lessonsLearned: [
      {
        title: {
          en: "Unsupervised outputs as supervised features",
          es: "Salidas no supervisadas como features supervisadas",
        },
        description: {
          en: "Feeding IsolationForest scores and KMeans labels into LightGBM meaningfully improved churn prediction - the pipeline design justified itself in the metrics.",
          es: "Alimentar LightGBM con los scores de IsolationForest y las etiquetas de KMeans mejoró de forma clara la predicción de fuga - el diseño del pipeline se justificó en las métricas.",
        },
      },
      {
        title: {
          en: "SQLite is enough",
          es: "SQLite alcanza",
        },
        description: {
          en: "Choosing SQLite over PostgreSQL eliminated operational overhead without any real cost at this data scale.",
          es: "Elegir SQLite en lugar de PostgreSQL eliminó carga operativa sin ningún costo real a esta escala de datos.",
        },
      },
    ],
    githubUrl: "https://github.com/HernanRochon664/biz-sentinel",
  },
  {
    slug: "hardware-pulse",
    title: "Hardware Pulse",
    subtitle: {
      en: "PC hardware price intelligence for the Uruguayan market",
      es: "Inteligencia de precios de hardware para el mercado uruguayo",
    },
    description: {
      en: "Helps Uruguayan PC buyers time their purchase and find the cheapest retailer across GPUs, CPUs, SSDs and RAM.",
      es: "Ayuda a los compradores uruguayos de PC a elegir el momento de compra y el retailer más barato en GPUs, CPUs, SSDs y RAM.",
    },
    year: "2025",
    status: "in-progress",
    featured: true,
    tags: ["web-scraping", "entity-resolution", "price-intelligence", "time-series"],
    coverImage: "/images/projects/hardware-pulse.jpg",
    architectureImage: "",
    demoUrl: "https://hardware-pulse.streamlit.app/",
    articleUrl: "",
    technologies: ["Python", "BeautifulSoup", "pandas", "SQLite", "RapidFuzz", "Scikit-learn", "Streamlit"],
    metrics: [
      { label: { en: "Retailers integrated", es: "Retailers integrados" }, value: "3+" },
      { label: { en: "Component categories", es: "Categorías de componentes" }, value: "4" },
      { label: { en: "Resolution pipeline stages", es: "Etapas de resolución" }, value: "3" },
      { label: { en: "Data contracts", es: "Contratos de datos" }, value: "Pydantic" },
    ],
    problem: {
      en: "PC hardware prices in Uruguay show high dispersion across retailers due to small market size, import costs and exchange rate volatility - with no existing tool to track or compare them.",
      es: "Los precios de hardware en Uruguay tienen una dispersión enorme entre retailers por el tamaño del mercado, los costos de importación y la volatilidad cambiaria - y no existía herramienta para seguirlos ni compararlos.",
    },
    solution: {
      en: "Automated scraping pipeline with three-tier entity resolution (exact match → regex → fuzzy), normalized price snapshots, and weekly feature engineering for price forecasting.",
      es: "Pipeline de scraping automatizado con resolución de entidades en tres niveles (exacto → regex → fuzzy), snapshots de precios normalizados y feature engineering semanal para pronóstico de precios.",
    },
    impact: {
      en: "Helps Uruguayan PC buyers time their purchase and find the cheapest retailer across GPUs, CPUs, SSDs and RAM - tracking 3+ local retailers with a reproducible pipeline, Pydantic data contracts and SQLite WAL mode for concurrent access.",
      es: "Ayuda a los compradores uruguayos a elegir cuándo comprar y en qué retailer, en GPUs, CPUs, SSDs y RAM - siguiendo 3+ comercios locales con un pipeline reproducible, contratos de datos Pydantic y SQLite en modo WAL para acceso concurrente.",
    },
    challenges: [
      {
        title: {
          en: "Entity resolution across inconsistent titles",
          es: "Resolución de entidades con títulos inconsistentes",
        },
        description: {
          en: "Product titles vary wildly between retailers. A three-tier pipeline (exact → regex → fuzzy with rapidfuzz) resolves listings to canonical SKUs with flagging for manual review.",
          es: "Los títulos de producto varían muchísimo entre retailers. Un pipeline de tres niveles (exacto → regex → fuzzy con rapidfuzz) resuelve los listados a SKUs canónicos y marca los casos dudosos para revisión manual.",
        },
      },
      {
        title: {
          en: "Scraping heterogeneous sites",
          es: "Scraping de sitios heterogéneos",
        },
        description: {
          en: "Each retailer uses different HTML structure and pagination. A BaseHTMLScraper Template Method pattern eliminated duplicated orchestration logic across scrapers.",
          es: "Cada retailer usa una estructura HTML y una paginación distintas. Un BaseHTMLScraper con patrón Template Method eliminó la lógica de orquestación duplicada entre scrapers.",
        },
      },
    ],
    lessonsLearned: [
      {
        title: {
          en: "Data contracts before scraping",
          es: "Contratos de datos antes del scraping",
        },
        description: {
          en: "Defining Pydantic models (RawListing, PriceSnapshot) before writing scrapers forced clarity on what data actually mattered and prevented schema drift.",
          es: "Definir los modelos Pydantic (RawListing, PriceSnapshot) antes de escribir los scrapers obligó a decidir qué datos importaban de verdad y evitó el drift de esquema.",
        },
      },
      {
        title: {
          en: "Engineering metrics replace model metrics in early stages",
          es: "Las métricas de ingeniería sustituyen a las del modelo al principio",
        },
        description: {
          en: "A well-designed pipeline with clear contracts and test coverage demonstrates engineering maturity even before model metrics are available.",
          es: "Un pipeline bien diseñado, con contratos claros y cobertura de tests, demuestra madurez de ingeniería incluso antes de tener métricas de modelo.",
        },
      },
    ],
    githubUrl: "https://github.com/HernanRochon664/hardware-pulse",
  },
  {
    slug: "music-recommender",
    title: "Music Taste Recommender",
    subtitle: {
      en: "Business-driven hybrid recommendation engine",
      es: "Motor de recomendación híbrido orientado a negocio",
    },
    description: {
      en: "Helps streaming listeners discover more of the catalog without losing relevance - pushing genre diversity from 19% to 70% at a 0.89 relevance score, so users explore instead of churning out.",
      es: "Ayuda a los oyentes de streaming a descubrir más catálogo sin perder relevancia - lleva la diversidad de géneros del 19% al 70% con relevancia 0,89, para que exploren en vez de irse.",
    },
    year: "2025",
    status: "completed",
    featured: true,
    tags: ["recommendation-systems", "embeddings", "nlp", "business-metrics"],
    coverImage: "/images/projects/music-recommender.jpg",
    architectureImage: "",
    demoUrl: "https://music-taste-recommender.streamlit.app/",
    articleUrl: "",
    technologies: ["Python", "Sentence-Transformers", "Scikit-learn", "Streamlit", "Hugging Face", "pandas"],
    metrics: [
      { label: { en: "Diversity improvement", es: "Mejora de diversidad" }, value: "+267%" },
      { label: { en: "Relevance maintained", es: "Relevancia mantenida" }, value: "0.89" },
      { label: { en: "Tracks processed", es: "Canciones procesadas" }, value: "217K" },
      { label: { en: "Simulated users evaluated", es: "Usuarios simulados evaluados" }, value: "500" },
    ],
    problem: {
      en: "Streaming platforms face a filter bubble problem: pure relevance optimization traps users in familiar content, increasing long-term churn and reducing catalog utilization.",
      es: "Las plataformas de streaming enfrentan el problema de la burbuja de filtro: optimizar sólo relevancia encierra al usuario en lo que ya conoce, sube la fuga a largo plazo y desaprovecha el catálogo.",
    },
    solution: {
      en: "Hybrid 402-dimensional embeddings combining audio features and genre semantics, with a configurable re-ranking stage that balances relevance and diversity according to business strategy.",
      es: "Embeddings híbridos de 402 dimensiones que combinan features de audio y semántica de géneros, con una etapa de re-ranking configurable que equilibra relevancia y diversidad según la estrategia de negocio.",
    },
    impact: {
      en: "Breaks the filter bubble by lifting genre diversity from 19% to 70% while keeping relevance at 0.89, so streaming users explore more of the catalog instead of churning out - evaluated across 500 simulated users and 5 configurable business strategies.",
      es: "Rompe la burbuja de filtro subiendo la diversidad de géneros del 19% al 70% sin bajar de 0,89 de relevancia, para que el usuario explore más catálogo en vez de irse - evaluado sobre 500 usuarios simulados y 5 estrategias de negocio configurables.",
    },
    challenges: [
      {
        title: {
          en: "Dimensionality imbalance between audio and genre embeddings",
          es: "Desbalance dimensional entre embeddings de audio y género",
        },
        description: {
          en: "Genre embeddings (384 dims) dominated audio features (18 dims) in cosine similarity. A 10x weight on audio features restored balanced influence without retraining.",
          es: "Los embeddings de género (384 dims) dominaban a las features de audio (18 dims) en la similitud coseno. Un peso 10x sobre el audio restauró el equilibrio sin reentrenar.",
        },
      },
      {
        title: {
          en: "Configurable business strategies without retraining",
          es: "Estrategias de negocio configurables sin reentrenar",
        },
        description: {
          en: "Different business objectives (retention vs discovery) required different recommendation behaviors. A re-ranking stage with configurable weights solved this without touching the embedding space.",
          es: "Objetivos distintos (retención vs descubrimiento) exigían comportamientos distintos. Una etapa de re-ranking con pesos configurables lo resolvió sin tocar el espacio de embeddings.",
        },
      },
    ],
    lessonsLearned: [
      {
        title: {
          en: "Re-ranking is more flexible than embedding optimization",
          es: "El re-ranking es más flexible que optimizar los embeddings",
        },
        description: {
          en: "Optimizing the embedding space for diversity would require retraining. A lightweight re-ranking stage achieves the same result with full runtime configurability.",
          es: "Optimizar el espacio de embeddings para diversidad exigiría reentrenar. Una etapa liviana de re-ranking logra lo mismo y es configurable en tiempo de ejecución.",
        },
      },
      {
        title: {
          en: "Business metrics must be defined before evaluation",
          es: "Las métricas de negocio se definen antes de evaluar",
        },
        description: {
          en: "Defining relevance, diversity and composite score upfront forced clarity on what the system was actually optimizing for.",
          es: "Definir relevancia, diversidad y score compuesto desde el inicio obligó a tener claro qué estaba optimizando el sistema en realidad.",
        },
      },
    ],
    githubUrl: "https://github.com/HernanRochon664/music-taste-recommender",
  },
];
