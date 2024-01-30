"use client";

import { useState } from "react";

import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/Navbar";
import Upload from "@/components/Upload";

const page = () => {
  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);

  return (
    <main className="flex">
      <LeftSidebar isSidebarOpen = {isSidebarOpen} setIsSidebarOpen = { setIsSidebarOpen } />
      <div className="custom-scrollbar flex flex-col flex-1 h-screen overflow-auto bg-[#FAFAFB]">
        <Navbar setIsSidebarOpen = {setIsSidebarOpen} isSidebarOpen = {isSidebarOpen} />

        <Upload />
      </div>
    </main>
  );
};

export default page;
