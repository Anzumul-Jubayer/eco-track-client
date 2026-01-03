import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-linear-to-br from-green-50 to-emerald-100 flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8">
        
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6 text-center">
          Contact Us
        </h2>

        
        <p className="text-green-800 mb-6 text-center">
          Have questions or suggestions? Reach out to us and we'll get back to you soon!
        </p>

        
        <form className="space-y-4">
          <div>
            <label className="block text-green-700 font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-green-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-green-700 font-semibold mb-1">Message</label>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
