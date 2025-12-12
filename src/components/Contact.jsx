import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-[var(--dark-200)] "
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-purple-600">Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate?Lets talk!
        </p>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12
         max-w-5xl mx-auto "
        >
          {/* contact form */}
          <div>
            <form action="" className="spac-y-6">
              {/* name */}
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 ">
                  Your Name
                </label>
                <input
                  className="w-full bg-[var(--dark-300)] border border-[var(--dark-400)] rounded-lg px-4 py-3 outline-none"
                  type="text"
                />
              </div>
              {/* email */}
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 ">
                  Email Address
                </label>
                <input
                  className="w-full bg-[var(--dark-300)] border border-[var(--dark-400)] rounded-lg px-4 py-3 outline-none"
                  type="email"
                />
              </div>
              {/*  message*/}
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 ">
                  Your Message
                </label>
                <textarea
                  className="w-full h-40  bg-[var(--dark-300)] border border-[var(--dark-400)] rounded-lg px-4 py-3 outline-none"
                  type="text"
                />
              </div>

              {/* button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple-900 rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>

          {/* contact Information */}
          <div className="space-y-8 ">
            {/* location */}
            <div className="flex items-start ">
              <div className="text-purple-600 text-2xl mr-4 ">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className=" text-gray-400">Banepa Kavre,Nepal</p>
              </div>
            </div>
            {/* email */}
            <div className="flex items-start ">
              <div className="text-purple-600 text-2xl mr-4 ">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className=" text-gray-400">ashishbudhathoki952@gmail.com</p>
              </div>
            </div>
            {/* phone */}
            <div className="flex items-start ">
              <div className="text-purple-600 text-2xl mr-4 ">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className=" text-gray-400">+977 9803310278</p>
              </div>
            </div>
            {/* follow me */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow me</h3>
              <div className="flex space-x-4">
                {/* github */}
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[var(--dark-300)] flex items-center justify-center text-purple-600 hover:bg-black-700 hover:text-white transition duration-300"
                >
                  <FaGithub />
                </a>

                {/* linkedln */}
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[var(--dark-300)] flex items-center justify-center text-purple-600 hover:bg-blue-700 hover:text-white transition duration-300"
                >
                  <FaLinkedin />
                </a>

                {/* facebook */}

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[var(--dark-300)] flex items-center justify-center text-purple-600 hover:bg-blue-700 hover:text-white transition duration-300"
                >
                  <FaFacebook />
                </a>

                {/* insta */}

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[var(--dark-300)] flex items-center justify-center text-purple-600 hover:bg-red-700 hover:text-white transition duration-300"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
