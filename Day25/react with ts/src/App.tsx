import User from "./Components/User";
import User1 from "./Components/User1";


export default function App() {
  return (
    <div>
      <User  name="Rohit" age={20} isStudent={true}/>
      <User1>
        <p>Hy paragraph</p>
      </User1>
    </div>
  )
}
