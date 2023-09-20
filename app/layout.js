import ReduxProvider from "@/Lib/Provider";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Pharma CMS",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          {children}
          <Toaster position="top-left" />
        </ReduxProvider>
      </body>
    </html>
  );
}
