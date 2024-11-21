"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

const menuItems = [
  {
    title: "resume",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6 fill-green-700"
      >
        <path
          fillRule="evenodd"
          d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
          clipRule="evenodd"
        />
        <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
      </svg>
    ),
  },
  {
    title: "project showcase",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6 fill-green-700"
      >
        <path
          fillRule="evenodd"
          d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },

  {
    title: "send me an email",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6 fill-green-700"
      >
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
      </svg>
    ),
  },
];

const BottomNavbarComponent = () => {
  const [isOpen, setIsOpen] = useState();

  const NavigationItem = ({ title, icon, index, isOpen }) => (
    <motion.li
      key={index}
      className="flex gap-2"
      initial={{ display: "none" }}
      animate={isOpen ? "open" : "close"}
      variants={{
        open: {
          display: "flex",
          opacity: 1,
          y: 0,
          transition: {},
        },
        closed: { opacity: 0, y: -20, transition: { duration: 0.3 } },
      }}
    >
      <span>{icon}</span>
      <a className="font-medium text-white">{title}</a>
    </motion.li>
  );

  return (
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: {
          height: "max-content",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        },
        closed: {
          transition: {
            type: "tween",
            bounce: 0,
            duration: 0.3,
          },
        },
      }}
      className="sticky bottom-0 z-10 max-h-max bg-black/75 backdrop-blur-md"
    >
      <motion.ul
        initial={{ height: 0, opacity: 0 }}
        variants={{
          open: {
            transition: {
              type: "tween",
              bounce: 0,
              duration: 0.3,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
            height: "max-content",
          },
          closed: {
            transition: {
              type: "tween",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        className="flex flex-col items-start justify-end"
      >
        <motion.li
          variants={{
            open: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 300, damping: 24 },
            },
            closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
          }}
          className="flex items-center justify-center gap-2 p-6"
        >
          <motion.div>{menuItems[0].icon}</motion.div>
          <motion.a className="text-center font-semibold text-white">
            {menuItems[0].title}
          </motion.a>
        </motion.li>

        <motion.li
          variants={{
            open: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 300, damping: 24 },
            },
            closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
          }}
          className="flex items-center justify-center gap-2 p-6"
        >
          <motion.div>{menuItems[1].icon}</motion.div>
          <motion.a className="text-center font-semibold text-white">
            {menuItems[1].title}
          </motion.a>
        </motion.li>

        <motion.li
          variants={{
            open: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 300, damping: 24 },
            },
            closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
          }}
          className="flex items-center justify-center gap-2 p-6"
        >
          <motion.div>{menuItems[2].icon}</motion.div>
          <motion.a className="text-center font-semibold text-white">
            {menuItems[2].title}
          </motion.a>
        </motion.li>
      </motion.ul>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-screen flex-col items-end justify-center p-6"
      >
        <motion.div
          variants={{ open: { rotate: 45, y: 10 }, closed: { rotate: 0 } }}
          animate={isOpen ? "open" : "close"}
          transition={{ duration: 0.3 }}
          style={{ originY: 0.5 }}
        >
          <svg
            width="25"
            height="10"
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-500"
          >
            <path d="M0 5 H100" stroke="currentColor" strokeWidth="3" />
          </svg>
        </motion.div>

        <motion.div
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            width="25"
            height="10"
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-500"
          >
            <path d="M0 5 H100" stroke="currentColor" strokeWidth="3" />
          </svg>
        </motion.div>

        <motion.div
          variants={{ open: { rotate: -45, y: -10 }, closed: { rotate: 0 } }}
          animate={isOpen ? "open" : "close"}
          transition={{ duration: 0.3 }}
          style={{ originY: 0.5 }}
        >
          <svg
            width="25"
            height="10"
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-500"
          >
            <path d="M0 5 H100" stroke="currentColor" strokeWidth="3" />
          </svg>
        </motion.div>
      </motion.button>
    </motion.nav>
  );
};

export default BottomNavbarComponent;
