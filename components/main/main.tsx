"use client";

import React from 'react';
import { BackgroundLines } from '../ui/background-lines';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { BackgroundGradient } from '../ui/background-gradient';
import {
    Card,
    CardContent,
    CardDescription,
    
    CardHeader,
    
} from "@/components/ui/card";

import { signIn, useSession } from "next-auth/react";

const Main = () => {
    const {data:session, status} = useSession();
     const router = useRouter();


   
    return (
        <div>
            <BackgroundLines className='flex items-center justify-center w-full flex-col px-4'>
                <h1 className='text-3xl font-extrabold '>Transform Your Coding Experience with Real-Time Collaboration!</h1>
                <p className='text-2xl text-gray-600'>Join a community of innovators and developers, where you can code together, share ideas, and launch projects seamlessly.</p>
               
               {/*  add user auth logic */}
               {!session?.user ?<Button className="mt-9 relative z-10" onClick={() => signIn()}>
  Sign In
</Button> :<Button className="mt-9 relative z-10" onClick={() => router.push("/dashboard")}>
  Dashboard
</Button>}
               
            </BackgroundLines>
         

            <div className="w-full flex flex-col items-center">
                <h1 className="text-3xl underline font-bold mt-8">Features</h1>
                <Features />
            </div>

            <div className="">
             
            </div>
        </div>
    );
}






const Features = () => {
    const sections = [
        {
            f1: "Real-Time Collaboration",
            p: "Code with your team in real-time, whether they're across the room or across the globe. Share ideas instantly and solve problems together."
        },
        {
            f1: "Secure Sharing",
            p: "Start new projects solo or invite collaborators with just a link. Your workspace is secure, and your privacy is guaranteed."
        },
        {
            f1: "Integrated Tools",
            p: "Utilize built-in tools that enhance your workflow: from code snippets to instant messaging, everything you need is right at your fingertips."
        }
    ];

    return (
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">

            {
            sections.map((section, index) => (
<BackgroundGradient>
                <Card key={index} className="h-[200px] flex flex-col shadow-md rounded-lg overflow-hidden">
                    <CardHeader className=" text-white p-4">
                        <CardContent>
                            <h1 className="text-xl font-bold">{section.f1}</h1>
                        </CardContent>
                    </CardHeader>
                    <CardDescription className="ml-3 text-md text-gray-300 p-4">
                        {section.p}
                    </CardDescription>
                </Card>
                </BackgroundGradient>
            ))}
              
        </div>
       
    );
}




export default Main;
