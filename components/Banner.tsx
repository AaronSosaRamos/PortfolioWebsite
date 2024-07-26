import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-left mt-8 md:mt-0">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            Software and AI Engineer
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Passionate about creating innovative solutions using the latest technologies in software development and artificial intelligence.
          </p>
          <div className="mt-8 text-center md:text-left">
            <Link href="/projects">
              <span className="inline-block bg-purple-600 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-purple-700 transition duration-300 ease-in-out w-full md:w-auto">
                Explore My Work
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <div className="w-3/4 mt-4 sm:w-2/3 md:w-full">
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
    </div>
  );
};

export default Banner;
