import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@components/Footer";
import Navbar2 from "@components/Navbar2";
import AuthProvider from "@components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hiring Ugandan",
  description: "Find Your Next Job Here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar2 />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
