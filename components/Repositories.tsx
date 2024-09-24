import Image from 'next/image';
import Link from 'next/link';
import { Github, Youtube } from 'lucide-react';

const Repositories = () => {
  const repositoryData = [
    {
      title: 'Professional AI Portfolio',
      description: `This portfolio contains more than 50 projects and lessons about Machine Learning fundamentals (Supervised, unsupervised, semi-supervised, and reinforcement learning)...`,
      image: '/aiportfolio.png',
      repoLink: 'https://github.com/AaronSosaRamos/ProfessionalAIPortfolio',
      videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
      techImages: ['/tensorflow.png', '/pytorch.png', '/huggingface.png', '/mit.png', '/numpy.png', '/pandas.png', '/matplotlib.png', '/seaborn.svg', '/scikit-learn.png', '/opencv.png']
    },
    {
      title: 'Neural Network Architectures',
      description: `This repository contains several projects about Tensorflow fundamentals and best practices for NN, as well as advanced lessons about Neural Networks Architectures...`,
      image: '/nnarchitectures.png',
      repoLink: 'https://github.com/AaronSosaRamos/NeuralNetworkArchitectures',
      videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
      techImages: ['/tensorflow.png', '/pytorch.png', '/huggingface.png', '/opencv.png']
    },
    {
      title: 'LLM Projects',
      description: `This repository contains more than 50 projects about LangChain with Google Generative AI, VertexAI, and GPT-4o-mini...`,
      image: '/llmprojects.png',
      repoLink: 'https://github.com/AaronSosaRamos/LLM_Projects',
      videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
      techImages: ['/langchain.png', '/openai.png', '/vertexai.png', '/google.png', '/huggingface.png', '/mistral.png', '/llama.png']
    }
  ];

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-600 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-purple-900 dark:text-purple-400 sm:text-4xl lg:text-5xl text-center mb-12">Repositories</h2>
        <div className="space-y-16">
          {repositoryData.map((repo, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
                <div className="lg:w-1/3 mb-8 lg:mb-0">
                  <Image
                    src={repo.image}
                    alt={repo.title}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="lg:w-2/3 text-center lg:text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{repo.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{repo.description}</p>
                  <div className="flex justify-center lg:justify-start flex-wrap space-x-2 space-y-2 lg:space-y-0 mb-6">
                    {repo.techImages.map((techImage, index) => (
                      <div key={index} className="w-12 h-12 flex justify-center items-center">
                        <Image src={techImage} alt={`Tech ${index + 1}`} width={48} height={48} className="object-contain hover:scale-110 transition-transform duration-300" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center lg:justify-start space-x-4">
                    <Link href={repo.repoLink} target='_blank'>
                      <span className="inline-flex items-center bg-purple-600 dark:bg-purple-700 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-purple-700 dark:hover:bg-purple-600 transition duration-300 ease-in-out">
                        <Github className="h-5 w-5 mr-2" />
                        Repository
                      </span>
                    </Link>
                    <Link href={repo.videoLink} target='_blank'>
                      <span className="inline-flex items-center bg-red-600 dark:bg-red-700 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-red-700 dark:hover:bg-red-600 transition duration-300 ease-in-out">
                        <Youtube className="h-5 w-5 mr-2" />
                        Video
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Repositories;
