import NavBar from "../components/NavBar";
export default function regAsOrgLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>{children}</div>
    </div>
  );
}
