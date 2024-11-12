import Image from "next/image";

const imagesData = [
  {
    id: 1,
    src: "/trashtalk.png",
    description: "Trashtalk is a fast, easy to use, free of charge web-based chat app. It has features commonly found in major chatting apps like WhatsApp and Telegram."
  },
  {
    id: 2,
    src: "/material.png",
    description: "Material is a project management tool that helps teams stay organized and on track. It offers a variety of features to manage tasks and collaborate efficiently."
  },
  {
    id: 3,
    src: "/homecare.png",
    description: "Homecare is a platform that connects caregivers with those in need of at-home care services. It aims to provide reliable and compassionate care."
  }
];


const recentProjectsGenerator = () => {
  return imagesData.map((image) => (
    <div key={image.id} id="card-container" className="flex relative group rounded-lg bg-custom-card-color drop-shadow-xl">
      <div id="logo-container">
        <div className="w-[1000px] h-max">
          <img src={image.src} className="rounded-md"></img>
        </div>
      </div>
      <div className="absolute bottom-0 justify-end p-4 w-full h-full flex flex-col opacity-0 transition ease-in-out duration-300 group-hover:opacity-100 group-hover:backdrop-blur-sm bg-black/75">
        <h1 className="font-medium text-2xl mb-2 text-gray-300">Trashtalk</h1>
        <p className="text-gray-300 w-52 text-xs">trashtalk is a fast, easy to use, free of charge web based chat app. it has features that are commonly found in major chatting app like WhatsApp and Telegram. or that is how it should’ve become</p>
        <button className="rounded bg-green-400 w-16 h-6 mt-6 text-sm">View</button>
      </div>
    </div>
  ))
}

export default function Home() {

  return (
    <main className="flex flex-col bg-custom-black-background">

      <section id="intro-section" className="flex flex-1 flex-row my-40 mx-52">
        <div className="my-auto ">

          <div className="flex gap-1">
            <h3 className="text-yellow-300">Hello</h3>
            <h3 className="text-gray-300">there! my name is</h3>
          </div>

          <div className="flex mt-3 text-5xl">
            <h1 className="text-gray-300">Rofif Azzuhry</h1>
          </div>

          <div className="flex mt-7 mb-7 gap-1">
            <h3 className="text-gray-300">i build web and mobile app using</h3>
            <h3 className="text-blue-300">flutter</h3>
            <h3 className="text-gray-300">and</h3>
            <h3 className="text-yellow-300">javascript</h3>
          </div>

          <div>
            <a href="/about" >
              <button className="rounded w-64 h-16 bg-green-400 text-custom-black-background font-medium text-2xl hover:bg-green-700 duration-300 ease-in-out">About Me</button>
            </a>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-end justify-evenly">
            <a href="https://www.instagram.com/rofif_azzuhry/">
              <Image className="rounded p-1 hover:bg-custom-card-color  duration-300 ease-in-out" src="/svg/icons8-instagram.svg" alt="instagram" width={32} height={32}/>
            </a>

            <a href="https://github.com/azzuhry128">
              <Image className="rounded p-1 hover:bg-custom-card-color  duration-300 ease-in-out" src="/svg/icons8-github.svg" alt="instagram" width={32} height={32}/>
            </a>

            <a href="www.linkedin.com/in/muhammad-azzuhry">
              <Image className="rounded p-1 hover:bg-custom-card-color  duration-300 ease-in-out" src="/svg/icons8-linkedin.svg" alt="instagram" width={32} height={32}/>
            </a>
        </div>
      </section>

      <section id="recent-projects">
        <div className="flex flex-col mx-52">
          <h1 className="text-4xl text-gray-300 mb-8 mx-auto">Recent Projects</h1>
          <div className="flex flex-row justify-between gap-4 overflow-x-scroll overflow-y-clip">
            {recentProjectsGenerator()}
          </div>
        </div>
      </section>

      <section id="skills">
        <div id="skill-container" className="container mx-auto items-center ">
          <div id="skill-text-container" className="flex flex-col justify-center items-center">
            <h1 className="text-gray-300 text-5xl font-medium text-center">Experienced in building application using popular frameworks</h1>
            <p className="text-gray-300 mt-8 text-md font-normal italic text-left">A Developer is cursed to learn technology forever, for he is both the slave and its master</p>
          </div>
        </div>

        <div id="skill-images-container" className="container mx-auto rounded-lg grid grid-rows-2 grid-cols-3 mt-4 h-96 bg-slate-900">
          <div className="flex justify-center items-center row-span-2 hover:bg-slate-950 duration-500 ease-in-out">
            <div className="flex flex-col justify-center items-center">
              <Image src="/svg/icons8-javascript-yellow.svg" width={72} height={72} alt="javascript"/>
              <h1 className="text-4xl text-gray-300">Javascript</h1>
            </div>
          </div>
          <div className="flex justify-center items-center hover:bg-slate-950 duration-500 ease-in-out">
            <div className="flex flex-col justify-center items-center">
              <Image src="/svg/icons8-tailwindcss.svg" width={72} height={72} alt="tailwind"/>
              <h1 className="text-4xl text-gray-300">TailwindCSS</h1>
            </div>
          </div>
          <div className="flex justify-center items-center hover:bg-slate-950 duration-500 ease-in-out">
            <div className="flex flex-col justify-center items-center">
              <Image src="/svg/icons8-react.svg" width={72} height={72} alt="react"/>
              <h1 className="text-4xl text-gray-300">ReactJS</h1>
            </div>
          </div>
          <div className="flex justify-center items-center hover:bg-slate-950 duration-500 ease-in-out">
            <div className="flex flex-col justify-center items-center">
              <Image src="/svg/icons8-express-js-yellow.svg" width={72} height={72} alt="express"/>
              <h1 className="text-4xl text-gray-300">ExpressJS</h1>
            </div>
          </div>
          <div className="flex justify-center items-center hover:bg-slate-950 duration-500 ease-in-out">
            <div className="flex flex-col justify-center items-center">
              <Image src="/svg/icons8-flutter.svg" width={72} height={72} alt="flutter"/>
              <h1 className="text-4xl text-gray-300">Flutter</h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
