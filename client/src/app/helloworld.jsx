"use client";
import axios from "axios";
import { useState, useEffect } from "react";

const HelloWorldApi= ()=>{
const [data, setData]= useState(null);

useEffect(()=>{
  axios.get('/api/helloworld')
  .then((res) => {

    if (res.data && typeof res.data === "object") {
      setData(JSON.stringify(res.data)); 
    } else {
      setData(res.data);
    }
  })
  .catch((error)=>{
    console.log(error.message);
    return setData(error.message);
  })
},[])


return (
  <center className="mt-5 mb-3">
    <code className="p-3 m-3 bg-green-300 text-red-500">{data?data:"Loading..."}</code>
  </center>
)

}

export default HelloWorldApi;