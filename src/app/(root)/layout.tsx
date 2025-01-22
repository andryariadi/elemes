import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="b-sky-700">
      <Navbar />

      {children}

      <Footer />
    </main>
  );
}
