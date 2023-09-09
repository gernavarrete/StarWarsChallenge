import Providers from "@/redux-toolkit/provider";
import "./globals.css";
import axios from "axios";
//import { Inter } from "next/font/google";

//const inter = Inter({ subsets: ["latin"] });
axios.defaults.baseURL = `${process.env.REACT_APP_BACK_URL}`;
export const metadata = {
  title: "Star Wars App",
  description: "Challenge The Star Wars",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
