"use client";
import Navbar from '@/components/Navbar';
import { FaHeadset, FaEnvelopeOpenText, FaMapMarkedAlt } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function ContactSection() {
  return (

    <div className="min-h-screen flex flex-col">
        <Navbar />
<section className="contact_us py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="contact_inner bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-5/6 p-8">
                  <div className="contact_form_inner">
                    <div className="contact_field">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h3>
                      <p className="text-gray-600 mb-6">
                        Feel free to contact us any time. We will get back to you as soon as we can!
                      </p>
                      <div className="space-y-4">
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Name"
                        />
                        <input
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Email"
                        />
                        <textarea
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          rows="4"
                          placeholder="Message"
                        ></textarea>
                        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/6 bg-black flex items-end p-4">
                  <div className="flex space-x-4 mx-auto md:mx-0 md:flex-col md:space-x-0 md:space-y-4">
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">
                      <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/me_musthu" className="text-pink-600 hover:text-pink-800 text-xl">
                      <FaInstagram />
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-600 text-xl">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact_info_sec p-8 border-t border-gray-200">
                <h4 className="text-xl font-semibold text-gray-800 mb-6">Contact Info</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FaHeadset className="text-blue-600 text-xl" />
                    <span>+91 9544688490</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaEnvelopeOpenText className="text-blue-600 text-xl" />
                    <span>mmusthafa270gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaMapMarkedAlt className="text-blue-600 text-xl" />
                    <span>Malappuram, Kerala, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section py-16 bg-gradient-to-b from-blue-50 to-white">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Global Presence
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          With offices in 3 continents and partners worldwide, we're always nearby to serve you. 
          Visit our flagship location in Kolkata or connect with our global team.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="lg:w-1/2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              🌍 Headquarters
            </h3>
            <p className="text-gray-700 mb-4">
              Our state-of-the-art facility in Kolkata serves as the innovation hub for our global operations.
            </p>
            <div className="space-y-2">
              <p className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Salt Lake City, Sector V, Kolkata, West Bengal 700091</span>
              </p>
              <p className="flex items-start">
                <span className="mr-2">🕒</span>
                <span>Monday-Friday: 9AM - 6PM IST</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                <span className="mr-2">🇺🇸</span> Americas
              </h4>
              <p className="text-sm text-gray-600">New York • Toronto • São Paulo</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                <span className="mr-2">🇦🇪</span> Middle East
              </h4>
              <p className="text-sm text-gray-600">Dubai • Abu Dhabi • Riyadh</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 h-full">
          <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.016396177606!2d88.42785631542249!3d22.580599985180905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b020703c0d%3A0xece6f8e7a352b8a8!2sSector%20V%2C%20Salt%20Lake%20City%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1623828123456!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
          <p className="text-center text-sm text-gray-500 mt-3">
            Click + to zoom or drag to explore our neighborhood
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105">
          Schedule a Visit
        </button>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}