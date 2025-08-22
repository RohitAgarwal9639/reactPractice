import { useRef, useState, type FormEvent } from "react"

type formData={
    name:string;
    email:string;
    password:string;
}

const Form = () => {
    const [submitData,setSubmitData]=useState<formData>({
        name:'',
        email:'',
        password:'',
    });

    const name=useRef<HTMLInputElement>(null);
    const email=useRef<HTMLInputElement>(null);
    const password=useRef<HTMLInputElement>(null);

    const handleSubmit=(event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const nameValue=name.current!.value;
        const emailValue=email.current!.value;
        const passwordValue=password.current!.value;
        setSubmitData({
            name:nameValue,
            email: emailValue,
            password : passwordValue,
        })
    }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter Your Name" ref={name}/>
      <input type="email" placeholder="Enter Your email" ref={email}/>
      <input type="password" placeholder="Enter Your password" ref={password}/>

      <button type="submit">Submit</button>

      <section > 
        <h1>Name: {submitData.name}</h1>
        <h1>Email: {submitData.email}</h1>
        <h1>Password: {submitData.password}</h1>
      </section>
    </form>
  )
}

export default Form
