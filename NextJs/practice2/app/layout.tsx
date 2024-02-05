import "./globals.css";
import { RootLayout } from "@/types";

export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
