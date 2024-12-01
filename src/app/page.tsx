'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import NavbarSidebar from "@/components/main/navbarsidebar";
import { useRouter } from "next/navigation";

type Box = {
  id: number;
  name: string;
  date: string;
};

const Home = () => {
  const [boxes, setBoxes] = useState<Box[]>([]);
  const router = useRouter();

  const handleAddBox = () => {
    const newBox: Box = {
      id: Date.now(),
      name: `Board ${boxes.length + 1}`,
      date: new Date().toLocaleDateString(),
    };
    setBoxes([...boxes, newBox]);
  };

  const handleBoxClick = (id: number) => {
    router.push(`/board/${id}`);
  };

  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      {/* Sidebar */}
      <NavbarSidebar />

      {/* Main Content */}
      <div className="p-4 flex flex-col sm:ml-96 ml-36 mt-20">
        <div className="flex items-center justify-start mb-4 mt-20 -ml-24 -mb-16">
          {/* Add Button */}
          <Button
            onClick={handleAddBox}
            className="flex bg-blue-500 text-white p-10 "
          >
            Add
          </Button>
        </div>

        {/* Render Boxes in a Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 gap-x-48 -mt-24 ml-12">
          {boxes.map((box) => (
            <div
              key={box.id}
              onClick={() => handleBoxClick(box.id)}
              className="cursor-pointer p-4 h-40 w-40 border rounded-lg shadow-lg bg-blue-100 hover:bg-gray-200 transition"
            >
              <h2 className="font-bold text-lg">{box.name}</h2>
              <p className="text-sm text-gray-600">{box.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
