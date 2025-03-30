import { useEffect, useRef } from "react";
import { personalInfo } from "../data/personalInfo";
import { socialLinks } from "../data/socialLinks";
import SocialIcon from "./SocialIcon";

const Hero = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const animateCircle = () => {
      if (!circleRef.current) return;
      const circle = circleRef.current;

      let angle = 0;
      const radius = 10;
      const centerX = 0;
      const centerY = 0;

      const animate = () => {
        if (!circle) return;

        angle += 0.03;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        circle.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(animate);
      };

      animate();
    };

    animateCircle();
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 pb-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
                {personalInfo.firstName}{" "}
                <span className="block">{personalInfo.lastName}</span>
              </h1>
              <p className="text-xl">
                I'm an{" "}
                <span className="text-green-500 font-medium">
                  {personalInfo.title}
                </span>
              </p>
            </div>

            <p className="text-gray-300 max-w-xl">{personalInfo.description}</p>

            <div className="flex flex-wrap gap-5">
              <a
                href={personalInfo.resumeLink}
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg transition-colors duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Download CV
              </a>

              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <SocialIcon key={link.id} name={link.icon} url={link.url} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Avatar with animated border */}
          <div className="relative flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Animated circle border */}
              <div
                ref={circleRef}
                className="absolute inset-0 rounded-full border-2 border-green-400 transform -translate-x-1 shadow-lg shadow-green-500/50"
              ></div>

              {/* Thêm một vòng tròn thứ hai chuyển động ngược */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/70 animate-pulse"></div>

              {/* Static circle border */}
              <div className="absolute inset-0 rounded-full border-2 border-green-500/40"></div>

              {/* Avatar image */}
              <div className="absolute inset-2 overflow-hidden rounded-full border-4 border-gray-800 shadow-xl shadow-green-500/20">
                <img
                  src={personalInfo.avatarImage}
                  alt={personalInfo.fullName}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
