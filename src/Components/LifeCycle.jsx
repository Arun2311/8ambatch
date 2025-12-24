import React, { useEffect, useState } from "react";

function LifeCycle() {
  const [apidata, setapidata] = useState([]);

  useEffect(() => {
    handleapi();
    console.log("arun");

    return () => {
      console.log("data clared");
    };
  }, []);

  const handleapi = async () => {
    let realdata = await fetch("https://fakestoreapi.com/products");
    let data = await realdata.json();
    setapidata(data);
  };

  const handleget = () => {
    console.log("arunnnnnnnnnnnnnnn");
  };

  return (
    <div>
      <h1>What is Lifecycle</h1>

      {apidata.map((da,i) => (
        <div key={i}>
          <h1>{da.title}</h1>
          <h3>{da.price}</h3>
        </div>
      ))}
    </div>
  );
}

export default LifeCycle;
