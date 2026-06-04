import type { ProjectCaseStudy } from "@/types";

export const projects: ProjectCaseStudy[] = [
  {
    slug: "bizsentinel",
    title: "BizSentinel",
    subtitle: "End-to-end ML platform for e-commerce customer intelligence",
    description: "End-to-end ML platform that detects anomalies, segments customers and predicts churn on real e-commerce data.",
    year: "2025",
    status: "completed",
    featured: true,
    tags: ["mlops", "anomaly-detection", "churn-prediction", "privacy"],
    coverImage: "/images/projects/bizsentinel.jpg",
    architectureImage: "",
    demoUrl: "",
    articleUrl: "",
    technologies: ["Python", "LightGBM", "Scikit-learn", "Kedro", "MLflow", "FastAPI", "Dash", "Docker"],
    metrics: [
      { label: "Customers processed", value: "97,896" },
      { label: "Anomaly rate", value: "1.47%" },
      { label: "Test coverage", value: "82%" },
      { label: "Unit tests", value: "127" },
    ],
    problem:
      "Small and medium e-commerce businesses collect transactional data but lack dedicated data science teams to extract actionable insights from it.",
    solution:
      "Three interconnected ML modules: Isolation Forest for anomaly detection, K-Means for customer segmentation, and LightGBM for churn scoring — each module feeding the next.",
    impact:
      "Processed 97,896 customers through a full ML pipeline with privacy-preserving pseudonymization and differential privacy on the churn model.",
    challenges: [
      {
        title: "Module dependency chain",
        description: "Anomaly scores and segment labels from unsupervised modules needed to feed as features into the supervised churn model without data leakage.",
      },
      {
        title: "Privacy-preserving ML",
        description:
          "Implementing differential privacy via diffprivlib while maintaining acceptable model performance required careful epsilon tuning.",
      },
    ],
    lessonsLearned: [
      {
        title: "Unsupervised outputs as supervised features",
        description:
          "Feeding IsolationForest scores and KMeans labels into LightGBM meaningfully improved churn prediction — the pipeline design justified itself in the metrics.",
      },
      {
        title: "SQLite is enough",
        description: "Choosing SQLite over PostgreSQL eliminated operational overhead without any real cost at this data scale.",
      },
    ],
    githubUrl: "https://github.com/HernanRochon664/biz-sentinel",
  },
  {
    slug: "hardware-pulse",
    title: "Hardware Pulse",
    subtitle: "PC hardware price intelligence for the Uruguayan market",
    description: "Price intelligence system that tracks and compares PC components across local Uruguayan retailers to detect buying opportunities.",
    year: "2025",
    status: "in-progress",
    featured: true,
    tags: ["web-scraping", "entity-resolution", "price-intelligence", "time-series"],
    coverImage: "/images/projects/hardware-pulse.jpg",
    architectureImage: "",
    demoUrl: "",
    articleUrl: "",
    technologies: ["Python", "BeautifulSoup", "pandas", "SQLite", "RapidFuzz", "Scikit-learn", "Streamlit"],
    metrics: [
      { label: "Retailers integrated", value: "3+" },
      { label: "Component categories", value: "4" },
      { label: "Resolution pipeline stages", value: "3" },
      { label: "Data contracts", value: "Pydantic" },
    ],
    problem:
      "PC hardware prices in Uruguay show high dispersion across retailers due to small market size, import costs and exchange rate volatility — with no existing tool to track or compare them.",
    solution:
      "Automated scraping pipeline with three-tier entity resolution (exact match → regex → fuzzy), normalized price snapshots, and weekly feature engineering for price forecasting.",
    impact:
      "Covers GPUs, CPUs, SSDs and RAM across 3+ local retailers with a reproducible pipeline, Pydantic data contracts and SQLite WAL mode for concurrent access.",
    challenges: [
      {
        title: "Entity resolution across inconsistent titles",
        description:
          "Product titles vary wildly between retailers. A three-tier pipeline (exact → regex → fuzzy with rapidfuzz) resolves listings to canonical SKUs with flagging for manual review.",
      },
      {
        title: "Scraping heterogeneous sites",
        description:
          "Each retailer uses different HTML structure and pagination. A BaseHTMLScraper Template Method pattern eliminated duplicated orchestration logic across scrapers.",
      },
    ],
    lessonsLearned: [
      {
        title: "Data contracts before scraping",
        description:
          "Defining Pydantic models (RawListing, PriceSnapshot) before writing scrapers forced clarity on what data actually mattered and prevented schema drift.",
      },
      {
        title: "Engineering metrics replace model metrics in early stages",
        description:
          "A well-designed pipeline with clear contracts and test coverage demonstrates engineering maturity even before model metrics are available.",
      },
    ],
    githubUrl: "https://github.com/HernanRochon664/hardware-pulse",
  },
  {
    slug: "music-recommender",
    title: "Music Taste Recommender",
    subtitle: "Business-driven hybrid recommendation engine",
    description: "Hybrid recommendation engine that balances relevance and diversity to reduce churn and increase catalog discovery on streaming platforms.",
    year: "2025",
    status: "completed",
    featured: true,
    tags: ["recommendation-systems", "embeddings", "nlp", "business-metrics"],
    coverImage: "/images/projects/music-recommender.jpg",
    architectureImage: "",
    demoUrl: "",
    articleUrl: "",
    technologies: ["Python", "Sentence-Transformers", "Scikit-learn", "Streamlit", "Hugging Face", "pandas"],
    metrics: [
      { label: "Diversity improvement", value: "+267%" },
      { label: "Relevance maintained", value: "0.89" },
      { label: "Tracks processed", value: "217K" },
      { label: "Simulated users evaluated", value: "500" },
    ],
    problem:
      "Streaming platforms face a filter bubble problem: pure relevance optimization traps users in familiar content, increasing long-term churn and reducing catalog utilization.",
    solution:
      "Hybrid 402-dimensional embeddings combining audio features and genre semantics, with a configurable re-ranking stage that balances relevance and diversity according to business strategy.",
    impact:
      "Increased genre diversity from 19% to 70% across recommendations while maintaining relevance score at 0.89, evaluated across 500 simulated users and 5 business strategies.",
    challenges: [
      {
        title: "Dimensionality imbalance between audio and genre embeddings",
        description:
          "Genre embeddings (384 dims) dominated audio features (18 dims) in cosine similarity. A 10x weight on audio features restored balanced influence without retraining.",
      },
      {
        title: "Configurable business strategies without retraining",
        description:
          "Different business objectives (retention vs discovery) required different recommendation behaviors. A re-ranking stage with configurable weights solved this without touching the embedding space.",
      },
    ],
    lessonsLearned: [
      {
        title: "Re-ranking is more flexible than embedding optimization",
        description:
          "Optimizing the embedding space for diversity would require retraining. A lightweight re-ranking stage achieves the same result with full runtime configurability.",
      },
      {
        title: "Business metrics must be defined before evaluation",
        description:
          "Defining relevance, diversity and composite score upfront forced clarity on what the system was actually optimizing for.",
      },
    ],
    githubUrl: "https://github.com/HernanRochon664/music-taste-recommender",
  },
];
