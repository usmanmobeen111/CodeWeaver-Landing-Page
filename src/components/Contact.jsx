import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    <motion.div
      className="bg-green-50 min-h-screen py-16 px-4 md:px-12 lg:px-32"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-second text-center mb-4"
        variants={itemVariants}
      >
        Contact
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 text-center mb-12"
        variants={itemVariants}
      >
        Let's build something amazing together. Whether it's a project, a job, or just a friendly hello — I’m all ears!
      </motion.p>

      {/* Form Card */}
      <motion.div
        className="bg-white shadow-xl rounded-2xl p-8 md:p-12 max-w-3xl mx-auto"
        variants={itemVariants}
      >
        <form action="#" method="POST" className="space-y-6">
          {/* Name */}
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none transition"
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@example.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none transition"
            />
          </motion.div>

          {/* Message */}
          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Let's discuss your project..."
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none transition resize-none"
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.div className="text-center" variants={itemVariants}>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-second hover:bg-first text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300 shadow-md"
            >
              Send Message
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
