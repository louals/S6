import { motion } from "framer-motion";

const features = [
  {
    title: "Smart CV Analysis",
    description:
      "Our AI scans your CV to understand your skills and experience deeply, so you get tailored job matches.",
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
        <path d="M12 20h9" />
        <path d="M12 4h9" />
        <path d="M12 12h9" />
        <circle cx="6" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Instant Job Matching",
    description:
      "Skip endless scrolling — our algorithm instantly connects you with jobs that actually fit you.",
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
        <path d="M20 12H4" />
        <path d="M14 6l-6 6 6 6" />
      </svg>
    ),
  },
  {
    title: "Personalized Cover Letters",
    description:
      "Get AI-generated, tailored cover letters that make you stand out, saving time and boosting chances.",
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
        <path d="M12 20h9" />
        <path d="M12 4h9" />
        <path d="M12 12h9" />
        <circle cx="6" cy="12" r="3" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section
      aria-label="Features of JobMatch AI"
      className="max-w-6xl mx-auto py-16 px-6 sm:px-12 text-center"
    >
      <h2 className="text-4xl font-extrabold mb-10 text-black dark:text-white">
        Why JobMatch AI Rocks
      </h2>
      <div className="grid sm:grid-cols-3 gap-10">
        {features.map(({ title, description, icon }, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.2, duration: 0.7, ease: "easeOut" }}
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
