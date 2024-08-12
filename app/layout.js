import "./globals.css";
import Nav from "@/components/navigation/Nav";

export const metadata = {
  title: "Exceptional Websites for Every Need",
  description: "Empowering individuals, small firms, and large organizations with custom-tailored, stunning websites designed to elevate your online presence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
