import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function APIHandler() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/helloworld/") // ✅ Express API Request
      .then(async (res) => {
   
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">API Response</h1>
      <p>{data}</p>
    </div>
  );
}
