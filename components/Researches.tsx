import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Youtube, FileText } from 'lucide-react';

const researchesData = [
  {
    title: 'Impact of Large Language Models on Academic Performance in Higher Education: A Systematic Review',
    description: `A systematic review focusing on the impact of LLMs in improving academic performance in higher education institutions.`,
    image: '/llm-academic-performance.webp',
    paperLink: 'https://huggingface.co/WilAI',
    repoLink: 'https://github.com/AaronSosaRamos',
    videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ'
  },
  {
    title: 'LLM-driven Coding Mastery: Exploring the Potential of Large Language Models for Enhancing the Learning Curve about Coding',
    description: `This research examines how LLMs can be utilized to improve coding skills and enhance learning curves in programming education.`,
    image: '/llm-code.webp',
    paperLink: 'https://huggingface.co/WilAI',
    repoLink: 'https://github.com/AaronSosaRamos',
    videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ'
  },
  {
    title: 'Philosophical LLMs: The Emerging Role of Large Language Models in the Analysis and Evaluation of Philosophical Knowledge',
    description: `This study explores how Large Language Models (LLMs) can evaluate and analyze philosophical knowledge, enhancing the understanding of human consciousness through AI.`,
    image: '/philosophicllms.webp',
    paperLink: 'https://huggingface.co/WilAI',
    repoLink: 'https://github.com/AaronSosaRamos',
    videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ'
  }
];

const ResearchesSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === researchesData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? researchesData.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-purple-900 dark:text-purple-400 sm:text-4xl lg:text-5xl text-center mb-12">Researches</h2>
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
            {researchesData.map((research, index) => (
              <div key={index} className="min-w-full flex-shrink-0 p-2 sm:p-8 lg:p-16">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 max-w-xs sm:max-w-sm lg:max-w-3xl mx-auto">
                  <div className="relative h-48 w-full mb-4">
                    <Image src={research.image} alt={research.title} layout="fill" objectFit="cover" className="rounded-lg" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 text-center">{research.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">{research.description}</p>
                  <div className="flex justify-center space-x-4 mb-4">
                    <Link href={research.paperLink} target="_blank">
                      <span className="inline-flex items-center bg-blue-600 dark:bg-blue-700 text-white py-2 px-8 rounded-md text-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300 ease-in-out">
                        <FileText className="h-5 w-5 mr-2" />
                        Paper
                      </span>
                    </Link>
                    <Link href={research.repoLink} target="_blank">
                      <span className="inline-flex items-center bg-purple-600 dark:bg-purple-700 text-white py-2 px-8 rounded-md text-lg font-medium hover:bg-purple-700 dark:hover:bg-purple-600 transition duration-300 ease-in-out">
                        <Github className="h-5 w-5 mr-2" />
                        Repository
                      </span>
                    </Link>
                    <Link href={research.videoLink} target="_blank">
                      <span className="inline-flex items-center bg-red-600 dark:bg-red-700 text-white py-2 px-8 rounded-md text-lg font-medium hover:bg-red-700 dark:hover:bg-red-600 transition duration-300 ease-in-out">
                        <Youtube className="h-5 w-5 mr-2" />
                        Video
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={prevSlide} className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-white dark:bg-gray-900 p-2 rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-300 ease-in-out">
            <FaChevronLeft className="text-black dark:text-white" />
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-white dark:bg-gray-900 p-2 rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-300 ease-in-out">
            <FaChevronRight className="text-black dark:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResearchesSlider;
