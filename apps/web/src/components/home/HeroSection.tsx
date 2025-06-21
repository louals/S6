import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import BlueLogo from "../../assets/logoblue.svg";
import WhiteLogo from "../../assets/logowhite.svg";
import { useEffect, useState, useRef } from "react";
import AnimatedWave from "../animations/AnimatedWave";




export default function HeroSection() {
  const [isDark, setIsDark] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() =>
      setIsDark(document.documentElement.classList.contains("dark"))
    );
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    controls.start({
      scale: [1, 1.03, 1],
      transition: { duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" },
    });
  }, [controls]);

  return (
    <section
      aria-label="Hero section introducing JobMatch AI"
      className="relative overflow-hidden min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 translate-y-6 sm:-translate-y-10 lg:-translate-y-20 xl:-translate-y-16"
    >
      
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 0, rgba(0,57,101,0.15), transparent 70%)",
        }}
      />

      <div
        className="relative z-10 max-w-5xl w-full mx-auto text-center flex flex-col items-center
                   -translate-y-6 sm:-translate-y-10 lg:-translate-y-14"
      >
        
        <motion.img
          src={isDark ? WhiteLogo : BlueLogo}
          alt="JobMatch AI logo — your AI-powered job finder"
          className="mb-4 sm:mb-6 select-none h-48 w-48 sm:h-48 sm:w-48 md:h-48 md:w-auto" 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

       
        <motion.h1
  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug sm:leading-tight tracking-tight text-black dark:text-white px-2"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.8 }}
>
  Find Your <span className="text-primary">Perfect Job</span>
  <br className="hidden sm:block" />
  in Seconds with AI
</motion.h1>


<motion.div
  aria-hidden="true"
  className="mt-2 inline-block"
  animate={{ y: [0, -8, 0] }}
  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
>

</motion.div>
        {/* sub‑headline */}
        <motion.p
          className="mt-3 sm:mt-6 max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-xl text-gray-600 dark:text-gray-300 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Upload your CV, let our algorithm do the heavy lifting, and get matched
          to roles you'll actually love—no endless scrolling required.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="mt-6 sm:mt-10 w-full px-4 sm:px-0 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Link
            to="/upload"
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3 rounded-lg text-white bg-primary hover:bg-primary/90 shadow-lg transition text-center text-sm sm:text-base focus:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-opacity-75"
            aria-label="Upload your CV"
          >
            Upload CV
          </Link>
          <Link
  to="/jobs"
  className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3 rounded-lg border-2 border-primary text-primary dark:text-white hover:bg-primary/10 transition text-center text-sm sm:text-base focus:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-opacity-50"
  aria-label="Browse available jobs"
>
  Browse Jobs
</Link>
        </motion.div>
      </div>

      {/* Scroll down hint */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-20 flex justify-center w-full"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>

      
      
    </section>
  );
}
