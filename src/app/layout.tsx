import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SNOWMAP | ServiceNow Learning Platform",
  description: "The ultimate roadmap to mastering ServiceNow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
