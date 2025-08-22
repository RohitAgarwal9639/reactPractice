import { useState, type ChangeEvent, type FormEvent } from "react"

interface ContactFormState{
    name:string;
    email:string;
}
const ContactForm = () => {
    const [formData,setFormData]=useState<ContactFormState>({
        name:'',
        email:'',
    })
    const handleChange=(event: ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=event.target;
        setFormData((prevState)=>({...prevState,[name]:value}))
    }
    const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(`Form submited ${formData}`);
    }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm
