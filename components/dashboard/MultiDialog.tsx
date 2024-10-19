"use client"
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Button } from '../ui/button';
import { Card } from '../ui/card';

import { Input } from '../ui/input';


const MultiDialog = () => {
  const players = [
    {
      name: "Olivia Martin",
      email: "Olivia.martin@gmail.com",
      hoursPlayed: "7000+ hours",
      initials: "OM",
    },
    {
      name: "Ram Pandey",
      email: "Ram.pandey@gmail.com",
      hoursPlayed: "900+ hours",
      initials: "RP",
    },
    {
      name: "Aman Verma",
      email: "Aman.verma@gmail.com",
      hoursPlayed: "1500+ hours",
      initials: "AV",
    },
    {
      name: "Rohit Sharma",
      email: "Rohit.sharma@gmail.com",
      hoursPlayed: "2500+ hours",
      initials: "RS",
    },
  ];

  return (
    <Dialog>
      <DialogTrigger><Button className='bg-blue-400'>Multiplayer</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share this Project!</DialogTitle>
<div className="flex gap-1">
          <Input  /> <Button>Copy Link</Button>
          </div>
          <DialogDescription>
            {/* Render Player Cards inside the Dialog */}
            {players.map((player, index) => (
              <Card key={index} className='w-full h-[50px] my-2'>
                <div className="h-[39px] flex items-center justify-between p-2 rounded-lg">
                  <div className="flex items-center">
                    <Avatar className="w-[36px] h-[36px]">
                      <AvatarFallback>{player.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col ml-3 text-white">
                      <h2 className="font-medium">{player.name}</h2>
                      <p className="text-sm text-gray-200">{player.email}</p>
                    </div>
                  </div>
                  <div className="text-white"><ComboBox /></div>
                </div>
               
              </Card>
              
            ))}
            <div className="flex justify-end mt-4">  <Button >Proceed</Button></div>
           
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
const ComboBox = () => {
    const [value, setValue] = React.useState("");  // Default state for the dropdown
  
    const accessOptions = [
      { value: "can_edit", label: "Can edit" },
      { value: "can_view", label: "Can view" },
      { value: "owner", label: "Owner" },
    ];
  
    // Log to ensure state is properly updated
    console.log('Selected value:', value);
  
    return (
      <div className="w-[200px]">
       
        <select
          id="access-select"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={value}  // Bind the state to the dropdown
          onChange={(e) => setValue(e.target.value)}  // Update state when an option is selected
        >
         
          {accessOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default MultiDialog