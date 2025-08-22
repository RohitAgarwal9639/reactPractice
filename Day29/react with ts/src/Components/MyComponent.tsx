import { useEffect, useState } from "react"

type Product={
    id:number;
    title:string;
    description:string;
    price:number;
    discountPercentage:number;
    rating:number;
    stock:number;
    brand:string;
    category:string;
    thumbnail:string;
    images:string[];
}

const MyComponent = () => {
    const [data,setData]=useState<Product | null>(null);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await fetch('https://dummyjson.com/product/1');
                const result=await response.json(); 
                setData(result);
            }catch(err){
                console.log(err);
            }
        };

        fetchData();
    },[])
  return (
    <div>
      {data?(<div>
        <p>ID:{data.id}</p>
        <p>Title:{data.title}</p>
      </div>) : <p> Loading..... </p>}
    </div>
  )
}

export default MyComponent
