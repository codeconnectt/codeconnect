import { Inter } from "next/font/google";
import Image from "next/image";
import "../../globals.css";

export default function welcome({ children }) {
  return (
    <html lang="en" className="bg-[#1D1D1D]">
      <body className=" text-white scroll-smooth bg-[#1D1D1D]">{children}</body>
    </html>
  );
}
