import axios from "axios";
import React, { useEffect, useState } from "react";

export default function GroceryList() {
  const [item, setitem] = useState("");
  const [list, setlist] = useState([]);

  const handleitem = (e) => {
    setitem(e.target.value);
  };

  useEffect(() => {
    handleget();
  }, []);

  const handleget = async () => {
    let data = await axios.get("http://localhost:3000/todoList");
    setlist(data.data);
    // console.log(data.data);
  };

  const handleadd = async () => {
    let body = {
      list: item,
    };

    let data = await axios.post("http://localhost:3000/todoList", body);

    handleget();
  };

  const handledelte = async (id) => {
    let data = await axios.delete("http://localhost:3000/todoList/" + id);
    handleget();
  };

  const handleedit = async (data) => {
    let editedata = prompt("edit ur data", data.list);

    let body = {
      id: data.id,
      list: editedata,
    };
    let apires = await axios.put(
      "http://localhost:3000/todoList/" + data.id,
      body
    );

    handleget();
  };

  return (
    <div>
      <h1>Grocery List</h1>
      <input onChange={handleitem} placeholder="Enter Your Grocery Item" />
      <button onClick={handleadd} className="ms-4 btn btn-primary">
        Submit
      </button>
      <br />
      <br />

      {list.map((da, i) => (
        <div>
          <h3>
            {i + 1}. {da.list}
          </h3>

          <button
            onClick={() => handleedit(da)}
            className="ms-4 btn btn-secondary"
          >
            Edit
          </button>

          <button
            onClick={() => handledelte(da.id)}
            className="ms-4 btn btn-danger"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
