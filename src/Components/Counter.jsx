import React, { useContext } from 'react'
import { CounterContext } from './context/countercontext'

export default function Counter() {

    const {count ,increment} = useContext(CounterContext)

  return (
    <div>
        <h1>Count  -{count}  </h1>

        <button  onClick={increment}>add</button>

        
      
    </div>
  )
}
