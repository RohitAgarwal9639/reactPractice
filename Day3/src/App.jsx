import Greet from "./Components/Greet";
import ProductInfo from "./Components/ProductInfo";

const App=()=>{
  const name = 'Rohit';
  const multiply = (a, b) => a*b;
  return (
    <section>
      <p>2+2={2+2}</p>
      <h1>{name}</h1>
      <p>My Freinds List: {["Rohit","john","smith","ben"]}</p>
      <p>2*2 : {multiply(2,2)}</p>

      <Greet />
      <ProductInfo />
    </section>
    
  )
}

export default App