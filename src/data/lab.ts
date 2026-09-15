import type { LabItem } from "@/types";

export const labItems: LabItem[] = [
  {
    slug: "sports-image-classification",
    title: {
      en: "Sports Image Classification",
      es: "Clasificación de imágenes deportivas",
    },
    description: {
      en: "CNN-based image classifier trained to recognize sports categories from photos.",
      es: "Clasificador de imágenes con CNN entrenado para reconocer categorías deportivas a partir de fotos.",
    },
    category: "deep-learning",
    tags: ["CNN", "Computer Vision", "Keras"],
    date: "2024",
    status: "completed",
    githubUrl: "https://github.com/HernanRochon664/Proyectos-ML/tree/main/sports-img-classification",
  },
  {
    slug: "heart-disease-classification",
    title: {
      en: "Heart Disease Classification",
      es: "Clasificación de enfermedad cardíaca",
    },
    description: {
      en: "SVM vs Random Forest comparison on 918 examples. SVM achieved F1-Score of 0.897 on test set.",
      es: "Comparación de SVM contra Random Forest sobre 918 ejemplos. SVM alcanzó un F1-Score de 0,897 en test.",
    },
    category: "ml",
    tags: ["SVM", "Random Forest", "Feature Selection", "Classification"],
    date: "2024",
    status: "completed",
    githubUrl: "https://github.com/HernanRochon664/Proyectos-ML/tree/main/HeartDisease-Classification",
  },
  {
    slug: "credit-card-fraud-detection",
    title: {
      en: "Credit Card Fraud Detection",
      es: "Detección de fraude con tarjetas de crédito",
    },
    description: {
      en: "Fraud detection using clustering and anomaly detection on imbalanced transaction data.",
      es: "Detección de fraude con clustering y detección de anomalías sobre datos de transacciones desbalanceados.",
    },
    category: "ml",
    tags: ["Anomaly Detection", "Clustering", "Imbalanced Data"],
    date: "2024",
    status: "completed",
    githubUrl: "https://github.com/HernanRochon664/Proyectos-ML/tree/main/credit-card-fraud-detection",
  },
  {
    slug: "flight-satisfaction-clustering",
    title: {
      en: "Flight Satisfaction Clustering",
      es: "Clustering de satisfacción en vuelos",
    },
    description: {
      en: "Customer segmentation by satisfaction level using clustering, evaluated against target labels.",
      es: "Segmentación de clientes por nivel de satisfacción mediante clustering, evaluada contra las etiquetas objetivo.",
    },
    category: "ml",
    tags: ["Clustering", "Segmentation", "Evaluation"],
    date: "2024",
    status: "completed",
    githubUrl: "https://github.com/HernanRochon664/Proyectos-ML/tree/main/Flight-Satisfaction",
  },
  {
    slug: "house-prices-prediction",
    title: {
      en: "House Prices Prediction",
      es: "Predicción de precios de viviendas",
    },
    description: {
      en: "Regression on Ames Housing dataset with Random Forest feature selection and Gradient Boosting.",
      es: "Regresión sobre el dataset Ames Housing con selección de features por Random Forest y Gradient Boosting.",
    },
    category: "ml",
    tags: ["Regression", "Feature Selection", "Gradient Boosting"],
    date: "2024",
    status: "completed",
    githubUrl: "https://github.com/HernanRochon664/Proyectos-ML/tree/main/house-prices",
  },
  {
    slug: "hominid-species-classification",
    title: {
      en: "Hominid Species Classification",
      es: "Clasificación de especies homínidas",
    },
    description: {
      en: "Multi-class classification to predict hominid species from morphological features.",
      es: "Clasificación multiclase para predecir especies homínidas a partir de features morfológicas.",
    },
    category: "ml",
    tags: ["Classification", "Multi-class", "Anthropology"],
    date: "2024",
    status: "completed",
    githubUrl: "https://github.com/HernanRochon664/Proyectos-ML/tree/main/HumanEvolution-Classification",
  },
];
