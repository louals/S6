import { motion } from "framer-motion";

const steps = [
  {
    title: "Upload Your CV",
    description: "Start by uploading your latest CV. Our AI will take it from there.",
    icon: (
      <svg
        className="w-10 h-10 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    title: "AI Matches You Instantly",
    description:
      "Our powerful algorithm analyzes your skills and preferences to find perfect job matches.",
    icon: (
      <svg
        className="w-10 h-10 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Apply Effortlessly",
    description:
      "Get AI-generated cover letters and apply with confidence and zero hassle.",
    icon: (
      <svg
        className="w-10 h-10 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M16 12h-4" />
        <path d="M12 8v8" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      aria-label="How JobMatch AI works"
      className="max-w-5xl mx-auto py-16 px-6 sm:px-12 text-center"
    >
      <h2 className="text-4xl font-extrabold mb-12 text-black dark:text-white">
        How It Works
      </h2>
      <div className="grid sm:grid-cols-3 gap-10">
        {steps.map(({ title, description, icon }, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.3, duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
