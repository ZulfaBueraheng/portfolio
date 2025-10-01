import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  Github,
  Send,
  User,
  MessageSquare,
  ExternalLink,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // ตรวจสอบ Env Variables
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError(
        "Email service is not configured properly. Please check environment variables."
      );
      return;
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setIsSubmitted(true);
      setError(null);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Failed to send message. Please try again later.");
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      info: "zulfa.bg@gmail.com",
      link: "mailto:zulfa.bg@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      info: "+66 66-005-2755",
      link: "tel:+66660052755",
    },
    {
      icon: <Github size={24} />,
      title: "Github",
      info: "ZulfaBueraheng",
      link: "https://github.com/ZulfaBueraheng",
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 z-0">
        <div className="w-720 sm:w-700 md:w-680 lg:w-400 xl:w-420 2xl:w-full">
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 690"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto  transition duration-300 ease-in-out delay-150"
          >
            <path
              d="M 0,700 L 0,131 C 99.17857142857142,129.46428571428572 198.35714285714283,127.92857142857142 315,140 C 431.64285714285717,152.07142857142858 565.75,177.75000000000003 682,170 C 798.25,162.24999999999997 896.6428571428571,121.07142857142857 1020,109 C 1143.357142857143,96.92857142857143 1291.6785714285716,113.96428571428572 1440,131 L 1440,700 L 0,700 Z"
              stroke="none"
              strokeWidth="0"
              fill="#4a698a"
              fillOpacity="0.4"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
              transform="rotate(-180 720 350)"
            ></path>
            <path
              d="M 0,700 L 0,306 C 115.39285714285714,266.92857142857144 230.78571428571428,227.85714285714283 338,250 C 445.2142857142857,272.14285714285717 544.25,355.50000000000006 670,359 C 795.75,362.49999999999994 948.2142857142858,286.1428571428571 1081,264 C 1213.7857142857142,241.8571428571429 1326.892857142857,273.92857142857144 1440,306 L 1440,700 L 0,700 Z"
              stroke="none"
              strokeWidth="0"
              fill="#4a698a"
              fillOpacity="0.53"
              className="transition-all duration-300 ease-in-out delay-150 path-1"
              transform="rotate(-180 720 350)"
            ></path>
            <path
              d="M 0,700 L 0,481 C 117.5,460.75 235,440.5 352,432 C 469,423.5 585.4999999999999,426.75000000000006 715,425 C 844.5000000000001,423.24999999999994 987,416.50000000000006 1110,425 C 1233,433.49999999999994 1336.5,457.25 1440,481 L 1440,700 L 0,700 Z"
              stroke="none"
              strokeWidth="0"
              fill="#4a698a"
              fillOpacity="1"
              className="transition-all duration-300 ease-in-out delay-150 path-2"
              transform="rotate(-180 720 350)"
            ></path>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-10 h-auto py-24">
        <div className="text-center mb-4 lg:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-white mb-4">
            CONTACT
          </h2>
          <div className="w-20 h-1 xl:h-2 bg-secondary rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="">
            <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 text-sm sm:text-base">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  <div className="transition-colors duration-300 group-hover:text-secondary">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.info}</p>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-gray-400 ml-auto group-hover:text-secondary"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 sm:p-8 bg-white rounded-2xl shadow-xl">
            <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold text-gray-800 mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 text-sm sm:text-base">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-medium text-gray-700 mb-2"
                    >
                      <User size={16} className="inline mr-2" />
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-medium text-gray-700 mb-2"
                    >
                      <Mail size={16} className="inline mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-medium text-gray-700 mb-2"
                  >
                    <MessageSquare size={16} className="inline mr-2" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Subject of your inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full py-3 px-6 flex items-center justify-center space-x-2 font-medium rounded-lg transition-all duration-300 ${
                    isSubmitted
                      ? "bg-green-500 text-white cursor-not-allowed"
                      : "text-white bg-gradient-to-r from-accent to-[#88A1BF] transform hover:scale-105 hover:shadow-lg hover:from-secondary hover:to-[#9D4345]"
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
