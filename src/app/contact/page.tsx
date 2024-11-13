import Link from 'next/link';

export default function Contact() {
  return (
    <div>
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
    integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
 
    <div className="min-h-screen bg-[#000021] flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold text-white mt-10">Contact Me</h1>
      <h2 className="text-lg text-white mb-8">
        Feel free to reach out for any inquiries, collaboration opportunities, or just to say hi!
      </h2>

      {/* Contact Form */}
      <form
        id="resumeForm"
        className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <fieldset className="border border-gray-300 p-4 rounded-md">
          <legend className="text-lg font-semibold">Personal Information</legend>

          <div className="flex flex-col space-y-3 mt-4">
            <label htmlFor="name" className="text-sm font-medium">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded-md p-2"
              required
            />

            <label htmlFor="email" className="text-sm font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-md p-2"
              required
            />

            <label htmlFor="subject" className="text-sm font-medium">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="border border-gray-300 rounded-md p-2"
              required
            />

            <label htmlFor="message" className="text-sm font-medium">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="border border-gray-300 rounded-md p-2"
             
              required
            ></textarea>
          </div>
        </fieldset>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg mt-4 hover:bg-blue-600 transition-colors"
        >
          Send Message
        </button>
      </form>

      {/* Footer */}
      <footer className="w-full max-w-lg mt-12 text-center">
        <p className="text-sm text-white">
          &copy; 2024 Simple Web Design. All rights reserved.
        </p>

        <div className="flex justify-center items-center space-x-4 mt-4">
          <a
            href="https://www.linkedin.com/in/zainab-mustaqeem-3367b5301/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x text-blue-700"></i>
          </a>
          <a href="https://github.com/Zaibunis" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-2x text-gray-800"></i>
          </a>
        </div>

        <div className="mt-8">
          <a href="#" className="text-white hover:text-blue-600">
          Back to Top  <i className="fas fa-arrow-up"></i> 
          </a>
        </div>
      </footer>
    </div>
    </div>
  );
}
