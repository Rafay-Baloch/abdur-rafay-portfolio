import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://abdurrafay.dev"),
  title: {
    default: "Abdur Rafay Hassan Baloch | Full Stack Developer",
    template: "%s | Abdur Rafay",
  },
  description:
    "Portfolio of Abdur Rafay Hassan Baloch, a Full Stack Developer building responsive interfaces, robust backends, APIs and database-driven web applications.",
  keywords: [
    "Abdur Rafay Hassan Baloch",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Django Developer",
    "Pakistan Web Developer",
  ],
  authors: [{ name: "Abdur Rafay Hassan Baloch" }],
  creator: "Abdur Rafay Hassan Baloch",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Abdur Rafay Hassan Baloch | Full Stack Developer",
    description:
      "Full Stack Developer portfolio — modern web interfaces, backends, APIs and databases.",
    type: "website",
    locale: "en_PK",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
