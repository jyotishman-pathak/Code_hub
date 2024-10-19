"use client"
import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import PlayerCards from './userOnline'
import { Projects } from './Projects'
import MultiDialog from './MultiDialog'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { nanoid } from 'nanoid';
const  Dashb = () => {
  const [cacheSessionId, setCacheSessionId] = useState(null);
  const [cacheUserId, setCacheUserId] = useState(null);
  useEffect(()=>{
    const fetchData = async()=>{
      try {
    const response = await    fetch("http://localhost:3003");
          if(!response.ok){
            throw new Error("network resp not ok");

          }
          const data = await response.json()
          
          const {cacheSessionId, cacheUserId} = data;

          setCacheSessionId(cacheSessionId);
          setCacheUserId(cacheUserId);
       
         
  }
    catch(error){
     console.log("errr fetching", error)
  }
    } 

   
  fetchData()
  },[])
 
const router= useRouter();

  const handlesolo = async ()=>{
   
    const baseUrl = "http://localhost:3000"

    //  store in redis the session id


    router.push(`${baseUrl}/playground/solo/${cacheUserId}`)
  }
  const handleGoMultiplayer = async () => {
   
    const baseUrl = "http://localhost:3000"

   const trueValue =  router.push(`${baseUrl}/playground/${cacheUserId}?sessionId=${cacheSessionId}`)
   console.log(trueValue)
  }

  return (
    <div className="">
      {/* Header Section */}
      <div className="flex justify-between">
        <h1 className='text-3xl font-extrabold p-3'>Dashboard</h1>
        <div className="flex gap-3 p-5 mr-9">
          <Button onClick={handlesolo}>GoSolo</Button>
      <Button onClick={handleGoMultiplayer}>MultiPlayer</Button>
     
          <MultiDialog/>
        </div>
      </div>

      {/* A Placeholder Card */}
      <div className="h-[40px]">
        <Card className='w-[540px] h-8 bg-gray-600'></Card>
      </div>

      {/* Cards Section */}
      <div className="md:flex gap-6 hidden mb-6">
        <Card className="h-[100px] w-[280px] "></Card>
        <Card className="h-[100px] w-[280px] "></Card>
        <Card className="h-[100px] w-[280px]"></Card>
        <Card className="h-[100px] w-[280px] "></Card>
      </div>

      {/* Main Section with Projects and Players */}
      <div className="flex">
        {/* Projects Card */}
        <div className="w-[80%]">
          <Card>
            <CardHeader>
              <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl font-semibold'>Welcome back</h1>
                <p className='text-sm text-gray-400'>List of all your projects...</p>
              </div>
            </CardHeader>
            <CardDescription>
              <Projects />
            </CardDescription>
          </Card>
        </div>

        {/* Players Online Card */}
        <div className="w-[20%]">
          <Card className='flex flex-col'>
            <PlayerCards />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashb;
