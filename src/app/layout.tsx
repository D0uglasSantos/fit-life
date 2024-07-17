import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import IconChat from "./components/IconChat";
import FixedFooter from "./components/FixedFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fit Life",
  description: "Sua melhor versão começa aqui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
        <FixedFooter />
        <IconChat />
      </body>
    </html>
  );
}
