import React, { useCallback, useMemo, useState ,useRef, useEffect } from "react";
import { useForm } from "react-hook-form";


export default function FormOne() {

  const inputref = useRef(null)
  const [name, setname] = useState("");

  const handlename = (e) => {
  setname(e.target.value);

  };


  useEffect(()=>{
inputref.current.focus()
  },[])


  return (
    <div>
      <h1>Form </h1>

      <form>
        <label>Name : </label>

        <input ref={inputref} onChange={handlename} placeholder="Entefdfdr" />

        <br />
        <br />

        <button>Submit</button>

        {/* <a/> */}

        {name}
      </form>
    </div>
  );
}
