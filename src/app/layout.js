import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
