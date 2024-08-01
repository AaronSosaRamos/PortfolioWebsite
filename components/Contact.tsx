import { Briefcase, Code, Github, Linkedin, Youtube, Smile, Mail } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faReddit, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-gray-200 to-gray-300 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl text-center mb-12">Contact</h2>
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 lg:p-12 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Hi, I'm Wilfredo!</h3>
          <p className="text-gray-700 mb-6">
            I'm always excited to connect with like-minded professionals and explore new opportunities. Feel free to reach out to me through the following platforms:
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex flex-col items-center w-24">
              <Link href="https://github.com/AaronSosaRamos" target="_blank" className="transition duration-300 ease-in-out transform hover:scale-110">
                <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-center">
                  <Github className="h-10 w-10 text-gray-600 hover:text-purple-600" />
                </div>
                <span className="text-gray-600 hover:text-purple-600 mt-2">GitHub</span>
              </Link>
            </div>
            <div className="flex flex-col items-center w-24">
              <Link href="https://www.linkedin.com/in/wilfredo-aaron-sosa-ramos/" target="_blank" className="transition duration-300 ease-in-out transform hover:scale-110">
                <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-center">
                  <Linkedin className="h-10 w-10 text-gray-600 hover:text-purple-600" />
                </div>
                <span className="text-gray-600 hover:text-purple-600 mt-2">LinkedIn</span>
              </Link>
            </div>
            <div className="flex flex-col items-center w-24">
              <Link href="https://www.youtube.com/channel/UC8Vle-7wLnxVQpc2y_K3kLQ" target="_blank" className="transition duration-300 ease-in-out transform hover:scale-110">
                <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-center">
                  <Youtube className="h-10 w-10 text-gray-600 hover:text-purple-600" />
                </div>
                <span className="text-gray-600 hover:text-purple-600 mt-2">YouTube</span>
              </Link>
            </div>
            <div className="flex flex-col items-center w-24">
              <Link href="https://x.com/WilAI1624" target="_blank" className="transition duration-300 ease-in-out transform hover:scale-110">
                <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faXTwitter} className="h-10 w-10 text-gray-600 hover:text-purple-600" />
                </div>
                <span className="text-gray-600 hover:text-purple-600 mt-2">X (Twitter)</span>
              </Link>
            </div>
            <div className="flex flex-col items-center w-24">
              <Link href="https://www.tiktok.com/@wilfredososaai" target="_blank" className="transition duration-300 ease-in-out transform hover:scale-110">
                <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faTiktok} className="h-10 w-10 text-gray-600 hover:text-purple-600" />
                </div>
                <span className="text-gray-600 hover:text-purple-600 mt-2">TikTok</span>
              </Link>
            </div>
            <div className="flex flex-col items-center w-24">
              <Link href="https://www.reddit.com/user/Legitimate-Tooth5891/" target="_blank" className="transition duration-300 ease-in-out transform hover:scale-110">
                <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faReddit} className="h-10 w-10 text-gray-600 hover:text-purple-600" />
                </div>
                <span className="text-gray-600 hover:text-purple-600 mt-2">Reddit</span>
              </Link>
            </div>
            <div className="flex flex-col items-center w-24">
              <Link href="https://huggingface.co/WilAI" target="_blank" className="transition duration-300 ease-in-out transform hover:scale-110">
                <div className="bg-gray-200 p-4 rounded-lg flex items-center justify-center">
                  <Smile className="h-10 w-10 text-gray-600 hover:text-purple-600" />
                </div>
                <span className="text-gray-600 hover:text-purple-600 mt-2">HuggingFace</span>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="mailto:U20204320@gmail.com">
              <span className="inline-flex items-center bg-red-600 text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-red-700 transition duration-300 ease-in-out">
                <Mail className="h-6 w-6 mr-2" />
                Email Me
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
