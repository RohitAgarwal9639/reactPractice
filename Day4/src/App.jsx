
const App=()=>{
  const numbers=[1,2,3,4,5]
  const userInfo=[
    {
      name:"Rohit",
      email:"ro@gmail.com",
      location:"India",
    },
    {
      name:"Sanyam",
      email:"sa@gmail.com",
      location:"USA",
    },
    {
      name:"Himanshu",
      email:"hi@gmail.com",
      location:"Canada",
    },

  ]
  return (
    <main>
      {/* {numbers.map(number=>(
        <ul key={number}>
          <li>{number}</li>
        </ul>
      ))} */}
      {
        userInfo.map(user=>(
          <ul key={Math.random()}>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.location}</li>
          </ul>
        ))
      }
    </main>
    
  )
}

export default App