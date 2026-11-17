import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aryan Patel | AI/ML Engineer",
  description: "Aryan Patel's portfolio: agentic AI, RAG, computer vision and software engineering.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
