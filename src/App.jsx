import { useState } from "react";
import Input from "./components/Input";

function App() {
  // Manage stadium name
  const [stadiumName, setStadiumName] = useState("");

  // Manage stadium state
  const [stadiumState, setStadiumState] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100vw"}}>
      <form>
        <Input value={stadiumName} setValue={setStadiumName} />
        <Input value={stadiumState} setValue={setStadiumState} />

        {
          stadiumName === "Stadium Shah Alam" && <p>DAH RUNTUH!</p>
        }
      </form>
    </div>
  )
}

export default App
