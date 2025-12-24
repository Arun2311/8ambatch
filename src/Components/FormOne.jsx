import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function FormOne() {
  const [name, setname] = useState("");

  const handlename = (e) => {
    console.log(e.target.value);

    setname(e.target.value)
  };


  return (
    <div>
      <h1>Form </h1>

      <form>
        <label>Name : </label>

        <input onChange={handlename} placeholder="Enter" />

        <br />
        <br />



        <button>Submit</button>


        {/* <a/> */}


                {name}

      </form>
    </div>
  );
}
