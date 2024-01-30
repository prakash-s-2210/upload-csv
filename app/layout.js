import { Montserrat, Lato, Nunito, Figtree } from "next/font/google";
import "./globals.css";

const monteserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "CSVision: Simplify Data Upload and Display",
  description:
    "CSVision: Effortless CSV Upload and Data Display in Next.js. Sign up, upload files, and view data in tables - ideal for analysis and presentation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monteserrat.className}>{children}</body>
    </html>
  );
}
