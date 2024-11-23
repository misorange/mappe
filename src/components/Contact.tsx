import React from 'react';

const Contact: React.FC = () => {
    return (
      <section id="contact" className="bg-gray-700 text-white py-16 px-8 rounded-xl shadow-lg mt-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
          <p className="text-lg mb-8">
          メール等でお気軽にご連絡ください。
          </p>
  
          {/* GitHub Link */}
          <div className="mb-4">
            <a
              href="https://github.com/misorange"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-xl"
            >
              GitHub Profile
            </a>
          </div>
  
          {/* Email Link */}
          <div>
            <a
              href="misorange@outlook.com"
              className="text-blue-500 hover:text-blue-700 text-xl"
            >
              Send me an Email
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;