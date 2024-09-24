import Image from 'next/image';
import Link from 'next/link';
import { Github, Youtube, FileText } from 'lucide-react';

const researchesData = {
  title: 'Philosophic LLMs: A feasibility study for conscious LLMs',
  description: `This study enhances a feasibility study about to what extent a LLM can improve its cognitive and methodological potential in order to act consciously based on philosophical fundamentals and principles about the human conscience and its implications for the development of our society.`,
  image: '/philosophicllms.webp',
  paperLink: 'https://huggingface.co/WilAI',
  repoLink: 'https://github.com/AaronSosaRamos',
  videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ'
};

const Researches = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-purple-900 dark:text-purple-400 sm:text-4xl lg:text-5xl text-center mb-12">
          Researches
        </h2>
        <div className="relative overflow-hidden">
          <div className="min-w-full flex-shrink-0 p-2 sm:p-8 lg:p-16">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 max-w-xs sm:max-w-sm lg:max-w-3xl mx-auto">
              <div className="relative h-48 w-full mb-4">
                <Image
                  src={researchesData.image}
                  alt={researchesData.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 text-center">
                {researchesData.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
                {researchesData.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-4 space-y-2 sm:space-y-0">
                <Link href={researchesData.paperLink} target="_blank">
                  <span className="inline-flex items-center bg-blue-600 dark:bg-blue-700 text-white py-2 px-8 rounded-md text-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300 ease-in-out w-full sm:w-auto text-center justify-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Paper
                  </span>
                </Link>
                <Link href={researchesData.repoLink} target="_blank">
                  <span className="inline-flex items-center bg-purple-600 dark:bg-purple-700 text-white py-2 px-8 rounded-md text-lg font-medium hover:bg-purple-700 dark:hover:bg-purple-600 transition duration-300 ease-in-out w-full sm:w-auto text-center justify-center">
                    <Github className="h-5 w-5 mr-2" />
                    Repository
                  </span>
                </Link>
                <Link href={researchesData.videoLink} target="_blank">
                  <span className="inline-flex items-center bg-red-600 dark:bg-red-700 text-white py-2 px-8 rounded-md text-lg font-medium hover:bg-red-700 dark:hover:bg-red-600 transition duration-300 ease-in-out w-full sm:w-auto text-center justify-center">
                    <Youtube className="h-5 w-5 mr-2" />
                    Video
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Researches;
