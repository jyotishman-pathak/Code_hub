"use client";

import React from 'react';
import { Input } from '../ui/input';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import Link from 'next/link';
import { Separator } from '../ui/separator';
import { ModeToggle } from '../layouts/modeToggle';


const Nav = () => {
  const { data: session, status } = useSession();

  const userImage = "https://lh3.googleusercontent.com/a/ACg8ocIv69-BBK5qqAUaN8oNHDjZUPSr2TOhHdohAiSKCgOwhjGeN3s=s96-c";
  
  const nav = [
    { name: "Overview", href: "/overview" },
    { name: "Customer", href: "/Customer" },
    { name: "Settings", href: "/Settings" }
  ];

  return (
    <div className="border rounded-t-2xl border-gray-300  shadow-md">
      <div className="flex flex-1 items-center justify-between w-full h-[70px] p-4">
        <div>
          {session?.user?.name}
        </div>
        <div className="hidden md:flex gap-4">
          {nav.map((items) => (
            <Link className='hover:text-gray-700' href={items.href} key={items.href}>
              {items.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <Input placeholder='Search....' />
          <Avatar>
            {!session?.user?.image ? (
              <AvatarFallback>{session?.user?.name?.[0]}</AvatarFallback>
            ) : (
              <AvatarImage src={session?.user?.image || userImage} alt='User Avatar' />
            )}
          </Avatar>

          <ModeToggle/>
        </div>
      </div>
   
    </div>
  );
};

export default Nav;
