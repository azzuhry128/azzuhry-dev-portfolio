"use client";

import { Navigation, Pagination, EffectCoverflow, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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

const RecentProjectsGenerator = () => {
  return (
    <Swiper
      modules={[EffectCoverflow, Navigation, Pagination, Scrollbar]}
      effect="coverflow"
      navigation
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={2}
      initialSlide={2}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      slideToClickedSlide={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 80,
        depth: 350,
        modifier: 1,
        slideShadows: true,
      }}
    >
      {imagesData.map((image, index) => {
        return (
          <SwiperSlide key={image.id}>
            <div
              id="card-container"
              className="group relative flex rounded-md bg-custom-card-color drop-shadow-xl"
            >
              <div className="h-max w-max">
                <img src={image.src} className="rounded-md"></img>
              </div>
              <div className="absolute bottom-0 flex h-full w-full flex-col justify-end rounded-md bg-black/75 p-4 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:backdrop-blur-sm">
                <h1 className="mb-2 text-2xl font-semibold text-gray-300">
                  Trashtalk
                </h1>
                <p className="w-3/4 text-sm font-medium text-gray-300">
                  trashtalk is a fast, easy to use, free of charge web based
                  chat app. it has features that are commonly found in major
                  chatting app like WhatsApp and Telegram. or that is how it
                  should’ve become
                </p>
                <button className="mt-6 h-6 w-16 rounded bg-green-400 text-sm font-bold">
                  View
                </button>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col bg-custom-black-background">
      <section id="intro-section" className="mx-52 my-40 flex flex-1 flex-row">
        <div className="my-auto">
          <div className="flex gap-1">
            <h3 className="text-yellow-300">Hello</h3>
            <h3 className="text-gray-300">there! my name is</h3>
          </div>

          <div className="mt-3 flex text-5xl">
            <h1 className="text-gray-300">Rofif Azzuhry</h1>
          </div>

          <div className="mb-7 mt-7 flex gap-1">
            <h3 className="text-gray-300">i build web and mobile app using</h3>
            <h3 className="text-blue-300">flutter</h3>
            <h3 className="text-gray-300">and</h3>
            <h3 className="text-yellow-300">javascript</h3>
          </div>

          <div>
            <a href="/about">
              <button className="h-16 w-64 rounded bg-green-400 text-2xl font-medium text-custom-black-background duration-300 ease-in-out hover:bg-green-700">
                About Me
              </button>
            </a>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-end justify-evenly">
          <a href="https://www.instagram.com/rofif_azzuhry/">
            <Image
              className="rounded p-1 duration-300 ease-in-out hover:bg-custom-card-color"
              src="/svg/icons8-instagram.svg"
              alt="instagram"
              width={32}
              height={32}
            />
          </a>

          <a href="https://github.com/azzuhry128">
            <Image
              className="rounded p-1 duration-300 ease-in-out hover:bg-custom-card-color"
              src="/svg/icons8-github.svg"
              alt="instagram"
              width={32}
              height={32}
            />
          </a>

          <a href="www.linkedin.com/in/muhammad-azzuhry">
            <Image
              className="rounded p-1 duration-300 ease-in-out hover:bg-custom-card-color"
              src="/svg/icons8-linkedin.svg"
              alt="instagram"
              width={32}
              height={32}
            />
          </a>
        </div>
      </section>

      <section id="recent-projects">
        <div className="mx-52 flex flex-col">
          <h1 className="mx-auto mb-8 text-4xl text-gray-300">
            Recent Projects
          </h1>
          <div className="flex flex-row justify-between gap-4 overflow-y-clip overflow-x-scroll">
            {RecentProjectsGenerator()}
          </div>
        </div>
      </section>

      <section id="skills">
        <div id="skill-container" className="container mx-auto items-center">
          <div
            id="skill-text-container"
            className="flex flex-col items-center justify-center"
          >
            <h1 className="text-center text-5xl font-medium text-gray-300">
              Experienced in building application using popular frameworks
            </h1>
            <p className="text-md mt-8 text-left font-normal italic text-gray-300">
              A Developer is cursed to learn technology forever, for he is both
              the slave and its master
            </p>
          </div>
        </div>

        <div
          id="skill-images-container"
          className="container mx-auto mt-4 grid h-96 grid-cols-3 grid-rows-2 rounded-lg bg-slate-900"
        >
          <div className="row-span-2 flex items-center justify-center duration-500 ease-in-out hover:bg-slate-950">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/svg/icons8-javascript-yellow.svg"
                width={72}
                height={72}
                alt="javascript"
              />
              <h1 className="text-4xl text-gray-300">Javascript</h1>
            </div>
          </div>
          <div className="flex items-center justify-center duration-500 ease-in-out hover:bg-slate-950">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/svg/icons8-tailwindcss.svg"
                width={72}
                height={72}
                alt="tailwind"
              />
              <h1 className="text-4xl text-gray-300">TailwindCSS</h1>
            </div>
          </div>
          <div className="flex items-center justify-center duration-500 ease-in-out hover:bg-slate-950">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/svg/icons8-react.svg"
                width={72}
                height={72}
                alt="react"
              />
              <h1 className="text-4xl text-gray-300">ReactJS</h1>
            </div>
          </div>
          <div className="flex items-center justify-center duration-500 ease-in-out hover:bg-slate-950">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/svg/icons8-express-js-yellow.svg"
                width={72}
                height={72}
                alt="express"
              />
              <h1 className="text-4xl text-gray-300">ExpressJS</h1>
            </div>
          </div>
          <div className="flex items-center justify-center duration-500 ease-in-out hover:bg-slate-950">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/svg/icons8-flutter.svg"
                width={72}
                height={72}
                alt="flutter"
              />
              <h1 className="text-4xl text-gray-300">Flutter</h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
