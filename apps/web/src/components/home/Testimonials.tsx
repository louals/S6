import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "JobMatch AI found me a job I actually love within days. The cover letter generator saved me hours of stress!",
    name: "Ines B.",
    role: "Marketing Specialist",
  },
  {
    quote:
      "Uploading my CV and getting instant matches blew my mind. This app makes job hunting less painful.",
    name: "Samir K.",
    role: "Software Engineer",
  },
  {
    quote:
      "The AI-generated cover letters are so personalized, I got callbacks faster than ever before.",
    name: "Leila M.",
    role: "Data Analyst",
  },
];

export default function Testimonials() {
  return (
    <section
      aria-label="User testimonials about JobMatch AI"
      className="max-w-4xl mx-auto py-16 px-6 sm:px-12 text-center"
    >
      <h2 className="text-4xl font-extrabold mb-10 text-black dark:text-white">
        What People Are Saying
      </h2>
      <div className="space-y-10">
        {testimonials.map(({ quote, name, role }, idx) => (
          <motion.blockquote
            key={idx}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg text-gray-800 dark:text-gray-200 italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.25, duration: 0.7, ease: "easeOut" }}
          >
            <p className="mb-4 text-lg">“{quote}”</p>
            <footer className="font-semibold text-primary">
              — {name}, <span className="font-normal">{role}</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
