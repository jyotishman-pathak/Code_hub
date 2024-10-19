"use client";
import { Card } from '@/components/ui/card';
import React, { useState } from 'react';
import Editor from "@monaco-editor/react";
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/layouts/modeToggle';

const Solo = () => {
    const [code, setCode] = useState("// Write your code here");

    const handleCodeChange = (newCode: string | undefined) => {
        if (newCode) {
            setCode(newCode);
        }
    };

    return (
        <Card className="flex flex-col h-screen">
            {/* Header section */}
            <Card className="flex justify-between items-center p-4 border-b-2">
                <h1 className="text-xl">Playground (Solo)</h1>
                <div className="flex gap-3">
                    <Button>b1</Button>
                    <Button>b1</Button>
                    <Button>b1</Button>
                    <Button>b1</Button>
                    <ModeToggle />
                </div>
            </Card>

            {/* Main content section */}
            <Card className="flex flex-grow m-5 gap-3">
                {/* File structure section */}
                <div className="flex flex-col w-1/4 max-w-xs">
                    <Card className='mt-3 w-full h-auto p-4'>
                        <h2 className="font-bold">File Structure</h2>
                        <div className="mt-2">
                            <ul>
                                <li>src/
                                    <ul>
                                        <li>components/
                                            <ul>
                                                <li>ui/</li>
                                                <li>layouts/</li>
                                            </ul>
                                        </li>
                                        <li>pages/</li>
                                        <li>App.js</li>
                                        <li>index.js</li>
                                    </ul>
                                </li>
                                <li>public/
                                    <ul>
                                        <li>index.html</li>
                                    </ul>
                                </li>
                                <li>package.json</li>
                            </ul>
                        </div>
                    </Card>
                </div>

                {/* Code editor section */}
                <Card className="bg-pink-50 flex-grow">
                    <Editor
                        height="100%"
                        language="javascript"
                        value={code}
                        theme="vs-dark"
                        onChange={handleCodeChange}
                    />
                </Card>

                {/* Video section */}
                <div className="flex flex-col w-full max-w-xs">
                    <Card className='mt-3 w-full h-[200px]'>Video of friend</Card>
                    <Card className='mt-3 w-full h-[200px]'>Video of own</Card>
                </div>
            </Card>
        </Card>
    );
};

export default Solo;
