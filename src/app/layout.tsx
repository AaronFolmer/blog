import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="root">{children}</body>
    </html>
  );
}
