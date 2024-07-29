import Image from 'next/image';
import Link from 'next/link';
import { Briefcase, Code, Github, Linkedin, Youtube, Smile } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faReddit, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Banner = () => {

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 text-left mt-8 md:mt-0">
            <div className="hidden md:flex flex-wrap justify-center md:justify-center space-x-4 space-y-4 md:space-y-0 mb-8">
              <Image src="/harvard.svg" alt="Institution 1" width={100} height={50} className="object-contain" />
              <Image src="/mit.png" alt="Institution 2" width={100} height={50} className="object-contain" />
              <Image src="/utexasataustin.png" alt="Institution 3" width={100} height={50} className="object-contain" />
              <Image src="/microsoft.png" alt="Institution 4" width={80} height={50} className="object-contain" />
              <Image src="/cisco.png" alt="Institution 5" width={100} height={50} className="object-contain" />
              <Image src="/ib.png" alt="Institution 6" width={50} height={50} className="object-contain" />
              <Image src="/uaslp.png" alt="Institution 7" width={100} height={50} className="object-contain" />
              <Image src="/utp.png" alt="Institution 8" width={100} height={50} className="object-contain" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl text-center md:text-left">
              Software and AI Engineer
            </h1>
            <p className="mt-4 text-lg text-gray-600 text-center md:text-left">
              Passionate about creating innovative solutions using the latest technologies in software development and artificial intelligence.
            </p>
            <div className="mt-8 text-center md:text-left flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
              <a href="/#projects" onClick={(e) => handleLinkClick(e, '#projects')}>
                <span className="inline-block bg-purple-600 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-purple-700 transition duration-300 ease-in-out w-full md:w-auto">
                  Explore My Work
                </span>
              </a>
              <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-4 space-y-4 md:space-y-0 mt-2 md:mt-0 items-center pt-2">
                <Link href="https://github.com/AaronSosaRamos" target="_blank" className="transition duration-300 ease-in-out transform hover:scale-110 hover:text-purple-600 max-md:pt-[1rem]">
                  <Github className="h-8 w-8 text-gray-600 hover:text-purple-600" />
                </Link>
                <Link href="https://www.linkedin.com/in/wilfredo-aaron-sosa-ramos/" target="_blank" className="transition duration-300 ease-in-out transform hover:scale-110 hover:text-purple-600">
                  <Linkedin className="h-8 w-8 text-gray-600 hover:text-purple-600" />
                </Link>
                <Link href="https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ" target="_blank" className="transition duration-300 ease-in-out transform hover:scale-110 hover:text-purple-600">
                  <Youtube className="h-8 w-8 text-gray-600 hover:text-purple-600" />
                </Link>
                <Link href="https://x.com/WilAI1624" target="_blank" className="transition duration-300 ease-in-out transform hover:scale-110 hover:text-purple-600">
                  <FontAwesomeIcon icon={faXTwitter} className="h-8 w-8 text-gray-600 hover:text-purple-600" />
                </Link>
                <Link href="https://www.tiktok.com/@wilfredososaai" target="_blank" className="transition duration-300 ease-in-out transform hover:scale-110 hover:text-purple-600">
                  <FontAwesomeIcon icon={faTiktok} className="h-8 w-8 text-gray-600 hover:text-purple-600" />
                </Link>
                <Link href="https://www.reddit.com/user/Legitimate-Tooth5891/" target="_blank" className="transition duration-300 ease-in-out transform hover:scale-110 hover:text-purple-600">
                  <FontAwesomeIcon icon={faReddit} className="h-8 w-8 text-gray-600 hover:text-purple-600" />
                </Link>
                <Link href="https://huggingface.co/WilAI" target="_blank" className="transition duration-300 ease-in-out transform hover:scale-110 hover:text-purple-600">
                  <Smile className="h-8 w-8 text-gray-600 hover:text-purple-600" />
                </Link>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg flex items-center hover:scale-105 transition-transform duration-300">
                <Briefcase className="h-12 w-12 text-purple-600" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">+1 year of professional experience in US companies</h3>
                </div>
              </div>
              <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg flex items-center hover:scale-105 transition-transform duration-300">
                <Code className="h-12 w-12 text-purple-600" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">+100 Software and AI Engineering projects</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center order-first md:order-last">
            <div className="w-3/4 sm:w-2/3 md:w-full">
              <Image
                src="/profile.jpg"
                alt="AI and Software Development"
                layout="responsive"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex md:hidden flex-wrap justify-center space-x-4 space-y-4 mt-8">
          <Image src="/harvard.svg" alt="Institution 1" width={100} height={50} className="object-contain" />
          <Image src="/mit.png" alt="Institution 2" width={100} height={50} className="object-contain" />
          <Image src="/utexasataustin.png" alt="Institution 3" width={100} height={50} className="object-contain" />
          <Image src="/microsoft.png" alt="Institution 4" width={80} height={50} className="object-contain" />
          <Image src="/cisco.png" alt="Institution 5" width={100} height={50} className="object-contain" />
          <Image src="/ib.png" alt="Institution 6" width={50} height={50} className="object-contain" />
          <Image src="/uaslp.png" alt="Institution 7" width={100} height={50} className="object-contain" />
          <Image src="/utp.png" alt="Institution 8" width={100} height={50} className="object-contain" />
        </div>
        <div className="hidden md:flex flex-wrap justify-center space-x-4 space-y-4 mt-8 lg:hidden">
          <Image src="/harvard.svg" alt="Institution 1" width={100} height={50} className="object-contain" />
          <Image src="/mit.png" alt="Institution 2" width={100} height={50} className="object-contain" />
          <Image src="/utexasataustin.png" alt="Institution 3" width={100} height={50} className="object-contain" />
          <Image src="/microsoft.png" alt="Institution 4" width={80} height={50} className="object-contain" />
          <Image src="/cisco.png" alt="Institution 5" width={100} height={50} className="object-contain" />
          <Image src="/ib.png" alt="Institution 6" width={50} height={50} className="object-contain" />
          <Image src="/uaslp.png" alt="Institution 7" width={100} height={50} className="object-contain" />
          <Image src="/utp.png" alt="Institution 8" width={100} height={50} className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
