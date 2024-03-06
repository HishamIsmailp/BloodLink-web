"use client"
import NavBar from "../components/NavBar";
export default function regAsDonerLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
          <div className=" p-3 top-0 w-100"><NavBar /></div>
          <div>{children}</div>
          </body>
      </html>
    );
  }