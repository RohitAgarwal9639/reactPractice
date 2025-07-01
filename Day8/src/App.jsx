import Counter from "./Components/Counter"
import Profile from "./Components/Profile"
import ShoppingList from "./Components/ShoppingList"
import TodoList from "./Components/TodoList"

const App=()=>{
  
  return (
    <main>
      <Counter/>
      <TodoList />
      <Profile />
      <ShoppingList />
    </main>
    
  )
}

export default App