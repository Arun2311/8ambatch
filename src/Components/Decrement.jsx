import React, { useContext } from 'react'
import { CounterContext } from './context/countercontext'

export default function Decrement() {

    const {decrement} = useContext(CounterContext)
  return (
    <div>

        <button onClick={decrement}>sub</button>
      
    </div>
  )
}
