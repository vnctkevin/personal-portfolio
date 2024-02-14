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

export default function Layout(children: any) {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      {children.map((child: any, index: number) => (<div>{child}</div>))}
    </div>
  );
}
