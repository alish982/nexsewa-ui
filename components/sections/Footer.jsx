"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import PropTypes from "prop-types";
import { faqs } from "@/data/mockData";

export const Footer = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="bg-white text-gray-600 mt-20">
      <div className="bg-[#E3EDEC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2  gap-10 lg:gap-16 items-center  px-4 sm:px-6 lg:px-8   py-12 lg:py-16">
          <div className="relative flex justify-center">
            <Image
              src="/items/cardB.svg"
              alt="Shopping Cart"
              width={500}
              height={500}
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto"
            />
          </div>

          <div className="lg:pr-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
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
                    <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <Image
              src="/logo/logo.svg"
              alt="Company Logo"
              width={130}
              height={130}
            />

            <p className="text-sm mt-4 mb-5 leading-relaxed">
              Pioneering technology education in Nepal since 2010, empowering
              students to become global tech leaders.
            </p>

            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn
            title="More About Us"
            links={[
              { href: "/shop", label: "About Us" },
              { href: "/contact", label: "Contact Us" },
              { href: "/faq", label: "FAQ" },
            ]}
          />

          <FooterColumn
            title="Related Information"
            links={[
              { href: "/blog", label: "Blog" },
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms & Conditions" },
            ]}
          />

          <FooterColumn
            title="Customer Support"
            links={[
              { href: "/returns", label: "Return Policy" },
              { href: "/shipping", label: "Shipping Info" },
              { href: "/support", label: "Support Center" },
            ]}
          />
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-center gap-3 text-sm text-center md:text-left">
          <p>© 2026 Nexsewa Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => {
  return (
    <div>
      <h4 className="text-lg font-semibold text-gray-900 mb-4">{title}</h4>

      <ul className="space-y-2">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className="hover:text-primary-500 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

FooterColumn.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
};
