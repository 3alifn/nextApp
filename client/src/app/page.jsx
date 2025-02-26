import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Header />
      <center>
        <h1 className="bg-red-600 text-white p-4 text-xl">Hello, Next.js!</h1>
        <Link href="/demo" className="btn py-0  btn-primary">
          Demo Page
        </Link>  
        
         <Link href="/api/helloworld/" className="btn py-0  btn-info">
          Hello World
        </Link>
      </center>
      <Footer />
    </>
  );
}
