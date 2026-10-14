
import React from "react";
import Animated from "../components/Animated";
import { Mail, Phone } from "lucide-react";

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com", icon: "X" },
  { name: "YouTube", href: "https://youtube.com", icon: "Y" },
  { name: "Instagram", href: "https://instagram.com", icon: "I" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Menu", href: "/menu" },
  { name: "Contact", href: "/contact" },
];

const sitemapLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "FAQs", href: "/faqs" },
];

const Footer = () => {
  return (
    <footer className="relative mt-20 w-full bg-white px-4 py-10 text-zinc-900 sm:px-6">
      <div className="mx-auto max-w-7xl">

        {/* Footer Columns */}
        <div className="grid grid-cols-1 gap-10 border-b border-zinc-200 pb-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Column 1 - Brand & Social Links */}
          <Animated delay={0.2}>
            <div>
              <img
                src="/assets/logo.svg"
                alt="Restaurant logo"
                className="mb-4 h-10 w-auto"
              />

              <p className="max-w-xs text-sm leading-6 text-zinc-600">
                Serving freshly prepared dishes with authentic flavors,
                premium ingredients, and exceptional hospitality every day.
              </p>

              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map((item, index) => (
                  <Animated key={item.name} delay={index * 0.05}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                      title={item.name}
                      className="grid h-9 w-9 place-items-center rounded-full border border-zinc-300 text-sm font-semibold text-zinc-700 transition hover:bg-gray-300 hover:text-zinc-900"
                    >
                      {item.icon}
                    </a>
                  </Animated>
                ))}
              </div>
            </div>
          </Animated>

          {/* Column 2 - Quick Links */}
          <Animated delay={0.25}>
            <div>
              <h3 className="mb-5 font-semibold">Quick Links</h3>
              <div className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-zinc-600 hover:text-zinc-900"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </Animated>

          {/* Column 3 - Get in Touch */}
          <Animated delay={0.3}>
            <div>
              <h3 className="mb-5 font-semibold">Get in Touch</h3>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900"
                >
                  <Mail size={16} className="shrink-0" />
                  hello@example.com
                </a>

                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900"
                >
                  <Phone size={16} className="shrink-0" />
                  +91 98765 43210
                </a>
              </div>
            </div>
          </Animated>

          {/* Column 4 - Sitemap */}
           <Animated delay={0.35}>
            <div>
              <h3 className="mb-5 font-semibold">Sitemap</h3>
              <div className="flex flex-col gap-3">
                {sitemapLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-zinc-600 hover:text-zinc-900"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </Animated> 

        </div>

        {/* Bottom Bar */}
        <Animated delay={0.5}>
          <div className="border-t text-zinc-500 border-slate-200 py-4.5 flex justify-between items-center">
            <p>
              © 2026. All Right Reserved 
            </p>
            <p>Designed by me </p>
          </div>
        </Animated>

            {/* Watermark logo backdrop */}

            <div className="absolute inset-0 text-center select-none-z-1 pointer-events-none">
                <span className="text-[300px] tracking-wide font-urbanist font-semibold text-gray-50/70">Restro</span>
            </div>

      </div>
    </footer>
  );
};

export default Footer;
