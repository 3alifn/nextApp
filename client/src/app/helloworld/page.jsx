
import HelloWorldApi from "@/components/Helloworld";
import axios from "axios";

export default async function Page() {
  try {
    // 🔹 Server-Side Data Fetching (SSR)
    const res = await axios.get("http://localhost:5000/api/helloworld");
    const initialData = res.data;

    return <HelloWorldApi initialData={initialData} />;
  } catch (error) {
     throw error.message;
  }
}
