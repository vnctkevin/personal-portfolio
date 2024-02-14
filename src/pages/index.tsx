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
      <IndexPage />
  )
}
