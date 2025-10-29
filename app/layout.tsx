import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title:{
    template: "%s - LandA Technology",
    default: "LandA Technology"
  },
  description: "LandA Technology Software a la medida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
        {children}
      </body>
    </html>
  );
}
