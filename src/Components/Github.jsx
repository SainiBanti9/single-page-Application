import React from 'react'
// import { useEffect,useState } from 'react'
import {useLoaderData } from 'react-router-dom'
function Github() {

  let data= useLoaderData()
 
    //   const [data , setdata]=useState([])
    //   useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response) => response.json())
    //     .then((data)=>{
    //       console.log(data);
    //       setdata(data)
    //     })
    // },[])
  return (
    <div className='text-white text-2xl bg-gray-700  w-full m-1 p-1 flex'>
     <img className='mr-3' src={data.avatar_url} alt="" height={300} width={300}/>
     Github Followers :{data.followers}
   
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
  // let response = await fetch('https://api.github.com/users/hiteshchoudhary');
  let response = await fetch('https://api.github.com/users/SainiBanti9');
  return response.json()
}



// `https://api.github.com/users/${username}` ?