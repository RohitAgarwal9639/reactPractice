import useFetch from "./useFetch"

const App=()=>{
  const [data]=useFetch("https://jsonplaceholder.typicode.com/todos")
  return (
    <main>
      {data && data.map(item=>{
        return <p key={item.id}>{item.title}</p>
      })}
    </main>
    
  )
}

export default App