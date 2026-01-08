import React from 'react'

export default function Day1(props) {


  const handlechange = () => {
props.setname("ram")
props.handleadd(7,8)
  }
  return (
    <div>
      <h1>Props - {props.name}</h1>

      <button onClick={handlechange}>Change</button>
    </div>
  )
}
