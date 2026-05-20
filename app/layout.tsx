import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Conversion Leak Detector – Find Where Customers Abandon Your Funnel",
  description: "Track customer behavior through your checkout flow and identify exact drop-off points with actionable AI-powered fixes. Built for Shopify stores doing $10k+ monthly revenue."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2e185923-9ffb-413b-a0db-453e3c096312"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
