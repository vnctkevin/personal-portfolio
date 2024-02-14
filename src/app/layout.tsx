import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin's Portfolio",
  description: "A portfolio of Kevin's work and experiences.",
  keywords: ["portfolio", "Kevin", "software"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      {children}
    </div>
  );
}
