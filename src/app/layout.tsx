import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin's Portfolio",
  description: "Kevin's (@vnctkevin) personal portfolio website",
  keywords: ["portfolio", "Kevin", "software", "development", "design", "vnctkevin"],
  icons: [
    {
      url: "/favicon-32x32.png",
    },
  ],
  authors: [
    {
      name: "Kevin",
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
    </div>
  );
} 
