import Card from "./Components/Card"
import Person from "./Components/Person"
import Product from "./Components/Product"

const App=()=>{
    return (
    <main>
      <Person name="Rohit" age={22} />
      <Product name="Iphone" price={20000} />
      <Card>
        <h1>Card Component</h1>
        <p>This is a card component.</p>
      </Card>
      <Card>
        <h1>Card Component1</h1>
        <p>This is a another card component.</p>
      </Card>
    </main>
    
  )
}
export default App