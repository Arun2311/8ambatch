import React, { useState } from "react";
import Count from "./Components/Count";
import Navbar from "./Components/Navbar";
import "./App.css";
import ChangeName from "./Components/ChangeName";
import ApiCall from "./Components/ApiCall";
import CardComp from "./Components/CardComp";
import LifeCycle from "./Components/LifeCycle";
import FormOne from "./Components/FormOne";
import FormTwo from "./Components/FormTwo";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Day1 from "./Components/Day1";
import Counter from "./Components/Counter";
import CounterProvider from "./Components/context/CounterProvider";
import Decrement from "./Components/Decrement";
import GroceryList from "./Components/GroceryList";

function App() {
  const [hide, sethide] = useState(true);

  const[name ,setname ] = useState("arun")
  const handlehide = () => {
    sethide(false);
  };

  const handleadd  = (a,b) =>{
    console.log(a+b ,"------------");
    
  }

  return (
    <CounterProvider>
      {/* <Navbar/>
      <h1>ARUN</h1>
      <h2>Ram</h2> */}

      {/* <Count /> */}

      {/* <ChangeName/> */}

      {/* <ApiCall/> */}

      {/* <CardComp/> */}

      {/* {hide ?  <LifeCycle/>  : <h1>closed</h1>} */}

      {/* <button onClick={handlehide}>Logout</button> */}
      {/* 
      <ApiCall />

      <FormOne />

      <FormTwo /> */}

      {/* <nav>
        <Link to="/">Home </Link>

        <Link to="/formone"> form 1 </Link>

        <Link to="/formtwo">form 2 </Link>
      </nav> */}

      {/* <h1>sdhsajda</h1>
      <Routes>
        <Route path="/" element={<ApiCall />} />

        <Route path="/formone" element={<FormOne />} />

        <Route path="/formtwo" element={<FormTwo />} />
      </Routes> */}

{/* <h1>Name  : {name}</h1> */}

<br/>
{/* <Day1 handleadd={handleadd} setname={setname} name={name}/> */}


{/* <Counter/>

<Decrement/> */}

<GroceryList/>

    </CounterProvider>
  );
}

export default App;
