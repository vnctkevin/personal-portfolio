import Image from "next/image";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qIfaZ6Ne5Gb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import IndexPage from "../../components/IndexPage";
import * as React from "react"
import type { Metadata } from "next";
import "./globals.css"

export const metadata: Metadata = {
    title: "Kevin's Portfolio",
    description: "Kevin's (@vnctkevin) personal portfolio website",
    keywords: ["portfolio", "Kevin", "software", "development", "design", "vnctkevin"],
    icons: [
        {
            url:"./favicon-32x32.png",
        }
    ]
  };

export default function Index() {
  return (
    <html lang="en">
    <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Kevin's (@vnctkevin) personal portfolio website" />
        <meta name="keywords" content="portfolio, Kevin, software, development, design, vnctkevin" />
        <meta name="author" content="Kevin" />
        <link rel="icon" href="./favicon-32x32.png" />
        <title>Kevin's Portfolio</title>
    </head>
      <IndexPage />
    </html>
  )
}
