import React, { useState } from "react";

function Count() {
  const [count, setcount] = useState(1);

  function handleadd() {
    setcount(count + 1);
  }

  return (
    <div>
      <h1>Count -{count} </h1>
      <button onClick={handleadd}>Add</button>
    </div>
  );
}

export default Count;
