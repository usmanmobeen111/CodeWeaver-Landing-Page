import React from 'react'

const Contact = () => {
  return (
    <div className="bg-green-50 min-h-screen py-16 px-4 md:px-12 lg:px-32" id='contact'>
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-second text-center mb-4">
        Contact
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-700 text-center mb-12">
        Let's build something amazing together. Whether it's a project, a job, or just a friendly hello — I’m all ears!
      </p>

      {/* Form Card */}
      <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
        <form action="#" method="POST" className="space-y-6">
          {/* Name */}
          <div>
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
          </div>

          {/* Email */}
          <div>
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
          </div>

          {/* Message */}
          <div>
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
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-second hover:bg-first text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
