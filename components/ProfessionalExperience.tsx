import Image from 'next/image';
import Link from 'next/link';

const ProfessionalExperience = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-purple-900 dark:text-purple-400 sm:text-4xl lg:text-5xl text-center mb-12">
          Professional Experience
        </h2>
        <div className="mt-8 space-y-12">
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">AI Product Manager</h3>
              <p className="text-gray-600 dark:text-gray-400">RadicalAI, New York, USA | August 2024 - Present</p>
              <ul className="mt-2 text-gray-600 dark:text-gray-400 list-disc list-inside">
                <li>Led and managed a multidisciplinary team of AI and software engineers in developing key AI tools.</li>
                <li>Oversaw the development of the Multiple Choice Assessment Generator, optimizing the process for educational content.</li>
                <li>Directed the implementation of the Key Concept Retriever, enhancing data retrieval from varied file formats.</li>
                <li>Managed the design and development of the Worksheet Generator, facilitating diverse educational content creation.</li>
                <li>Coordinated the efforts in building the Syllabus Generator, improving curriculum design through AI integration.</li>
                <li>Enhanced team collaboration and productivity by introducing agile methodologies and efficient project management tools.</li>
              </ul>
              <div className="mt-4 flex flex-wrap justify-center space-x-2">
                <img src="/product-management.png" alt="Product Management" className="h-10 w-10 object-cover" />
                <img src="/agile.png" alt="Agile Methodologies" className="h-10 w-10 object-cover" />
                <img src="/python.png" alt="Python" className="h-10 w-10 object-cover" />
                <img src="/fastapi.svg" alt="FastAPI" className="h-10 w-10 object-cover" />
                <img src="/langchain.png" alt="LangChain" className="h-10 w-14" />
                <img src="/vertexai.png" alt="VertexAI" className="h-10 w-10 object-cover" />
                <img src="/chromadb.png" alt="ChromaDB" className="h-10 w-10 object-cover" />
                <img src="/react.png" alt="React" className="h-10 w-10 object-cover" />
                <img src="/vite.png" alt="Vite" className="h-10 w-10 object-cover" />
              </div>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-10 flex justify-center">
              <Link href="https://lab.radicalai.app/" target="_blank">
                <Image
                  src="/radical-ai.png"
                  alt="AI Product Manager"
                  layout="responsive"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg dark:hidden"
                />
                <Image
                  src="/radical-ai-dark.png"
                  alt="AI Product Manager Dark Mode"
                  layout="responsive"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg hidden dark:block"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">AI Engineer</h3>
              <p className="text-gray-600 dark:text-gray-400">RadicalAI, New York, USA | June 2024 - Present</p>
              <ul className="mt-2 text-gray-600 dark:text-gray-400 list-disc list-inside">
                <li>Developed a Multiple Choice Assessment Generator to automate question generation with AI.</li>
                <li>Implemented a Key Concept Retriever for extracting key concepts from multiple data types.</li>
                <li>Created a Worksheet Generator supporting more than 6 different question types, enhancing AI learning capabilities.</li>
                <li>Designed and developed a Syllabus Generator leveraging MIT papers and reusable design patterns for LLM pipelines.</li>
                <li>Extended LLM file support to 14 types, integrating multi-modal features with image and video support.</li>
                <li>Optimized the AI pipelines by migrating from VertexAI to GoogleGenerativeAI for better performance and scalability.</li>
              </ul>
              <div className="mt-4 flex flex-wrap justify-center space-x-2">
                <img src="/python.png" alt="Python" className="h-10 w-10 object-cover" />
                <img src="/fastapi.svg" alt="FastAPI" className="h-10 w-10 object-cover" />
                <img src="/langchain.png" alt="LangChain" className="h-10 w-14" />
                <img src="/streamlit.png" alt="Streamlit" className="h-10 w-14" />
                <img src="/vertexai.png" alt="VertexAI" className="h-10 w-10 object-cover" />
                <img src="/chromadb.png" alt="ChromaDB" className="h-10 w-10 object-cover" />
                <img src="/pydantic.png" alt="Pydantic" className="h-10 w-10 object-cover" />
                <img src="/react.png" alt="React" className="h-10 w-10 object-cover" />
                <img src="/vite.png" alt="Vite" className="h-10 w-10 object-cover" />
                <img src="/docker.png" alt="Docker" className="h-10 w-10 object-cover" />
                <img src="/gcp.png" alt="GCP" className="h-8 w-10" />
              </div>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-10 flex justify-center">
              <Link href="https://lab.radicalai.app/" target="_blank">
                <Image
                  src="/radical-ai.png"
                  alt="AI Engineer"
                  layout="responsive"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg dark:hidden"
                />
                <Image
                  src="/radical-ai-dark.png"
                  alt="AI Engineer Dark Mode"
                  layout="responsive"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg hidden dark:block"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">Software Engineer</h3>
              <p className="text-gray-600 dark:text-gray-400">BoushTech, Delaware, USA | January 2024 - Present</p>
              <ul className="mt-2 text-gray-600 dark:text-gray-400 list-disc list-inside">
                <li>Developed a SaaS platform for ticket sales, medical management, SCM, and GIS integration using React, NodeJS, GraphQL, and ArangoDB.</li>
                <li>Built a responsive frontend for medical status management with React and statistical graphs.</li>
                <li>Created a NodeJS scraper for agile PDF data collection.</li>
                <li>Developed a backend module for SUNAT enterprise data management with NodeJS.</li>
                <li>Integrated Stripe for customer and payment management using NodeJS and TDD.</li>
                <li>Implemented AI assistants in NestJS with LangChain and OpenAI Assistants API.</li>
              </ul>
              <div className="mt-4 flex flex-wrap justify-center space-x-2">
                <img src="/react.png" alt="React" className="h-10 w-10 object-cover" />
                <img src="/nextjs.png" alt="NextJS" className="h-10 w-10" />
                <img src="/typescript.png" alt="Typescript" className="h-10 w-10 object-cover" />
                <img src="/nodejs.png" alt="NodeJS" className="h-10 w-14" />
                <img src="/nestjs.png" alt="NestJS" className="h-10 w-10" />
                <img src="/mui.png" alt="MaterialUI" className="h-10 w-10" />
                <img src="/d3.png" alt="D3" className="h-10 w-10" />
                <img src="/jest.png" alt="Jest" className="h-10 w-10" />
                <img src="/graphql.png" alt="GraphQL" className="h-10 w-10" />
                <img src="/relayjs.png" alt="RelayJS" className="h-10 w-14" />
                <img src="/postgresql.png" alt="PostgreSQL" className="h-10 w-10" />
                <img src="/arangodb.png" alt="ArangoDB" className="h-10 w-14" />
                <img src="/stripe.png" alt="Stripe" className="h-10 w-10" />
                <img src="/langchain.png" alt="LangChain" className="h-10 w-14" />
                <img src="/openai.png" alt="OpenAI" className="h-10 w-10" />
                <img src="/docker.png" alt="Docker" className="h-10 w-10 object-cover" />
                <img src="/docker-compose.png" alt="Docker Compose" className="h-10 w-10" />
                <img src="/kubernetes.png" alt="Kubernetes" className="h-10 w-10" />
                <img src="/aws.png" alt="AWS" className="h-10 w-10" />
              </div>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-10 flex justify-center">
              <Link href="https://www.boushtech.com/" target="_blank">
                <Image
                  src="/boushtech.png"
                  alt="Software Engineer"
                  layout="responsive"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg dark:hidden"
                />
                <Image
                  src="/boushtech-dark.png"
                  alt="Software Engineer Dark Mode"
                  layout="responsive"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg hidden dark:block"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">Software Engineer Intern</h3>
              <p className="text-gray-600 dark:text-gray-400">BoushTech, Delaware, USA | July 2023 - December 2023</p>
              <ul className="mt-2 text-gray-600 dark:text-gray-400 list-disc list-inside">
                <li>Implemented a full-stack system for verifying SUNAT economic invoices using React, MUI, and NodeJS with a microservices architecture.</li>
                <li>Developed a NodeJS web crawler to systematize doctor information for the Medical College of Peru.</li>
                <li>Created a full-stack system for personal financial advice using React, NodeJS, and PostgreSQL.</li>
              </ul>
              <div className="mt-4 flex flex-wrap justify-center space-x-2">
                <img src="/react.png" alt="React" className="h-10 w-10 object-cover" />
                <img src="/typescript.png" alt="Typescript" className="h-10 w-10 object-cover" />
                <img src="/nodejs.png" alt="NodeJS" className="h-10 w-14" />
                <img src="/mui.png" alt="MaterialUI" className="h-10 w-10" />
                <img src="/graphql.png" alt="GraphQL" className="h-10 w-10" />
                <img src="/relayjs.png" alt="RelayJS" className="h-10 w-14" />
                <img src="/postgresql.png" alt="PostgreSQL" className="h-10 w-10" />
                <img src="/docker.png" alt="Docker" className="h-10 w-10 object-cover" />
              </div>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-10 flex justify-center">
              <Link href="https://www.boushtech.com/" target="_blank">
                <Image
                  src="/boushtech.png"
                  alt="Software Engineer Intern"
                  layout="responsive"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg dark:hidden"
                />
                <Image
                  src="/boushtech-dark.png"
                  alt="Software Engineer Intern Dark Mode"
                  layout="responsive"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg hidden dark:block"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalExperience;
