import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { neue } from "./fonts";
import { Toaster } from "react-hot-toast";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nextjs Boilerplate",
  description: "Nextjs boilerplate Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${workSans.className} ${neue.variable}`}>
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
