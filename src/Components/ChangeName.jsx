import React, { useState } from "react";

function ChangeName() {
  const [name, setname] = useState("z");

  const handlechange = () => {
    if (name == "luffy") {
      setname("zoro");
    } else {
      setname("luffy");
    }
  };


  




  return (
    <div>
      Name : {name}
      <button onClick={handlechange}>Change</button>
    </div>
  );
}

export default ChangeName;
