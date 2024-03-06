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
          <div className="position-sticky top-0"><NavBar /></div>
          <div>{children}</div>
          </body>
      </html>
    );
  }