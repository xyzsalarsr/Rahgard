import type { Metadata } from "next";
import "../assets/css/style.css";

export const metadata: Metadata = {
  title: "راهگرد",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
