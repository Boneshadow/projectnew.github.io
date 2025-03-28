import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="bg-gray-900 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-gray-400 mb-6">
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Email</h3>
                  <p className="text-gray-400">contact@singlish.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Address</h3>
                  <p className="text-gray-400">
                    123 Innovation Street<br />
                    Tech Valley, CA 94043<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#6C5DD3]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#6C5DD3]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-[#6C5DD3]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#6C5DD3] text-white py-2 px-4 rounded-lg hover:bg-[#5a4ec0] transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;