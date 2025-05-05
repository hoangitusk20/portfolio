import { motion } from "framer-motion";
import { servicesData } from "../data/servicesData";
import {
  SiDotnet,
  SiExpress,
  SiGooglegemini,
  SiKaggle,
  SiScikitlearn,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

import { PiFileSqlDuotone } from "react-icons/pi";

// Tool icons mapping
const toolIcons = {
  ".NET": <SiDotnet />,
  TensorFlow: <i className="fab fa-python mr-1"></i>,
  PyTorch: <i className="fas fa-fire mr-1"></i>,
  Kaggle: <SiKaggle />,
  "Scikit-learn": <SiScikitlearn />,
  OpenCV: <i className="fas fa-eye mr-1"></i>,
  Keras: <i className="fas fa-brain mr-1"></i>,
  NLP: <i className="fas fa-comment-alt mr-1"></i>,
  "Computer Vision": <i className="fas fa-camera mr-1"></i>,
  Pandas: <i className="fas fa-table mr-1"></i>,
  NumPy: <i className="fas fa-calculator mr-1"></i>,
  "Machine Learning": <i className="fas fa-cogs mr-1"></i>,
  "Deep Learning": <i className="fas fa-network-wired mr-1"></i>,
  "GPT Integration": <i className="fas fa-robot mr-1"></i>,
  React: <i className="fab fa-react mr-1"></i>,
  "Vue.js": <i className="fab fa-vuejs mr-1"></i>,
  HTML5: <i className="fab fa-html5 mr-1"></i>,
  CSS: <i className="fab fa-css3 mr-1"></i>,
  JavaScript: <i className="fab fa-js mr-1"></i>,
  TypeScript: <i className="fab fa-js-square mr-1"></i>,
  "Node.js": <i className="fab fa-node-js mr-1"></i>,
  Express: <SiExpress />,
  MongoDB: <i className="fas fa-database mr-1"></i>,
  Firebase: <i className="fas fa-fire mr-1"></i>,
  "Tailwind CSS": <SiTailwindcss />,
  Bootstrap: <i className="fab fa-bootstrap mr-1"></i>,
  "Responsive Design": <i className="fas fa-mobile-alt mr-1"></i>,
  "Gemini API": <SiGooglegemini />,
  "SQL Server": <PiFileSqlDuotone />,
  "C#": <TbBrandCSharp />,
};

const ServiceItem = ({ title, description, icon, tools }) => {
  // Map các icon theo type
  const icons = {
    ai: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    web: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  };

  return (
    <div className="flex flex-col h-full bg-gray-800/50 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-green-500/30 transition-all duration-300">
      <div className="flex items-center mb-4 text-green-500">
        {icons[icon]}
        <h3 className="text-xl font-semibold ml-3 text-white">{title}</h3>
      </div>

      <p className="text-gray-300 mb-6 flex-grow">{description}</p>

      <div>
        <h4 className="text-md font-medium mb-3 text-gray-200">
          Tools & Skills:
        </h4>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-200 hover:bg-gray-600 transition-colors duration-200 flex items-center"
            >
              {toolIcons[tool]}
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const MotionH2 = motion.h2;
  const MotionDiv = motion.div;

  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <MotionH2
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            My Services
          </MotionH2>
          <MotionDiv
            className="h-1 w-20 bg-green-500 mx-auto"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          ></MotionDiv>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {servicesData.map((service, index) => (
            <MotionDiv
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ServiceItem {...service} />
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
