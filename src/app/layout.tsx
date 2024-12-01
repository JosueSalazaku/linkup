import type { Metadata } from "next";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Link Up",
  description: "Events app for starting or current Developers in Belgium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="content-wrapper">
          <Nav />
          <main className="main-content bg-primaryDark">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
