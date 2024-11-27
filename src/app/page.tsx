'use client';
import React, { useState } from "react";
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import LineChart from "@/components/main/charts/linechart";
import AreaChart from "@/components/main/charts/areachart";
import BarChart from "@/components/main/charts/barchart"; // Importing ShadCN card component
import Navbar from "@/components/main/navbaracounts"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Acme, Archivo_Black, Caveat, Bowlby_One } from 'next/font/google';
import { ChevronDown } from 'lucide-react';

const acme = Acme({ subsets: ['latin'], weight: ['400'] });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: ['400'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });
const bowlbyOne = Bowlby_One({ subsets: ['latin'], weight: ['400'] });

const Dashboard = () => {
  const [selectedChart, setSelectedChart] = useState<"line" | "area" | "bar">("line");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Navbar */}
      <Navbar/>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
      {/* <h2 className="flex justify-center text-center text-5xl font-bold text-blue-600 mb-4 mt-10"><span className={${caveat.className}}>Accounting ensures </span></h2>
      <h2 className="flex justify-center text-center text-5xl font-bold text-blue-600 mb-16 mt-2"><span className={${caveat.className} text-black}>financial clarity.</span></h2> */}
      
        {/* Welcome and Dropdowns */}
        <div className=" mb-20 mt-6">
          <h2 className="text-4xl font-bold text-blue-600 ml-14"><span className={`${caveat.className} text-black`}>Welcome to</span><span className={`${caveat.className}`}> Account<span className="text-black">X</span></span></h2>
          <div className="flex items-center gap-10 ml-10 mt-10">
            {/* All Accounts Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-blue-100 text-black hover:bg-blue-300">All Accounts<ChevronDown className="ml-2" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Account 1</DropdownMenuItem>
                <DropdownMenuItem>Account 2</DropdownMenuItem>
                <DropdownMenuItem>Account 3</DropdownMenuItem>
                <DropdownMenuItem>Account 4</DropdownMenuItem>
                <DropdownMenuItem>Account 5</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Calendar Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-black text-white hover:bg-neutral-700">Calendar<ChevronDown className="ml-2" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Calendar />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Metrics Section with ShadCN Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-8 pt-12">
          <Card className="bg-gradient-to-tr from-blue-300 to-emerald-50 text-white shadow-lg h-40">
            <CardHeader>
              <CardTitle className="text-3xl"><span className={`${caveat.className} text-black`}>Remaining</span></CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-gray-600">$4,500</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-tr from-blue-300 to-emerald-50 text-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl"><span className={`${caveat.className} text-black`}>Income</span></CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-gray-600">$8,000</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-tr from-blue-300 to-emerald-50 text-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl"><span className={`${caveat.className} text-black`}>Expenses</span></CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold text-gray-600">$3,500</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="flex text-center justify-center gap-6 mt-10">
          {/* Chart Dropdown and Selected Chart */}
          <div className="w-1/2"> {/* Increased width from 1/3 to 1/2 */}
            <h3 className="text-5xl font-bold text-blue-600 mb-14 mt-10"><span className={`${caveat.className}`}>Transaction</span></h3>
            {/* Charts Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-black text-white hover:bg-black">Charts<ChevronDown className="ml-2" /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedChart("line")}>
                  Line Chart
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedChart("area")}>
                  Area Chart
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedChart("bar")}>
                  Bar Chart
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Render Selected Chart */}
            <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="w-full h-72">
                {selectedChart === "line" && <LineChart />}
                {selectedChart === "area" && <AreaChart />}
                {selectedChart === "bar" && <BarChart />}
              </div>
            </div>
          </div>

          {/* Placeholder for Other Content (Optional) */}
          <div className="w-1/2"> {/* Adjust this width if necessary */}
            {/* Additional content can go here */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;