import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Luffy from "../assets/luffy.jpg"

export default function FormTwo() {
  const { handleSubmit, register,watch ,formState: { errors }, } = useForm();


  const handleestore = (data) => {
    console.log("data", data);
    // api > body=  {data}
  };

  

  
  return (
    <div>
      <h1>Form 2 </h1>

      <form>
        <label>Name : </label>

        <input {...register("name" ,  { required: true, maxLength: 4 })} placeholder="Enter" />

        <br />
        <br />

        <label>Age : </label>

        <input {...register("age")} placeholder="Enter age" />

        <br />
        <br />

        <button className="btn btn-danger" onClick={handleSubmit(handleestore)}>Submit</button>
      </form>


      <div class="card" style={{width:"18rem"}}>
  <img src={Luffy} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">luffy </h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  );
}
