import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};

type RootLayout = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
