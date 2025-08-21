import AdminInfo from "./Components/AdminInfo";
import Button from "./Components/Button";
import Counter from "./Components/Counter";
import UserInfo from "./Components/UserInfo";

export default function App() {
  return (
    <div>
      <Button label="Click" onClick={()=>console.log("clicked")} disabled={false}/>
      <h1>User Info </h1>
      <UserInfo 
        username="Rohit"
        email="rohit@gmail.com"
        age={20}
        location={["Earth","India"]}
      />
      <h1>Admin Info </h1>
      <AdminInfo 
        username="Rohit"
        email="rohit@gmail.com"
        age={20}
        location={["Mars","unknown"]}
        admin="yes"
      />

      <Counter />
    
    </div>
  )
}
