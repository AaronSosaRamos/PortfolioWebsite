import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Youtube } from 'lucide-react';

const coursesData = [
  {
    title: 'MIT Computer Science',
    description: `This course offers masterclasses about MIT CS and AI with real course materials from the university as well as projects with code that can support your learning process with important topics for Intro. to Algorithms, Advanced Data Structures, Advanced Graphs Management, Design and Analysis of Algorithms, Mathematics of Machine Learning, Supervised Learning, Unsupervised Learning and Intro. to Deep Learning.`,
    image: '/mitcs.png',
    repoLink: 'https://github.com/AaronSosaRamos/MITComputerScience',
    videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
    institutionImages: ['/mit.png', '/tensorflow.png', '/pytorch.png', '/deep_learning.png']
  },
  {
    title: 'UTexas At Austin OMSAI',
    description: `This course offers masterclasses about the Master Degree in Artificial Intelligence, offered by the University of Texas at Austin, in outstanding areas like Machine Learning, Deep Learning and Planning, Search and Reasoning Under Uncertainty with more than 25 state-of-art projects about those topics.`,
    image: '/utexasomsai.png',
    repoLink: 'https://github.com/AaronSosaRamos/UTexasAtAustinOMSAI',
    videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
    institutionImages: ['/utexasataustin.png', '/tensorflow.png', '/pytorch.png', '/deep_learning.png']
  },
  {
    title: 'CS Professional Course',
    description: `This course contains several lessons about accomplishing a CS degree effectively with state-of-art subjects like Intro. to CS, Discrete Math, Programming Languages, OOP, Advanced Algorithms and Data Structures, Computation Theory, Analysis and Design of Algorithms, Artificial Intelligence, Databases, Networks, Competitive Programming and so forth.`,
    image: '/cscourse.png',
    repoLink: 'https://github.com/AaronSosaRamos/CSProfessionalCourse',
    videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
    institutionImages: ['/python.png', '/data-structure.png', '/graph.png', '/tensorflow.png']
  },
  {
    title: 'DevOps AI',
    description: `This course contains important masterclasses for implementing DevOps in your current software lifecycle as well as MLOps and DLOps for integrating AI models to your apps and deploying them efficiently with the best practices.`,
    image: '/devopsai.png',
    repoLink: 'https://github.com/AaronSosaRamos/DevOpsAI',
    videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
    institutionImages: ['/devops.png', '/docker.png', '/docker-compose.png', '/kubernetes.png']
  },
  {
    title: 'Evolutionary Algorithms',
    description: `This course contains several algorithms and models for Genetic Algorithms (GA), Evolution Strategies, Genetic Programming (GP), Differential Evolution (DE), Particle Swarm Optimization (PSO), Cultural Algorithms (CA), Estimation of Distribution Algorithms (EDAs), Memetic Algorithms (MA), Neuroevolution and Hybrid Evolutionary Algorithms.`,
    image: '/evoalgos.png',
    repoLink: 'https://github.com/AaronSosaRamos/EvolutionaryAlgorithms',
    videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
    institutionImages: ['/python.png', '/numpy.png', '/matplotlib.png', '/evoalgos-icon.png']
  },
  {
    title: 'Quantum Computing',
    description: `This is an introductory course for learning Quantum Computing with integral theoretical lessons with Physics fundamentals as well as practical masterclasses for developing outstanding circuits, quantum gates and quantum algorithms with Cirq.`,
    image: '/quantumcomputing.webp',
    repoLink: 'https://github.com/AaronSosaRamos/QuantumComputing',
    videoLink: 'https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ',
    institutionImages: ['/python.png', '/cirq.png', '/pandas.png', '/quantum-computing.png']
  }
];

const CoursesSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === coursesData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? coursesData.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-gray-200 to-gray-300 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-purple-900 sm:text-4xl lg:text-5xl text-center mb-12">Courses</h2>
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
            {coursesData.map((course, index) => (
              <div key={index} className="min-w-full flex-shrink-0 p-2 sm:p-8 lg:p-16">
                <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 max-w-xs sm:max-w-sm lg:max-w-3xl mx-auto">
                  <div className="relative h-48 w-full mb-4">
                    <Image src={course.image} alt={course.title} layout="fill" objectFit="cover" className="rounded-lg" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{course.title}</h3>
                  <p className="text-gray-700 mb-4 text-center">{course.description}</p>
                  <div className="flex justify-center space-x-4 flex-wrap mb-4">
                    {course.institutionImages.map((institutionImage, index) => (
                      <Image key={index} src={institutionImage} alt={`Institution ${index + 1}`} width={50} height={50} className="object-contain" />
                    ))}
                  </div>
                  <div className="flex justify-center space-x-4 flex-wrap">
                    <Link href={course.repoLink} target='_blank'>
                      <span className="inline-flex items-center bg-purple-600 text-white py-2 px-4 rounded-md text-lg font-medium hover:bg-purple-700 transition duration-300 ease-in-out">
                        <Github className="h-5 w-5 mr-2" />
                        Repository
                      </span>
                    </Link>
                    <Link href={course.videoLink} target='_blank'>
                      <span className="inline-flex items-center bg-red-600 text-white py-2 px-4 rounded-md text-lg font-medium hover:bg-red-700 transition duration-300 ease-in-out">
                        <Youtube className="h-5 w-5 mr-2" />
                        Video
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={prevSlide} className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out">
            <FaChevronLeft className="text-black" />
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out">
            <FaChevronRight className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesSlider;
