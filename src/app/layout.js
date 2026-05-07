import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import ScrollProvider from "./Components/ScrollProvider";
import ScrollProgress from "./Components/ScrollProgress";
import MouseFollower from "./Components/MouseFollower";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tanjim Ahsan Kayes | MERN Frontend Developer Portfolio",
  description: "Personal portfolio of Tanjim Ahsan Kayes, a MERN Frontend Developer specializing in React, Next.js, and modern web experiences. Based in Barguna, Bangladesh.",
  keywords: ["Tanjim Ahsan Kayes", "MERN Developer", "Frontend Developer", "React Developer", "Next.js Portfolio", "Bangladesh Developer"],
  authors: [{ name: "Tanjim Ahsan Kayes" }],
  openGraph: {
    title: "Tanjim Ahsan Kayes | Portfolio",
    description: "Explore the work and skills of Tanjim Ahsan Kayes, a passionate MERN Frontend Developer.",
    url: "https://tanjim-portfolio.vercel.app", // Placeholder
    siteName: "Tanjim Portfolio",
    images: [
      {
        url: "/images/profile.png",
        width: 800,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased selection:bg-blue-500/30`}
    >
      <body className="min-h-full flex flex-col bg-deep-bg">
        <ScrollProvider>
          <ScrollProgress />
          <MouseFollower />
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
        </ScrollProvider>
      </body>
    </html>
  );
}
