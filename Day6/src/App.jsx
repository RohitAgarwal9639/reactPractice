const ValidPassword=()=><h1>Valid Password</h1>
const InvalidPassword=()=><h1>InValid Password</h1>

const Password=({isValid})=>{
  if(isValid){
    return <ValidPassword/>
  }
  return <InvalidPassword/>
};

const Cart=()=>{
  const items=[
    "Wireless Earbuds",
    "Smartphone",
    "Laptop",
    "Smartwatch",
    "Bluetooth Speaker",
    "Tablet",
    "Smart TV",
    "Gaming Console",
    "Headphones",
  ]
  return(
    <div>
      <h1>Cart</h1>
      {
        items.length > 0 && <h2>You have {items.length} Items in your cart</h2>
      }

      <ul>
        <h4>Products</h4>
        {
          items.map(items=>(
            <li key={Math.random()}>{items}</li>
          ))
        }
      </ul>
    </div>
  )
}
const App=()=>{
  
  return (
    <main>
      <Password isValid={false}/>
      <Cart/>
    </main>
    
  )
}

export default App