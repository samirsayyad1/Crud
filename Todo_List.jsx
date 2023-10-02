import React, { useState } from "react";

function Todo_List() {

  const [ inputValue, setInputValue ] = useState("");

  const [ arr, setArr ] = useState([]);

  const update = () => {
    setArr((prevArr) => [ ...prevArr, inputValue ]);
    setInputValue(""); // Clear the input field after saving
  };
  return (
    <>
      <input type="text" id="inp" className="inp" value={ inputValue } onChange={ (e) => setInputValue(e.target.value) } />

      <button onClick={ update }>Save</button>

      <ol>
        {
          arr.map((item) => {
            return (
              <>
                <li>{ item }</li>
              </>
            )
          })
        }
      </ol>
    </>
  )
}
export default Todo_List;

