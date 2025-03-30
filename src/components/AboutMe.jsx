import { motion } from "framer-motion";
import { aboutMeData } from "../data/aboutMeData";

const AboutMe = () => {
  const MotionHeading = motion.h2;
  const MotionDiv = motion.div;
  const MotionP = motion.p;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <MotionHeading
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </MotionHeading>
          <MotionDiv
            className="h-1 w-20 bg-green-500 mx-auto"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          ></MotionDiv>
        </div>

        {/* Introduction */}
        <MotionDiv
          className="max-w-3xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-medium mb-6 text-green-400">
            {aboutMeData.intro}
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            {aboutMeData.description}
          </p>
        </MotionDiv>

        <div className="max-w-3xl mx-auto">
          {/* Education */}
          <MotionDiv
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <MotionHeading
              className="text-2xl font-bold border-b border-gray-700 pb-3 mb-6 text-center"
              variants={itemVariants}
            >
              Education
            </MotionHeading>

            {aboutMeData.education.map((edu) => (
              <MotionDiv
                key={edu.id}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-green-500/30 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h4 className="text-xl font-medium text-green-400">
                    {edu.degree}
                  </h4>
                  <span className="text-sm bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                    {edu.duration}
                  </span>
                </div>
                <div className="mb-3">
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.location}</p>
                </div>
                <p className="text-gray-300 mb-2">{edu.description}</p>
                <p className="text-sm text-gray-400">GPA: {edu.gpa}</p>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>

        {/* Interests */}
        <MotionDiv
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Interests</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {aboutMeData.interests.map((interest, index) => (
              <span
                key={index}
                className="bg-gray-800/60 text-gray-200 px-4 py-2 rounded-lg text-sm border border-gray-700 hover:border-green-500/50 hover:bg-gray-800 transition-colors duration-300"
              >
                {interest}
              </span>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default AboutMe;
