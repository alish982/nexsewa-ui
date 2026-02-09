"use client";

import React, { useState } from "react";
import { MapPin, Phone, Clock, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

// Store Location Component
export const StoreLocation = () => {
  const storeHours = [
    { id: 1, day: "Monday", hours: "8:00 AM - 12:00 PM" },
    { id: 2, day: "Tuesday", hours: "8:00 AM - 10:00 PM" },
    { id: 3, day: "Wednesday", hours: "8:00 AM - 10:00 PM" },
    { id: 4, day: "Thursday", hours: "8:00 AM - 10:00 PM" },
    { id: 5, day: "Friday", hours: "8:00 AM - 10:00 PM" },
    { id: 6, day: "Saturday", hours: "9:00 AM - 3:00 PM" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Store Location</h2>
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Side - Store Info */}
        <div className="bg-white rounded-xl  p-6">
          {/* Address */}
          <div className="flex gap-3 mb-4">
            <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-gray-500">Location</p>
              <p className="text-gray-700 text-sm">
                1234 Sunset Boulevard, West Hollywood
              </p>
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-gray-500">Store Opening Time</p>
              <p className="text-gray-700 text-sm">10:00 PM - 6:00 PM</p>
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-gray-600">Delivery Available</p>
              {storeHours.map((schedule) => (
                <div key={schedule.id} className="text-sm py-1">
                  <div
                    className={
                      schedule.id % 2 !== 0 ? "text-green-600" : "text-gray-600"
                    }
                  >
                    {schedule.day}
                  </div>
                  <div
                    className={
                      schedule.id % 2 !== 0
                        ? "text-green-600 font-medium"
                        : "text-gray-800 font-medium"
                    }
                  >
                    {schedule.hours}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full text-left bg-gray-200 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors px-4 mb-4">
            500 + Items sold
          </button>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors">
            Get Directions →
          </button>
        </div>

        <div className="bg-white rounded-md overflow-hidden h-[450px]">
          <div className="border-t-4 border-gray-700 h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.1821944371555!2d-118.32894492346171!3d34.09834261571944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf2b52ede2f9%3A0x4c82f8e6f8a7c3d0!2sHollywood%2C%20Los%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

// FAQ Component
export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    {
      id: 1,
      question: "How can I place a purchase?",
      answer: "",
    },
    {
      id: 2,
      question: "How can I make a payment?",
      answer:
        "You can place an order by visiting our website or mobile app. Simply compare products, add them to your cart, and complete the purchase process. Once verified, your order is ready! Delivery will be scheduled according to your preferred time slot.",
    },
    {
      id: 3,
      question: "Does Farmizen charge any fees/taxes/other charges?",
      answer: "",
    },
    {
      id: 4,
      question: "How long does it take to get my order delivered?",
      answer: "",
    },
    {
      id: 5,
      question: "Can other person order order for me?",
      answer: "",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Left Side - Image */}
      <div className="relative">
        <Image
          src="/shopping-cart-illustration.png"
          alt="Shopping Cart"
          width={500}
          height={500}
          className="w-full max-w-md mx-auto"
        />
      </div>

      {/* Right Side - FAQ */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && faq.answer && (
                <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
