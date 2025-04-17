import { useState, useEffect } from "react";
import Input from "./components/Input";

function App() {
  // Manage stadium name
  const [stadiumName, setStadiumName] = useState("");
  const states = ["Selangor", "Kedah", "Penang", "Perak", "Negeri Sembilan", "Johor", "Melaka", "Pahang", "Terengganu", "Kelantan", "Sabah", "Sarawak"];

  const statesInfo = [
    { id: "1", name: "Selangor", color: "red" },
    { id: "2", name: "Kedah", color: "green" },
    { id: "3", name: "Penang", color: "blue" },
    { id: "4", name: "Perak", color: "yellow" },
    { id: "5", name: "Negeri Sembilan", color: "purple" },
    { id: "6", name: "Johor", color: "orange" },
    { id: "7", name: "Melaka", color: "pink" },
    { id: "8", name: "Pahang", color: "brown" },
    { id: "9", name: "Terengganu", color: "cyan" },
    { id: "10", name: "Kelantan", color: "magenta" },
    { id: "11", name: "Sabah", color: "lime" },
    { id: "12", name: "Sarawak", color: "teal" }
  ];

  // useEffect(callback, dependencies)
  useEffect(() => {
    console.log("name mount");

    return () => {
      console.log("name unmount");
    }
  }, [stadiumName]);


  // Manage stadium state
  const [stadiumState, setStadiumState] = useState("");

  useEffect(() => {
    console.log("state mount");

    return () => {
      console.log("state unmount");
    }
  }, [stadiumState]);

  useEffect(() => {
    console.log("one-time only mount");

    return () => {
      console.log("one-time only unmount");
    }
  }, []);

  // useEffect(() => {
  //   console.log("ALL STATE mount");

  //   return () => {
  //     console.log("ALL STATE unmount");
  //   }
  // });

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100vw"}}>
      <form>
        <Input value={stadiumName} setValue={setStadiumName} />
        <Input value={stadiumState} setValue={setStadiumState} />

        {
          states.map((state) => {
            return (<p key={state} style={{ color: "blue" }}>{state}</p>);
          })
        }

        {
          statesInfo.map((state) => {
            return (<p key={state.id} style={{ color: state.color }}>{state.name}</p>);
          })
        }

        {
          stadiumName === "Stadium Shah Alam" && <p>DAH RUNTUH!</p>
        }
      </form>
    </div>
  )
}

export default App
