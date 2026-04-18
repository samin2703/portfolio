/**
 * ============================================
 * PORTFOLIO DATA - EDIT YOUR PERSONAL INFO HERE
 * ============================================
 * This file contains all your personal information.
 * Replace the placeholder values with your actual data.
 */

// ============================================
// PERSONAL INFO - Edit these values
// ============================================
export const personalInfo = {
  name: "SAMIN SADIQUE AURIN", // Replace with your name
  title: "Machine Learning Engineer", // Replace with your title
  tagline: "Building Intelligent Systems • Python • NLP • Computer Vision • Generative AI", // Replace with your tagline
  email: "sa.samin1201@gmail.com", // Replace with your email
  phone: "+8801408378524", // Replace with your phone
  location: "Dhaka, Bangladesh", // Replace with your location
  bio: `I’m a graduate of the University of Dhaka with a BSc in Robotics and Mechatronics Engineering, specializing in Machine Learning, Artificial Intelligence, and Computer Vision. I build intelligent, data-driven systems and actively explore Generative AI and its real-world applications. I’m also interested in IoT solutions, combining smart sensing with AI-driven decision-making`, // Replace with your bio
  resumeUrl: "https://drive.google.com/uc?export=download&id=1qXfyaNxxbzNnLdbd3eOnJH_c7sgVmJ2C", // Your Google Drive resume
};

// ============================================
// SOCIAL LINKS - Edit these URLs
// ============================================
export const socialLinks = {
  github: "https://github.com/samin2703", // Replace with your GitHub
  linkedin: "https://www.linkedin.com/in/samin-sadique-aurin-763341232/", // Replace with your LinkedIn
  twitter: "https://twitter.com/YOUR_TWITTER", // Replace with your Twitter
  instagram: "https://instagram.com/YOUR_INSTAGRAM", // Replace with your Instagram
};

// ============================================
// NAVIGATION LINKS
// ============================================
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Hackathon", href: "#hackathon" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

// ============================================
// PROJECTS - Edit your projects here
// ============================================
export const projects = [
  {
    id: 1,
    title: "CUSTOMER SUPPORT AI", // Replace with project name
    description:
      "Automated Customer Support AI System using Retrieval-Augmented Generation (RAG). It handles customer queries, classifies intents, retrieves relevant policy information, and generates grounded answers. It also includes an escalation mechanism for complex or sensitive issues.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Langchain", "Transformer", "FAISS", "Torch", "Python"],
    liveUrl: "https://your-project-1.com", // Replace with live URL
    githubUrl: "https://github.com/samin2703/customer_support_ai", // Replace with GitHub URL
    featured: true,
  },
  {
    id: 2,
    title: "BANGLA LICENSE PLATE RECOGNITION", // Replace with project name
    description:
      "Developed an end-to-end Bangla license plate detection and character recognition system using computer vision and deep learning techniques. The model detects vehicle plates from images and accurately recognizes Bangla characters.",
    image: "/detect_char.jpg",
    tags: ["Python", "YOLO", "CV2", "Streamlit", "Numpy"],
    liveUrl: "https://your-project-2.com",
    githubUrl: "https://github.com/samin2703/Bangla_license_plate_project",
    featured: true,
  },
  {
    id: 3,
    title: "RAG AI TUTOR", // Replace with project name
    description:
      "Context-Aware RAG AI Tutor - A Retrieval-Augmented Generation based tutoring system that answers questions from academic PDFs using semantic retrieval, optional cross-encoder reranking, and level-adaptive prompt engineering to generate accurate, context-grounded explanations.",
    image: "https://images.unsplash.com/photo-1677691820099-a6e8040aa077?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Python", "Streamlit", "Openrouter", "FAISS", "Sentence Transformer"],
    liveUrl: "https://your-project-3.com",
    githubUrl: "https://github.com/samin2703/RAG_AI_Tutor",
    featured: true,
  },
];

// ============================================
// HACKATHON HIGHLIGHT
// ============================================
export const hackathonHighlight = {
  event: "Impact Dhaka 2026 – AI for Urban Transformation",
  team: "HydroSentinel",
  role: "Team Lead",
  placement: "Top 10 (Ranked 7th)",
  invitation:
    "Selected among the Top 20 teams and invited to present to the Digital Entrepreneurship and Innovation Ecosystem Development (DEIED), Bangladesh, under the Bangladesh Hi-Tech Park Authority.",
  invitationShort: "Invited to present at DEIED (Bangladesh Hi-Tech Park Authority).",
  summary:
    "HydroSentinel is a flood-risk intelligence platform aimed at improving early detection and response to urban flooding.",
  highlights: [
    "Integrates drain image analysis, rainfall data, and location-based vulnerability to generate real-time risk scores and short-term flood probability.",
    "Provides an operational dashboard for authorities plus a driver interface for route advisories and hazard reporting.",
    "Focuses on enabling earlier intervention in cities like Dhaka before disruptions escalate.",
  ],
  repositoryUrl: "https://github.com/samin2703/hydroSentinel",
  thanks:
    "Special thanks to Farhan Morshed and the organizers at Cognisor AI for making this experience meaningful.",
};

// ============================================
// SKILLS - Edit your skills here
// ============================================
export const skills = [
  // Machine Learning Skills
  { name: "Python", category: "Machine Learning", level: 90 },
  { name: "TensorFlow", category: "Machine Learning", level: 85 },
  { name: "PyTorch", category: "Machine Learning", level: 80 },
  { name: "Scikit-learn", category: "Machine Learning", level: 85 },
  { name: "Pandas & NumPy", category: "Machine Learning", level: 90 },
  { name: "Machine Learning", category: "Machine Learning", level: 85 },

  // Computer Vision
  { name: "OpenCV", category: "Computer Vision", level: 85 },
  { name: "YOLO (Ultralytics)", category: "Computer Vision", level: 80 },
  { name: "MediaPipe", category: "Computer Vision", level: 80 },
  { name: "Image Processing", category: "Computer Vision", level: 85 },
  { name: "Deep Learning for Vision", category: "Computer Vision", level: 80 },
  { name: "Model Training & Optimization", category: "Computer Vision", level: 79 },

  // Generative AI
  { name: "RAG Systems", category: "Generative AI", level: 85 },
  { name: "LLMs (LLaMA, Ollama, GPT)", category: "Generative AI", level: 80 },
  { name: "Vector Embeddings & Semantic Search", category: "Generative AI", level: 85 },
  { name: "LangChain & Agents", category: "Generative AI", level: 80 },
  { name: "Prompt Engineering & Optimization", category: "Generative AI", level: 85 },
  { name: "Fine-tuning & Transfer Learning", category: "Generative AI", level: 80 },

  // Robotics & IoT
  { name: "Embedded Systems", category: "Robotics & IoT", level: 70 },
  { name: "Sensors & IoT Integration", category: "Robotics & IoT", level: 75 },
  { name: "STM32 Microcontroller", category: "Robotics & IoT", level: 65 },
  { name: "ROS (Robot Operating System)", category: "Robotics & IoT", level: 72 },
  { name: "Robot Kinematics & Dynamics", category: "Robotics & IoT", level: 68 },
  { name: "Real-time Systems & Control", category: "Robotics & IoT", level: 70 },

  // Backend & API Development
  { name: "FastAPI", category: "Backend Development", level: 80 },
  { name: "Flask", category: "Backend Development", level: 80 },
  { name: "REST API Design", category: "Backend Development", level: 85 },
  { name: "Streamlit", category: "Backend Development", level: 80 },
  { name: "Django", category: "Backend Development", level: 75 },
  { name: "Uvicorn & ASGI", category: "Backend Development", level: 78 },

  // Data & ML Tools
  { name: "Hugging Face Transformers", category: "Data & Tools", level: 85 },
  { name: "Vector Databases (FAISS, Pinecone)", category: "Data & Tools", level: 80 },
  { name: "SQL & Relational Databases", category: "Data & Tools", level: 75 },
  { name: "Langchain & Ollama", category: "Data & Tools", level: 82 },
  { name: "API Integration (OpenAI, Anthropic)", category: "Data & Tools", level: 85 },
  { name: "Git & Version Control", category: "Data & Tools", level: 85 },
];



// ============================================
// EXPERIENCE - Edit your work experience here
// ============================================
export const experiences = [
  {
    id: 1,
    type: "work",
    title: "Research Intern", // Replace with your title
    company: "ELITE Research Lab", // Replace with company name
    location: "Queens, NY, USA (Remote)",
    startDate: "2026",
    endDate: "Present",
    description: [
        "Designed and developed a RAG-based AI Tutor system for context-aware question answering using LLMs and vector retrieval",
        "Integrated LLaMA 2 (via Ollama) with a retrieval pipeline to generate accurate and grounded responses from external knowledge sources",
        "Built end-to-end document ingestion, embedding, and vector database workflow for efficient semantic search and retrieval",
        "Improved response relevance and reduced hallucination through prompt engineering and retrieval optimization techniques",
      ],
  },
  {
    id: 4,
    type: "education",
    title: "Bachelor of Science in Robotics and Mechatronics Engineering", // Replace with your degree
    company: "University of Dhaka", // Replace with university name
    location: "Dhaka, Bangladesh",
    startDate: "2022",
    endDate: "2026",
    description: [
      "Graduate to be with Honors (GPA: 3.61/4.0) upto 7th Semester",
      "Focus on Machine Learning, AI and IoT",
      "Completed senior thesis on Human Robot Interaction",
    ],
  },
];

// ============================================
// ABOUT SECTION STATS
// ============================================
export const stats = [
  { label: "Projects Completed", value: "10+" },
  { label: "Coffee Cups", value: "∞" },
];
