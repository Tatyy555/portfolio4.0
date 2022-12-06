import React from "react";
import { motion } from "framer-motion";
import {
  HomeIcon,
  ClockIcon,
  BuildingLibraryIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useEffect } from "react";

function Navigation() {
  return (
    <header id="header">
      <nav
        className={`px-5 flex fixed top-0 left-0 justify-evenly w-full md:justify-end z-20 }`}
      >
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <ul className="flex text-2xl">
            <a href="#welcome-section">
              <li className="hover:duration-200 p-4 hover:bg-my-skyblue rounded-3xl flex items-center space-x-2">
                <HomeIcon className="h-7 w-7" />
                <p className="hidden md:inline-flex">Welcome</p>
              </li>
            </a>
            <a href="#project-section">
              <li className="hover:duration-200 p-4 hover:bg-my-skyblue rounded-3xl flex items-center space-x-2">
                <BuildingLibraryIcon className="h-7 w-7" />
                <p className="hidden md:inline-flex">Libraries</p>
              </li>
            </a>
            <a href="#timeline-section">
              <li className="hover:duration-200 p-4 hover:bg-my-skyblue rounded-3xl flex items-center space-x-2">
                <ClockIcon className="h-7 w-7" />
                <p className="hidden md:inline-flex">Timeline</p>
              </li>
            </a>

            <a href="#contact-section">
              <li className="hover:duration-200 p-4 hover:bg-my-skyblue rounded-3xl flex items-center space-x-2">
                <ChatBubbleLeftRightIcon className="h-7 w-7" />
                <p className="hidden md:inline-flex">Contact </p>
              </li>
            </a>
          </ul>
        </motion.div>
      </nav>
    </header>
  );
}

export default Navigation;
