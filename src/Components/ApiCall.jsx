import React, { useState } from "react";
import CardComp from "./CardComp";

function ApiCall() {
  const [apidata, setapidata] = useState([]);

  const handleapi = async () => {
    let realdata = await fetch("https://fakestoreapi.com/products");
    let data = await realdata.json();
    setapidata(data);
  };

  return (
    <div>
      <h1>sa</h1>
      <button onClick={handleapi}> Add api</button>

      {apidata.map((da) => (
        <div>
          {/* <h1>{da.title}</h1>
          <h3>{da.price}</h3> */}

          <CardComp data={da}/>
        </div>
      ))}
    </div>
  );
}

export default ApiCall;
