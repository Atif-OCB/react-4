import { useState } from "react";

function App() {
  // const myArray = [1, 2, 3, 4];
  // myArray[3] = 5;
  // myArray = [1, 2, 3]; // Throw error

  // const myObj = {
  //   name: "atif",
  //   age: 21,
  // };
  // myObj.name = "zahin"
  // myObj = {
  //   name: "zahin",
  //   age: 25
  // } // Throw error

  // Hook
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter((previousState) => previousState + 1);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100vw"}}>
      Counter: {counter}
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default App
