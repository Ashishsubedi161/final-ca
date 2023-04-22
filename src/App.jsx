import { useState, useEffect } from 'react'
import './App.css'

import Navbar from './components/navbar'
import FreelanceJobs from './components/FreeLanceJobs'
import FreelanceJobsCategory from './components/FreeLanceJobsCategory'
import Job from './components/jobs'

import Cookies from "js-cookie";
import Guest from './components/Guest'

function App() {

  const url = import.meta.env.VITE_BACKEND

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [priceFilter, setPriceFilter] = useState()
  const [jobFilter, setJobFilter] = useState()

  useEffect(()=>{

    let post = {
        token: Cookies.get('token')
    }

    fetch(url+'user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.success){

          setIsLoggedIn(true)
          
        } else {
          setIsLoggedIn(false)
        }
      })
      .catch((error) => {
        console.error('Error LoginUp:', error);
        setIsLoggedIn(false)
      });

  },[])

  const onJobChange = (e) => {
    setJobFilter(e)
  }

  const onPriceChange = (e) => {
    setPriceFilter(e)
  }

  return(



 <div >

  <Navbar isLoggedIn={isLoggedIn}/>
 

    {
      isLoggedIn ?
      <div className='content'>
    
      <div className='sidebar'>
      <FreelanceJobs onJobChange={onPriceChange} />
      <FreelanceJobsCategory onCategoryChange={onJobChange} />
      </div>
  
      <div className='jobs'>
        Price: {priceFilter ? priceFilter : "All"},
        Job: {jobFilter ? jobFilter : "All"}
      <Job priceFilter={priceFilter} jobFilter={jobFilter} />
      </div>
    
  
      <div></div>
    </div>
    :
    <div className='content'>
      <Guest />
      </div>

    }
  

 </div>
 
 
 )
}

export default App
