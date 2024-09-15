import Image from 'next/image';
import Link from 'next/link';
import { Github, Youtube, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projectData = [
    {
      "title": "AI Code and DS Assistant",
      "description": "Developed a full-stack application designed to assist with three key services: Code Assistance (Chatbot), Data Structures (Documentation), and NexaMind (AI Assistant for Software Architecture). The application enables users to generate code snippets and offers in-depth understanding of various data structures, including Arrays, Linked Lists, Stacks, Queues, Binary Trees, and Graphs. It features interactive learning modules powered by AI to enhance the educational experience. The frontend was built using NextJS, while the backend leveraged FastAPI, with AI capabilities integrated through multimodal LLMs, LangGraph with complex graphs, and the coexistence of GPT-4o-mini and Google Gemini for dynamic and intelligent content delivery.",
      "image": "/ai-code-ds-assistant.png",
      "repoLink": "https://github.com/AaronSosaRamos/ai-code-ds-assistant-frontend",
      "liveDemoLink": "https://ai-code-ds-assistant-frontend.vercel.app/",
      "videoLink": "https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ",
      "techImages": ["/nextjs.png", "/react.png", "/vercel.png", "/redux.png", "/python.png", '/docker.png', "/fastapi.svg", "/vertexai.png", "/openai.png", "/langchain.png", "/google.png", '/render.svg'],
      "hasLiveDemo": true
    },    
    {
      title: "AI Writing Services",
      description: "Developed a full-stack application that provides a comprehensive suite of AI-powered writing tools. The application supports multi-language spelling checks, writing enhancement suggestions, addition of connectors for better flow, textual tone adjustments, and plagiarism detection to deliver superior writing assistance and improvement. Built using ReactJS for the frontend and FastAPI for the backend, the application leverages Google Generative AI and LLMs to offer intelligent, real-time feedback and guidance. The solution was deployed with a Docker Multi-Stage Build, ensuring robust performance, and was hosted on Vercel (frontend) and Render (backend).",
      image: "/ai-writing-services.jpeg",
      repoLink: 'https://github.com/AaronSosaRamos/ai-writing-services-frontend',
      liveDemoLink: "https://ai-writing-services.vercel.app/",
      videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
      techImages: ['/react.png', '/python.png', '/fastapi.svg', '/docker.png', '/vertexai.png', '/vercel.png', '/render.svg'],
      hasLiveDemo: true
    },
    {
      title: 'Gemini Quizzify',
      description: 'Implemented an AI-driven pipeline to automate the creation of various question types, including "Fill in the Blank", "Open Ended", "True/False", "Multiple Choice", "Relate Concepts", and "Math Exercises". The pipeline leverages the RAG (Retrieval-Augmented Generation) approach to extract context from diverse file formats such as PDFs, CSVs, Word documents, images, and YouTube videos. The frontend was built using NextJS and deployed on Vercel, while the backend integrated advanced technologies like LangChain, Vertex AI API, Streamlit UI, ChromaDB, and PyPDF to ensure robust question generation and efficient handling of different data sources.',
      image: '/ai-gemini-quizzify.jpeg',
      repoLink: 'https://github.com/AaronSosaRamos/gemini-quizzify-frontend',
      liveDemoLink: "https://gemini-quizzify-frontend.vercel.app/",
      videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
      techImages: ['/nextjs.png', '/vercel.png', '/langchain.png', '/vertexai.png', '/docker.png', '/streamlit.png', '/chromadb.png', '/render.svg'],
      hasLiveDemo: true
    },
    {
      title: 'Gemini Dynamo',
      description: 'Implemented a full-stack project for automating the retrieval of key concepts from different data types (PDFs, Word, PPTX, Youtube Videos and so forth). For the frontend, used NextJS Tailwind MUI for enhancing UI/UX. For the backend, developed an AI pipeline using FastAPI, LangChain, Vertex AI API, and YouTube transcript API.',
      image: '/ai-gemini-dynamo.jpeg',
      repoLink: 'https://github.com/AaronSosaRamos/gemini-dynamo-frontend',
      liveDemoLink: "https://gemini-dynamo-frontend.vercel.app/",
      videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
      techImages: ['/nextjs.png', '/vercel.png', '/langchain.png', '/docker.png', '/fastapi.svg', '/vertexai.png', '/render.svg'],
      hasLiveDemo: true
    },
    {
      title: 'Conversors Suite',
      description: 'App which provides formatting and conversion support for Markdown and JSON content. It was developed using NextJS and deployed in Vercel.',
      image: '/conversors-suite.png',
      repoLink: 'https://github.com/AaronSosaRamos/conversors-suite',
      liveDemoLink: "https://conversors-suite.vercel.app/",
      videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
      techImages: ['/nextjs.png', '/vercel.png'],
      hasLiveDemo: true
    },
    {
      title: 'Notes Management App',
      description: 'Full-Stack app which supports the notes management with active and archived notes, as well as categories and efficient filters for optimal notes retrievement. It was made using NextJS, NestJS, PostgreSQL, Multi-Stage Build in Docker-Compose, compatibility with Linux/Windows and deployed in Vercel',
      image: '/notesmanagementapp.png',
      repoLink: 'https://github.com/AaronSosaRamos/NotesManagementApp',
      liveDemoLink: "https://notes-management-app-three.vercel.app/",
      videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
      techImages: ['/nextjs.png', '/nestjs.png', '/postgresql.png', '/docker.png', '/docker-compose.png', '/bash.png', '/vercel.png'],
      hasLiveDemo: true
    },
    {
      title: 'AI PPT Builder',
      description: 'Automates the development of outstanding slides using LangChain, Gradio, GoogleGenerativeAI and ChromaDB. Supports more than 14 different file types (PDF, CSV, TXT, MD, URL, PPTX, DOCX, XLS/XLSX, XML, Google Docs, Google Sheets, Google Slides, Google PDF) and enhances multimodal support for images (PNG, JPG, JPEG).',
      image: '/aipptbuilder.png',
      repoLink: 'https://github.com/AaronSosaRamos/AIPPTBuilder',
      videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
      techImages: ['/langchain.png', '/gradio.png', '/vertexai.png', '/chromadb.png']
    },
    {
      title: 'Email Response Automation with AI',
      description: 'Developed an AI Agent that automates the generation of draft e-mails using LangGraph, CrewAI, Gmail API, and Tavily when the required knowledge is outside of its context scope.',
      image: '/emailresponseautomation.png',
      repoLink: 'https://github.com/AaronSosaRamos/email-response-automation-with-crewai-langgraph',
      videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
      techImages: ['/langchain.png', '/crewai.png', '/gmail.png', '/tavily.png']
    },
    {
      title: 'Gemini Flight Manager',
      description: 'Developed an AI agent for automating the process of booking flights. Retrieves info from databases about available flights and books the required flights based on payment criteria. Developed using LangChain, Streamlit UI, Vertex AI API, FastAPI, SQLite, Uvicorn, Pydantic Schema, and SQLAlchemy (ORM).',
      image: '/mission-flights.png',
      repoLink: 'https://github.com/AaronSosaRamos/mission-flights',
      videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
      techImages: ['/langchain.png', '/streamlit.png', '/vertexai.png', '/fastapi.svg', '/sqlite.png', '/uvicorn.png', '/pydantic.png', '/sqlalchemy.png']
    },
    {
      title: 'Marvel AI Backend (Open Source)',
      description: 'Led a multidisciplinary team for extending the file support with more than 14 file types as well as enhancing the multimodal support for images and multilingual support. Additionally, we implemented a worksheet and syllabus generator; and optimized the key concepts retriever with efficient and state-of-art AI pipelines.',
      image: '/kaiaibackend.png',
      repoLink: 'https://github.com/radicalxdev/marvel-ai-backend',
      videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
      techImages: ['/langchain.png', '/gradio.png', '/vertexai.png', '/chromadb.png'],
      liveDemoLink: "https://kai.radicalai.app/signin/",
      hasLiveDemo: true
    }
  ];

  return (
    <div className="bg-gray-200 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-purple-900 sm:text-4xl lg:text-5xl text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projectData.map((project, index) =>
            <div key={index} className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 w-full max-w-md">
              <div className="relative h-48 w-full mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{project.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{project.description}</p>
              <div className="flex justify-center flex-wrap space-x-2 mb-4">
                {project.techImages.map((techImage, index) => (
                  <Image key={index} src={techImage} alt={`Tech ${index + 1}`} width={30} height={30} className="object-contain hover:scale-110 transition-transform duration-300" />
                ))}
              </div>
              <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center max-xl:space-y-2 md:space-x-4 w-full">
                {project.hasLiveDemo && (
                  <Link href={project.liveDemoLink} target='_blank'>
                    <span className="inline-flex items-center justify-center bg-green-600 text-white py-2 px-4 rounded-md text-lg font-medium hover:bg-green-700 transition duration-300 ease-in-out w-full sm:w-auto text-center">
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Live Demo
                    </span>
                  </Link>
                )}
                <Link href={project.repoLink} target='_blank'>
                  <span className="inline-flex items-center justify-center bg-purple-600 text-white py-2 px-4 rounded-md text-lg font-medium hover:bg-purple-700 transition duration-300 ease-in-out w-full sm:w-auto text-center">
                    <Github className="h-5 w-5 mr-2" />
                    Repository
                  </span>
                </Link>
                <Link href={project.videoLink} target='_blank'>
                  <span className={`inline-flex items-center justify-center bg-red-600 text-white py-2 px-4 rounded-md text-lg font-medium hover:bg-red-700 transition duration-300 ease-in-out w-full sm:w-auto text-center ${project.hasLiveDemo ? 'xl:mt-3' : ''} `}>
                    <Youtube className="h-5 w-5 mr-2" />
                    Video
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;