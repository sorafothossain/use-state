import React from "react";
import { useState } from "react";

function State() {
const [value, setValue] = useState(0);

const add = () => {
  setValue (value + 1)
}


  return (
    <div>
      <p> Value Added: {value}</p>
      <button onClick={add}> Click Me </button>
    </div>
  )
}

export default State
