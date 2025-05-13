// app/layout.jsx

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LinkedLift",
  description:
    'A sleek, modern browser extension interface overlaid on a LinkedIn post, showing a "Rewrite" button being clicked. The post transforms into a well-written, concise version with tone options like "Professional", "Friendly", and "Bold" displayed as buttons or dropdown. The background should subtly show LinkedIn\'s blue branding colors, with clean UI elements representing AI-enhanced productivity. Include a floating label or badge with the extension name "LinkedInLift" and a tagline like "Rewrite Smarter. Post Better."',
  icons: {
    icon: [
      // { url: "/animation.gif", type: "image/gif" },
      { url: "/xyz.ico", type: "image/x-icon" }, // Fallback favicon
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900 text-zinc-100`}
      >
        {children}

        {/* Footer */}
        <footer className="mt-0 text-center text-sm text-zinc-500 w-full border-t border-zinc-800 pt-6 pb-4 bg-zinc-800">
          <p className="mb-4">
            Made with <span className="text-red-500">zeal</span> &{" "}
            <span className="text-blue-400">compassion</span> ~ Kushik Sahu
          </p>
          <div className="flex justify-center gap-6 text-zinc-400">
            <a
              href="https://github.com/ContactKushik"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/kushik-sahu-b09757191/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/kushik_sahu/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
