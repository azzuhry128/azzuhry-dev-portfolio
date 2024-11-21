"use client";

import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Scrollbar,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import { AnimatePresence, motion } from "motion/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import BottomNavbarComponent from "./components/bottom-navbar-component";
import { useState } from "react";
import Image from "next/image";

const imagesData = [
  {
    id: 1,
    src: "/trashtalk.png",
    description:
      "Trashtalk is a fast, easy to use, free of charge web-based chat app. It has features commonly found in major chatting apps like WhatsApp and Telegram.",
  },
  {
    id: 2,
    src: "/material.png",
    description:
      "Material is a project management tool that helps teams stay organized and on track. It offers a variety of features to manage tasks and collaborate efficiently.",
  },
  {
    id: 3,
    src: "/homecare.png",
    description:
      "Homecare is a platform that connects caregivers with those in need of at-home care services. It aims to provide reliable and compassionate care.",
  },
];

const stackItemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Home() {
  const [isStackButtonOpen, setIsStackButtonOpen] = useState(false);

  return (
    <main className="flex flex-col bg-custom-black-background">
      {/* <HeaderComponent /> */}

      <section id="intro-section">
        <motion.div className="w-screen text-6xl font-bold text-white">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, height: "100%" }}
            transition={{ duration: 0.3 }}
            className="bg-red-400 p-4 text-8xl"
          >
            My name is azzuhry.
          </motion.h1>

          <motion.div className="p-4">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              I build
            </motion.h1>
            <motion.span
              initial={{ width: "30px", opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-justifyfont-bold my-4 block rounded-md bg-red-400 p-4 text-slate-200"
            >
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                Cross Platform Apps
              </motion.h1>
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-5xl"
            >
              with emphasis on
              <motion.span
                initial={{ width: "30px", opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="ml-3 rounded-md text-justify text-4xl font-bold text-red-400"
              >
                Performance
              </motion.span>
            </motion.h1>
          </motion.div>
        </motion.div>
      </section>

      <section id="stack-showcase">
        <motion.div
          initial={false}
          animate={isStackButtonOpen ? "open" : "closed"}
          className="p-4"
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsStackButtonOpen(!isStackButtonOpen)}
            className="flex h-max items-end rounded-md bg-violet-300 p-4"
          >
            <motion.h1 className="text-start text-8xl font-bold capitalize text-slate-950">
              My stack
            </motion.h1>

            <motion.div
              variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.5 }}
              className="mx-4 my-7 flex items-end justify-end"
            >
              <svg width="24" height="24" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16" />
              </svg>
            </motion.div>
          </motion.button>

          <motion.ul
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                height: "max-content",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                height: "0px",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            className="mt-4 overflow-hidden rounded-md bg-violet-300"
          >
            <motion.li
              variants={stackItemVariants}
              className="flex flex-auto items-center gap-2 rounded-md p-2"
            >
              <motion.img
                className="h-24 w-24 rounded-md p-2 text-3xl font-bold capitalize text-slate-950"
                src="/svg/icons8-express-js.svg"
              />

              <motion.h1 className="ml-8 flex-1 text-4xl font-bold">
                ExpressJS
              </motion.h1>
            </motion.li>

            <motion.li
              variants={stackItemVariants}
              className="flex flex-auto items-center gap-2 rounded-md p-2"
            >
              <motion.img
                className="h-24 w-24 rounded-md p-2 text-3xl font-bold capitalize text-slate-950"
                src="/svg/icons8-react.svg"
              />

              <motion.h1 className="ml-8 flex-1 text-4xl font-bold">
                ReactJS
              </motion.h1>
            </motion.li>

            <motion.li
              variants={stackItemVariants}
              className="flex flex-auto items-center gap-2 rounded-md p-2"
            >
              <motion.img
                className="h-24 w-24 rounded-md p-2 text-3xl font-bold capitalize text-slate-950"
                src="/svg/icons8-flutter.svg"
              />

              <motion.h1 className="ml-8 flex-1 text-4xl font-bold">
                Flutter
              </motion.h1>
            </motion.li>
          </motion.ul>
        </motion.div>
      </section>

      <section id="project-showcase">
        <motion.div className="p-4">
          <motion.h1 className="text-6xl font-bold text-slate-100">
            Project Showcase
          </motion.h1>
          <Swiper
            className="mt-2 h-full w-full"
            spaceBetween={10}
            slidesPerView={1}
          >
            {imagesData.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image.src}
                  alt="Slide image"
                  className="rounded-md"
                  width={600}
                  height={300}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>
      <BottomNavbarComponent />
    </main>
  );
}
