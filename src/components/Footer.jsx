import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { footerData } from "../data/footerData";

const Footer = () => {
  const MotionDiv = motion.div;
  const formRef = useRef();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    const formElement = formRef.current;
    const formData = new FormData(formElement);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then(async (response) => {
        const data = await response.json();
        if (data.success) {
          // Thành công
          setEmail("");
          setSubmitSuccess(true);
          setTimeout(() => setSubmitSuccess(false), 5000);
        } else {
          // Lỗi
          setSubmitError(true);
          setTimeout(() => setSubmitError(false), 5000);
        }
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setSubmitError(true);
        setTimeout(() => setSubmitError(false), 5000);
        setIsSubmitting(false);
      });
  };

  // Social media icons mapping
  const socialIcons = {
    github: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    linkedin: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    twitter: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    ),
    instagram: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  };

  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Info */}
          <MotionDiv
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <a
                href="/"
                className="text-2xl font-bold text-white inline-flex items-center"
              >
                {footerData.logo}
                <span className="text-green-500">.</span>
              </a>
            </div>
            <p className="text-gray-300 max-w-md">{footerData.tagline}</p>
            <div className="flex space-x-3 pt-4">
              {footerData.socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-gray-300 hover:bg-green-500 hover:text-white transition-colors duration-300"
                  aria-label={link.name}
                >
                  {socialIcons[link.icon.toLowerCase()]}
                </a>
              ))}
            </div>
          </MotionDiv>

          {/* Quick Links */}
          <MotionDiv
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">
              Liên kết nhanh
            </h3>
            <ul className="space-y-2">
              {footerData.quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-2"
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
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </MotionDiv>

          {/* Newsletter */}
          <MotionDiv
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">
              Nhận thông tin mới
            </h3>
            <p className="text-gray-300 mb-4">
              Đăng ký nhận bản tin để cập nhật thông tin mới nhất
            </p>
            <form
              ref={formRef}
              method="POST"
              className="flex flex-col gap-3"
              onSubmit={handleSubscribe}
            >
              {/* Web3Forms configurations */}
              <input
                type="hidden"
                name="access_key"
                value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
              />
              <input
                type="hidden"
                name="subject"
                value="Đăng ký nhận bản tin"
              />
              <input
                type="hidden"
                name="from_name"
                value="Newsletter Subscription"
              />
              <input
                type="hidden"
                name="redirect"
                value={window.location.href}
              />
              <input
                type="checkbox"
                name="botcheck"
                style={{ display: "none" }}
              />

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Địa chỉ email của bạn"
                  className="flex-grow px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className={`px-4 py-2 font-medium rounded-lg sm:rounded-l-none sm:rounded-r-lg transition-colors ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed text-gray-300"
                      : "bg-green-600 hover:bg-green-700 text-white"
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin h-4 w-4 mr-2 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Đang gửi...</span>
                    </div>
                  ) : (
                    "Đăng ký"
                  )}
                </button>
              </div>

              {/* Success message */}
              {submitSuccess && (
                <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm">
                  Đăng ký thành công! Cảm ơn bạn đã đăng ký nhận bản tin.
                </div>
              )}

              {/* Error message */}
              {submitError && (
                <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
                  Có lỗi xảy ra. Vui lòng thử lại sau.
                </div>
              )}
            </form>
          </MotionDiv>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">{footerData.copyright}</p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Thiết kế với <span className="text-green-500">❤</span> bởi Lucius
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
