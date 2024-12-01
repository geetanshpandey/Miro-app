'use client';

import React, { useState } from 'react';
import { Box, Edit, Trash, Link as Lii } from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    const url = document.getElementById('website-url') as HTMLInputElement;
    if (url) {
      try {
        await navigator.clipboard.writeText(url.value);
        setIsCopied(true);

        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
  };


  return (
    <nav className="bg-white border-gray-100 border-b-[1px] dark:bg-gray-900 dark:border-gray-700 h-16 mb-2 relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Box size={40} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MI<span className="text-blue-600">RO</span>
          </span>
        </Link>
        <div className="flex items-center space-x-3">
          {/* Popover for Editor */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline"><Edit size={16} className="mr-2" />Edit</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Edit</h4>
                  <p className="text-sm text-muted-foreground">
                    Customize according to you
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Size</Label>
                    <Input
                      id="width"
                      defaultValue="100%"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxWidth">Max. Size</Label>
                    <Input
                      id="maxWidth"
                      defaultValue="300px"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <Button className='bg-blue-600'>Save</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          {/* Popover for Delete */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline"><Trash size={16} className='-mt-1'/>Delete</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2 text-center">
                  <h4 className="font-bold leading-none text-black text-xl ">Delete</h4>
                  <p className="text-sm text-muted-foreground">
                    Are you sure you want to delete this?
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className='flex justify-between'>
                  <Button className='bg-gray-100 px-4 ml-4 text-black hover:bg-gray-300'><Trash size={16} className='-mt-1'/>Delete</Button>
                  <Button className='bg-gray-100 text-black px-6 mr-4 hover:bg-gray-300'>Cancel</Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Popover for Copy Link */}
          <Popover>
            <PopoverTrigger asChild>
            <Button variant="outline"><Lii size={16} className='-mt-1'/>Copy Link</Button>
            </PopoverTrigger>
            <PopoverContent className="bg-white dark:bg-gray-700 shadow-lg rounded-md p-2 bg-gray-100">
              <div className="w-full max-w-sm">
                <div className="mb-2 flex justify-between items-center">
                  <label htmlFor="website-url" className="text-sm font-medium text-gray-900 dark:text-white">
                    Copy URL
                  </label>
                </div>
                <div className="flex items-center">
                  <span className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg dark:bg-gray-600 dark:text-white dark:border-gray-600">
                    URL
                  </span>
                  <div className="relative w-full">
                    <input
                      id="website-url"
                      type="text"
                      aria-describedby="helper-text-explanation"
                      className="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value="https://google.com"
                      readOnly
                      disabled
                    />
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-e-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-blue-700 dark:border-blue-600 hover:border-blue-800 dark:hover:border-blue-700"
                    type="button"
                  >
                    <span id="default-icon">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                      </svg>
                    </span>
                    <span id="success-icon" className={`${isCopied ? 'inline-flex' : 'hidden'} items-center`}>
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`absolute z-10 ${isCopied ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700`}
                    role="tooltip"
                  >
                    <span>{isCopied ? 'Copied!' : 'Copy link'}</span>
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
                <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Copy link from above
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isDropdownOpen ? 'true' : 'false'}
          onClick={handleDropdownToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isDropdownOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
        </div>

        {/* Live Button and Circles */}
        <div className="absolute right-1 transform -translate-y-1/2 flex flex-col items-center space-y-2 -mr-1 -mb-14">
          <button className="bg-gray-800 text-white px-4 py-2 hover:bg-green-600 w-24 h-20 pt-4">
            Live
            <div className="flex justify-center items-center space-x-2 mt-2">
              <div className="w-5 h-5 bg-red-500 rounded-full"></div>
              <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
