import Image from 'next/image';
import Link from 'next/link';
import { Github, Youtube, ExternalLink, FileText } from 'lucide-react';

const Projects = () => {
  const projectData = [
    {
      "title": "AI Code and DS Assistant",
      "description": "Developed a full-stack application designed to assist with three key services: Code Assistance (Chatbot), Data Structures (Documentation), NexaMind (AI Assistant for Software Architecture) and CodeXpert (AI Agent for improving code development and quality). The application enables users to generate code snippets and offers in-depth understanding of various data structures, including Arrays, Linked Lists, Stacks, Queues, Binary Trees, and Graphs. It features interactive learning modules powered by AI to enhance the educational experience. The frontend was built using NextJS, while the backend leveraged FastAPI, with AI capabilities integrated through multimodal LLMs, LangGraph with complex graphs, and the coexistence of GPT-4o-mini and Google Gemini for dynamic and intelligent content delivery.",
      "image": "/ai-code-ds-assistant.png",
      "repoLink": "https://github.com/AaronSosaRamos/ai-code-ds-assistant-frontend",
      "liveDemoLink": "https://ai-code-ds-assistant-frontend.vercel.app/",
      "videoLink": "https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ",
      "techImages": ["/nextjs.png", "/react.png", "/vercel.png", "/redux.png", "/python.png", '/docker.png', "/fastapi.svg", "/vertexai.png", "/openai.png", "/langchain.png", "/google.png", '/render.svg'],
      "hasLiveDemo": true,
      "paperLink": "https://drive.google.com/file/d/1RGUmJ-55PfceUWg29n71taJ_eVA2xCGp/view?usp=drive_link"
    },
    {
      title: "LLMHub",
      description: "Developed a cutting-edge platform that consolidates comprehensive and practical knowledge about Large Language Models (LLMs). The platform covers various dimensions, including Fundamentals, Prompt Engineering, Retrieval-Augmented Generation (RAG), Fine-Tuning, Model Deployment, Multimodal Models, and Security. It also offers real-world implementations using top-tier models like Google Generative AI, GPT-4o, and Claude Haiku. Users can explore interactive examples to understand how these principles are applied in practice, enhancing their grasp of modern AI techniques. The frontend was built with NextJS, while advanced AI capabilities are integrated through LangChain and state-of-the-art APIs.",
      image: "/llmhub.png",
      repoLink: "https://github.com/AaronSosaRamos/ai-code-productivity-booster-frontend",
      liveDemoLink: "https://llmhub-main.vercel.app/",
      videoLink: "https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ",
      techImages: ["/nextjs.png", "/react.png", "/vercel.png", "/gcp.png", "/python.png", '/docker.png', "/fastapi.svg", "/vertexai.png", "/openai.png", "/langchain.png", "/claudehaiku.png"],
      hasLiveDemo: true,
      paperLink: "https://llmhub-main.vercel.app/"
    },
    {
      title: "AI Writing Services",
      description: "Developed a full-stack application that provides a comprehensive suite of AI-powered writing tools with LangGraph. The application supports multi-language spelling checks, writing enhancement suggestions, addition of connectors for better flow, textual tone adjustments, and plagiarism detection to deliver superior writing assistance and improvement. Built using ReactJS for the frontend and FastAPI for the backend, the application leverages Google Generative AI and LLMs to offer intelligent, real-time feedback and guidance. The solution was deployed with a Docker Multi-Stage Build, ensuring robust performance, and was hosted on Vercel (frontend) and Render (backend).",
      image: "/ai-writing-services.jpeg",
      repoLink: 'https://github.com/AaronSosaRamos/ai-writing-services-frontend',
      liveDemoLink: "https://ai-writing-services.vercel.app/",
      videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
      techImages: ['/react.png', '/python.png', '/fastapi.svg', '/docker.png', '/vertexai.png', "/openai.png", "/langchain.png", "/google.png", '/vercel.png', '/render.svg'],
      hasLiveDemo: true,
      paperLink: "https://drive.google.com/file/d/1zfjNP81LV8ZNl_SKPVh3mI8Fxs5p-n0S/view?usp=drive_link"
    },
    {
      title: 'Gemini Dynamo',
      description: 'Implemented a full-stack project for automating the retrieval of key concepts from different data types (PDFs, Word, PPTX, Youtube Videos and more). The frontend was built using NextJS with Tailwind and MUI to enhance UI/UX, while the backend leverages an AI pipeline that integrates FastAPI, LangChain, Vertex AI API, and YouTube transcript API for robust content extraction. In addition to the concept retriever, it features structured data study, semantic analysis, topic clustering, relation mapping, and sentiment analysis. Advanced RAG techniques like Self-Query Retrieval, Top-K retrieval, ChromaDB, Hybrid Search BM25, FAISS, EnsembleRetriever, HyDE, Multi-Query, RAG-Fusion, CoT prompting, and Parent-Document Retriever were implemented using GPT-4o-mini and Google Generative AI.',
      image: '/ai-gemini-dynamo.jpeg',
      repoLink: 'https://github.com/AaronSosaRamos/gemini-dynamo-frontend',
      liveDemoLink: "https://gemini-dynamo-frontend.vercel.app/",
      videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
      techImages: ['/nextjs.png', '/vercel.png', '/langchain.png', '/docker.png', '/fastapi.svg', '/vertexai.png', '/render.svg', "/google.png"],
      hasLiveDemo: true,
      paperLink: "https://drive.google.com/file/d/1C9irjHAMnDE-T4_XcraRkcHuoUaLjqla/view?usp=drive_link"
    },
    {
      title: "AI Code Productivity Booster",
      description: "Built a full-stack application featuring four multimodal agents designed to support different phases of the Software Development Life Cycle (SDLC). These agents include the Refactoring Assistant, Documentation Generator Assistant, Multi-Agent Debugging Assistant, and LLM Application Development Assistant. The application integrates advanced AI pipelines powered by Google Generative AI and GPT-4o, allowing developers to streamline code refactoring, generate detailed documentation, debug issues using multi-agent collaboration, and build AI-powered applications. The frontend is developed with NextJS, and the backend leverages FastAPI for robust performance.",
      image: "/ai-code-productivity-booster.png",
      repoLink: "https://github.com/AaronSosaRamos/ai-code-productivity-booster-frontend",
      liveDemoLink: "https://ai-code-productivity-booster.vercel.app/",
      videoLink: "https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ",
      techImages: ["/nextjs.png", "/vercel.png", "/langchain.png", "/gcp.png", '/docker.png', "/fastapi.svg", "/vertexai.png", "/openai.png", "/google.png", "/crewai.png"],
      hasLiveDemo: true,
      paperLink: "https://ai-code-productivity-booster.vercel.app/",
    },
    {
      title: "LearnifyAI",
      description: "Created an innovative AI-powered platform aimed at enhancing the education process. LearnifyAI offers tools such as a Syllabus Generator, Rubric Generator, AI-Resistant Assignment Creator, and Personalized Task Generator. Leveraging Retrieval-Augmented Generation (RAG) and complex AI pipelines with models like GPT-4o and Google Generative AI, the platform tailors learning materials to individual students' needs, promoting more effective and resistant educational approaches. Built using NextJS for the frontend and integrated with advanced AI pipelines on the backend, LearnifyAI sets a new standard in AI-driven education solutions.",
      image: "/learnifyai.png",
      repoLink: "https://github.com/AaronSosaRamos/learnify-ai-frontend",
      liveDemoLink: "https://learnify-ai-main.vercel.app/",
      videoLink: "https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ",
      techImages: ["/nextjs.png", "/vercel.png", "/gcp.png", "/openai.png", "/langchain.png", '/docker.png', "/fastapi.svg", "/vertexai.png"],
      hasLiveDemo: true,
      paperLink: "https://drive.google.com/file/d/1ut6VlsOFvsaeQCdqLyHoCuJTsidoVajj/view?usp=drive_link"
    },
    {
      "title": "ReplyGen",
      "description": "ReplyGen is an AI agent built to automate the generation of draft emails. By leveraging LangGraph, CrewAI, Gmail API, and Tavily, ReplyGen provides robust email generation and can pull relevant context when required knowledge falls outside the agent's scope. It uses the RAPTOR framework for advanced RAG (Retrieval-Augmented Generation), ensuring emails are accurate, context-aware, and ready for dispatch.",
      "image": "/reply-gen.png",
      "repoLink": "https://github.com/AaronSosaRamos/reply-gen-frontend",
      "liveDemoLink": "https://reply-gen.vercel.app/",
      "videoLink": "https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ",
      "techImages": ["/nextjs.png", "/react.png", "/fastapi.svg", "/langchain.png", "/openai.png", "/langchain.png", "/crewai.png", "/google.png", "/tavily.png"],
      "hasLiveDemo": true,
      paperLink: "https://reply-gen.vercel.app/",
    },
    {
      "title": "FlyOps",
      "description": "FlyOps comprises three AI multi-agents (Assistant, Analyst, Researcher) designed to automate the flight booking process. These agents query databases for flight availability, retrieve relevant information, and book flights based on payment conditions. The system is built with NextJS, React, Tailwind, FastAPI, LangChain, LangGraph, and CrewAI Streamlit UI, and incorporates Google Generative AI, SQLite, Uvicorn, Pydantic Schema, SQLAlchemy (ORM), and Tavily for a seamless, multimodal booking experience.",
      "image": "/flyops.png",
      "repoLink": "https://github.com/AaronSosaRamos/flyops-frontend",
      "liveDemoLink": "https://flyops.vercel.app/",
      "videoLink": "https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ",
      "techImages": ["/nextjs.png", "/react.png", "/fastapi.svg", "/langchain.png", "/crewai.png", "/streamlit.png", "/sqlite.png", "/uvicorn.png", "/pydantic.png", "/sqlalchemy.png", "/tavily.png"],
      "hasLiveDemo": true,
      paperLink: "https://flyops.vercel.app/",
    },
    {
      title: 'Gemini Quizzify',
      description: 'Implemented an AI-driven pipeline to automate the creation of various question types, including "Fill in the Blank", "Open Ended", "True/False", "Multiple Choice", "Relate Concepts", and "Math Exercises". The pipeline leverages the RAG (Retrieval-Augmented Generation) approach to extract context from diverse file formats such as PDFs, CSVs, Word documents, images, and YouTube videos. The frontend was built using NextJS and deployed on Vercel, while the backend integrated advanced technologies like LangChain, Vertex AI API, Streamlit UI, ChromaDB, and PyPDF to ensure robust question generation and efficient handling of different data sources.',
      image: '/ai-gemini-quizzify.jpeg',
      repoLink: 'https://github.com/AaronSosaRamos/gemini-quizzify-frontend',
      liveDemoLink: "https://gemini-quizzify-frontend.vercel.app/",
      videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
      techImages: ['/nextjs.png', '/vercel.png', '/langchain.png', '/vertexai.png', '/docker.png', '/streamlit.png', '/chromadb.png', '/render.svg'],
      hasLiveDemo: true,
      paperLink: "https://drive.google.com/file/d/1smHf85lOby8vMj_UpjVAlkshahYrS3RG/view?usp=drive_link"
    },
    {
      title: 'Conversors Suite',
      description: "Developed a full-stack application offering a range of AI-powered formatting and conversion tools, including Markdown Conversor, JSON Formatter, JSON to SQL, XML to SQL, Math Formulas to LaTeX, Translation, Info to Table, and Image Transcription. Built using NextJS for the frontend and FastAPI for the backend, it integrates LangChain for model orchestration and utilizes Google Generative AI and OpenAI for high-performance processing. The application was benchmarked for speed and accuracy, delivering optimized results. Deployed on Vercel with seamless performance and scalability for complex data transformations.",
      image: '/conversors-suite.png',
      repoLink: 'https://github.com/AaronSosaRamos/conversors-suite',
      liveDemoLink: "https://conversors-suite.vercel.app/",
      videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
      techImages: ['/nextjs.png', '/vercel.png', '/python.png', '/fastapi.svg', '/langchain.png', '/vertexai.png', "/openai.png", "/google.png", '/docker.png', '/render.svg'],
      hasLiveDemo: true,
      paperLink: "https://drive.google.com/file/d/1A6S-XoXYaYNMpX_XVkRnlAoaS5tntWdj/view?usp=drive_link"
    },
    {
      "title": "AI PPT Builder",
      "description": "AI PPT Builder automates the creation of professional-grade slides by integrating a powerful tech stack that includes NextJS, React, Tailwind, FastAPI, LangChain, OpenAI GPT-4o-mini, and GoogleGenerativeAI. It utilizes Gradio and ChromaDB for Retrieval-Augmented Generation (RAG) capabilities, offering support for over 14 file types including PDFs, CSVs, PPTX, DOCX, and Google formats. This platform streamlines slide creation with advanced multimodal support for rich presentations.",
      "image": "/ai-ppt-builder.png",
      "repoLink": "https://github.com/AaronSosaRamos/ai-ppt-builder-frontend",
      "liveDemoLink": "https://ai-ppt-builder.vercel.app/",
      "videoLink": "https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ",
      "techImages": ["/nextjs.png", "/react.png", "/fastapi.svg", "/langchain.png", "/openai.png", "/google.png", "/gradio.png", "/chromadb.png", '/docker.png', '/render.svg'],
      "hasLiveDemo": true,
      paperLink: "https://drive.google.com/file/d/1Z43Qt2LkzI4r86KQXC6Ur4F4Je2-FTHm/view?usp=drive_link"
    },
    {
      title: 'Notes Management App',
      description: 'Full-Stack app which supports the notes management with active and archived notes, as well as categories and efficient filters for optimal notes retrievement. It was made using NextJS, NestJS, PostgreSQL, Multi-Stage Build in Docker-Compose, compatibility with Linux/Windows and deployed in Vercel',
      image: '/notesmanagementapp.png',
      repoLink: 'https://github.com/AaronSosaRamos/NotesManagementApp',
      liveDemoLink: "https://notes-management-app-three.vercel.app/",
      videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
      techImages: ['/nextjs.png', '/nestjs.png', '/postgresql.png', '/docker.png', '/docker-compose.png', '/bash.png', '/vercel.png'],
      hasLiveDemo: true,
      paperLink: "https://drive.google.com/file/d/1u7uj7fhFBsHXkNuj91B57QbraVlS25G5/view?usp=drive_link"
    },
    {
      title: 'Marvel AI Backend (Open Source)',
      description: 'Led a multidisciplinary team for extending the file support with more than 14 file types as well as enhancing the multimodal support for images and multilingual support. Additionally, we implemented a worksheet and syllabus generator; and optimized the key concepts retriever with efficient and state-of-art AI pipelines.',
      image: '/marvel-ai.png',
      repoLink: 'https://github.com/radicalxdev/marvel-ai-backend',
      videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
      techImages: ['/langchain.png', '/gradio.png', '/vertexai.png', '/chromadb.png'],
      liveDemoLink: "https://kai.radicalai.app/",
      hasLiveDemo: true,
      paperLink: "https://kai.radicalai.app/"
    }
  ];

  return (
    <div className="bg-gray-200 dark:bg-gray-700 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-purple-900 dark:text-purple-400 sm:text-4xl lg:text-5xl text-center mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 w-full max-w-md"
            >
              <div className="relative h-48 w-full mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 text-center">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
                {project.description}
              </p>
              <div className="flex justify-center flex-wrap space-x-2 mb-4">
                {project.techImages.map((techImage, index) => (
                  <Image
                    key={index}
                    src={techImage}
                    alt={`Tech ${index + 1}`}
                    width={30}
                    height={30}
                    className="object-contain hover:scale-110 transition-transform duration-300"
                  />
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full justify-items-center items-center">
                {project.hasLiveDemo && (
                  <div className='md:pr-3'>
                    <Link href={project.liveDemoLink} target="_blank">
                      <span className="inline-flex items-center justify-center bg-green-600 dark:bg-green-700 text-white py-2 px-4 rounded-md text-lg font-medium hover:bg-green-700 dark:hover:bg-green-600 transition duration-300 ease-in-out w-full min-w-[180px] text-center">
                        <ExternalLink className="h-5 w-5 mr-2" />
                        Live Demo
                      </span>
                    </Link>
                  </div>
                )}
                <div className='md:pl-3'>
                  <Link href={project.repoLink} target="_blank">
                    <span className="inline-flex items-center justify-center bg-purple-600 dark:bg-purple-700 text-white py-2 px-4 rounded-md text-lg font-medium hover:bg-purple-700 dark:hover:bg-purple-600 transition duration-300 ease-in-out w-full min-w-[180px] text-center">
                      <Github className="h-5 w-5 mr-2" />
                      Repository
                    </span>
                  </Link>
                </div>
                <div className='md:pr-3'>
                  <Link href={project.paperLink} target="_blank">
                    <span className="inline-flex items-center justify-center bg-blue-600 dark:bg-blue-700 text-white py-2 px-4 rounded-md text-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300 ease-in-out w-full min-w-[180px] text-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Paper
                    </span>
                  </Link>
                </div>
                <div className='md:pl-3'>
                  <Link href={project.videoLink} target="_blank">
                    <span className="inline-flex items-center justify-center bg-red-600 dark:bg-red-700 text-white py-2 px-4 rounded-md text-lg font-medium hover:bg-red-700 dark:hover:bg-red-600 transition duration-300 ease-in-out w-full min-w-[180px] text-center">
                      <Youtube className="h-5 w-5 mr-2" />
                      Video
                    </span>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;