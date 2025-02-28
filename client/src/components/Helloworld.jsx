"use client"; 

import { useState, useEffect } from "react";
import axios from "axios";

const HelloWorldApi = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    if (refresh === 0) return;
    axios.get("/api/helloworld/")
      .then((res) => setData(res.data))
      .catch((error) => setData(error.message));
  }, [refresh]);

  return (
    <center className="mt-5 mb-3">
      <button className="btn bg-red-400 p-2" onClick={() => setRefresh((prev) => prev + 1)}>Refresh</button>
      <code className="p-3 m-3 bg-green-300 text-red-500">{data ? data : "Loading..."}</code>
    </center>
  );
};

export default HelloWorldApi;
