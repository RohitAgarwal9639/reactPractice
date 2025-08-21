


// below is one way to destructure a prop

// const User = (props:{name:string;age:number;isStudent:boolean}) => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//     </div>
//   )
// }

//below is second way to destructure a prop

// type UserShape={
//     name:string;
//     age:number;
//     isStudent:boolean
// }

// const User = ({name,age,isStudent}:UserShape) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//     </div>
//   )
// }



//below is third way to destructure a prop

interface UserShape{
    name:string;
    age:number;
    isStudent:boolean
}

const User = ({name}:UserShape) => {
  return (
    <div>
      <h2>{name}</h2>
    </div>
  )
}
export default User
