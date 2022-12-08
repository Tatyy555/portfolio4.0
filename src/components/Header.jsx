import React from "react";
import { motion } from "framer-motion";
import { HomeIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { BsPersonFill } from "react-icons/bs";

function Header() {
  return (
    <header id="header">
      <nav
        className={`font-Montserrat px-5 flex fixed top-0 left-0 justify-evenly w-full md:justify-end z-20 }`}
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
            <a href="#hero-section">
              <li className="hover:duration-200 p-4 hover:bg-my-skyblue rounded-3xl flex items-center space-x-2">
                <HomeIcon className="h-7 w-7" />
                <p className="hidden md:inline-flex">Welcome</p>
              </li>
            </a>
            <a href="#about-section">
              <li className="hover:duration-200 p-4 hover:bg-my-skyblue rounded-3xl flex items-center space-x-2">
                <BsPersonFill className="h-7 w-7" />
                <p className="hidden md:inline-flex">About</p>
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

export default Header;
