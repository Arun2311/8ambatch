import { useState } from "react";
import { CounterContext } from "./countercontext";

const CounterProvider = ({children}) =>{

    const[count,setcount] = useState(10)


    const increment = () =>{
        setcount(count + 1)
    }


     const decrement = () =>{
        setcount(count - 1)
    }

    return(
        <CounterContext.Provider value={{count,increment,decrement}}>

            {children}

        </CounterContext.Provider>
       
    )
}

export default CounterProvider