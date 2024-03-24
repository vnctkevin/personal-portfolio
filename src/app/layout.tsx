import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin's Portfolio",
  description: "Kevin's (@vnctkevin) personal portfolio website",
  keywords: ["portfolio", "Kevin", "software", "development", "design", "vnctkevin"],
  icons: [
      {
          rel: "icon",
          url: "/favicon.ico",
      }
  ]
};

export default function Layout({ children }: any) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
        attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  )
} 
