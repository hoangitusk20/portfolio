import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectsData } from "../data/projectsData";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const currentProject = projectsData[currentIndex];
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(16 / 9); // Default aspect ratio

  // Preload all project images to get dimensions and prevent layout shifts
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = projectsData.map((project) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            // Calculate aspect ratio
            const ratio = img.width / img.height;
            resolve(ratio);
          };
          img.onerror = () => {
            // Use default ratio if image fails to load
            resolve(16 / 9);
          };
          img.src = project.image;
        });
      });

      try {
        const ratios = await Promise.all(imagePromises);
        // Use the average aspect ratio for consistent sizing
        const avgRatio =
          ratios.reduce((sum, ratio) => sum + ratio, 0) / ratios.length;
        setAspectRatio(avgRatio);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
        setImagesLoaded(true); // Continue anyway
      }
    };

    preloadImages();
  }, []);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  // Calculate container height based on width and aspect ratio
  const getImageContainerStyle = () => {
    return {
      paddingTop: `${(1 / aspectRatio) * 100}%`, // Create aspect ratio container
      position: "relative",
    };
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Latest <span className="text-green-500">Project</span>
          </h2>
          <div className="h-1 w-20 bg-green-500 mx-auto"></div>
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Column - Project Info (No Animation) - Fixed Height with Scroll */}
          <div className="space-y-6 lg:pr-10 h-full flex flex-col">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-8xl font-bold text-gray-700/50 font-mono">
                  {String(currentProject.id).padStart(2, "0")}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {currentProject.title}
                </h3>
              </div>
              {/* Fixed height description container with scroll */}
              <div className="h-[120px] overflow-y-auto pr-2 custom-scrollbar">
                <p className="text-gray-300 text-lg">
                  {currentProject.description}
                </p>
              </div>
            </div>

            {/* Tags - Fixed height with scroll if needed */}
            <div className="pt-4 border-t border-gray-700">
              <div className="flex flex-wrap gap-2 max-h-[80px] overflow-y-auto pr-2 custom-scrollbar">
                {currentProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-green-400 rounded-full text-sm border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex space-x-4 pt-4 mt-auto">
              <a
                href={currentProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-300 hover:text-green-400 transition-colors duration-300 bg-gray-800/50 rounded-full"
                aria-label="View Live Project"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <a
                href={currentProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-300 hover:text-green-400 transition-colors duration-300 bg-gray-800/50 rounded-full"
                aria-label="View GitHub Repository"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Project Image with Slide Animation */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-xl border-2 border-gray-700">
              {/* Aspect ratio container */}
              <div style={getImageContainerStyle()} className="bg-gray-800">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.img
                    key={currentProject.id}
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    custom={direction}
                    variants={{
                      enter: (direction) => ({
                        x: direction > 0 ? 1000 : -1000,
                        opacity: 0,
                      }),
                      center: {
                        x: 0,
                        opacity: 1,
                      },
                      exit: (direction) => ({
                        x: direction < 0 ? 1000 : -1000,
                        opacity: 0,
                      }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                  />
                </AnimatePresence>
                {/* Loading skeleton */}
                {!imagesLoaded && (
                  <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
                )}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-6">
              <button
                onClick={goToPrevious}
                className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300 border border-gray-700 hover:border-green-500"
                aria-label="Previous project"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300 border border-gray-700 hover:border-green-500"
                aria-label="Next project"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Project counter */}
        <div className="mt-10 text-center">
          <span className="text-gray-400">
            {currentIndex + 1}/{projectsData.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
