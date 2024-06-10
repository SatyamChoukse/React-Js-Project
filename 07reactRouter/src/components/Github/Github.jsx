import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();

    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/SatyamChoukse')
    //     .then(res => res.json())
    //     .then( data =>{
    //         console.log(data);
    //         setData(data);
    //     })
        
    // },[])

  return (
    <div className='text-center bg-gray-600 text-white p-4 text-3xl'>Github Account : {data.login} 
     <div className='text-center bg-gray-600 text-white p-4 text-3xl'>Total Repostory : {data.public_repos} </div></div>
   
  )
}

export default Github

export const githubGetRequest = async() =>{
    const response = await fetch('https://api.github.com/users/SatyamChoukse')
    return response.json()
}