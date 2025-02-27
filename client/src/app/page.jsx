import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <Header />
      <center>
        <h1 className="bg-red-600 text-white p-4 text-xl">Hello, Next.js!</h1>
        <Link href="/demo" className="btn mt-3 p-0 mx-1 px-3 btn-primary">
          Demo Page
        </Link>  
        
         <Link href="/helloworld/" className="btn mt-3 mx-1 px-3 p-0  btn-info">
          Hello World
        </Link>

      </center>
      <Footer />
    </>
  );
}
