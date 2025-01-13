import { Metadata } from "next";
import "./globals.css";
import { Fonts } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Jwel",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Fonts.quicksand.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
