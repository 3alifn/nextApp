
import HelloWorldApi from "@/components/Helloworld";
import axios from "axios";
// import { redirect } from "next/navigation";

// export const revalidate = 10;
export const dynamic = "force-dynamic"; 
// export const dynamic = 'force-static'
// export const dynamicParams = true
export default async function Page() {
  try {
    const res = await axios.get("http://localhost:5000/api/helloworld/");
    const initialData = res.data;

    return <HelloWorldApi initialData={initialData} />;
  } catch (error) {
    console.error(" Error:", error);

    throw new Error("Failed to fetch data from API.");
  }
}


