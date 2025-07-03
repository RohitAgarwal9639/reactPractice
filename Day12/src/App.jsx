import { createContext } from "react";
import ComponentA from "./Components/ComponentA";

export const Data = createContext();
export const Data1 = createContext();
const App=()=>{
  const name="Rohit";
  const age=22;
  return (
    <main>
      <Data.Provider value={name} >
      <Data1.Provider value={age}>
        <ComponentA />
      </Data1.Provider>
      </Data.Provider>
    </main>
    
  )
}

export default App