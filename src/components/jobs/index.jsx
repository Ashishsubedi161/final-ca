
import { useEffect,useState } from "react";
import JobPost from "../JobPost";
export default function jobs({ priceFilter, jobFilter }){
    const url = import.meta.env.VITE_BACKEND

    const[jobs ,setJobs]= useState({})
    const [loading , setLoading]= useState(true)

    let post = {
        filters: {
            price: priceFilter ? priceFilter : null,
            category: jobFilter ? jobFilter : null
        }
    }

    useEffect(()=>{
        
        fetch(url+'job', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(post),
          
        })
          .then((response) => response.json())
          .then((data) => {
            if(data.success){
    
              setJobs(data)
              setLoading(false)
      
              
            } else {
              setJobs(false)
            }
          })
          .catch((error) => {
            setJobs(false)
          });
    
      },[priceFilter, jobFilter])
    
return(<div>
    {
        loading ?
        <p>loading...</p>
        :
        <div>{
            jobs.data.map(job=>{
                return <JobPost job = {job}/>
            })
            }</div>
    }
</div>)

}