import "./globals.css";
import { LayoutType } from "@/types/type";
import MainHeader from "@/components/main-header/main-header";

export const metadata = {
  title: "NextJS Food",
  description: "NextJS Food App!",
};

export default function RootLayout({ children }: LayoutType) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
