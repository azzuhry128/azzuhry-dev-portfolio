import Image from "next/image";

const slides = [
  "/trashtalk.png",
  "/material.png", 
  "/homecare.png"
]

export default function Home() {
  return (
    <main className="flex flex-col bg-custom-black-background">
      <nav className="p-4">
        <div className="flex">
          <div className="flex flex-1 w-32 ml-4">
            <a href="/" className="text-yellow-300 text-2xl">Azzuhry</a>
            <a href="/" className="text-gray-300 text-2xl">.github.io</a>
          </div>

          <div className="flex flex-1 justify-center gap-14">
            <a href="/about" className="font-medium text-gray-300 rounded p-2 hover:bg-green-400 hover:text-black duration-300 ease-in-out">About</a>
            <a href="#" className="font-medium text-gray-300 rounded p-2 hover:bg-green-400 hover:text-black duration-300 ease-in-out">Projects</a>
            <a href="#" className="font-medium text-gray-300 rounded p-2 hover:bg-green-400 hover:text-black duration-300 ease-in-out">Services</a>
          </div>

          <div className="flex-1">
          </div>
        </div>
      </nav>

      <section id="website-content" className="h-screen">
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
            <h1 className="text-4xl text-gray-300 mb-8">Recent Projects</h1>
            <div className="flex flex-row justify-between gap-12 overflow-x-auto">

              <div id="card-container" className="flex p-2 m-2 rounded-lg bg-custom-card-color drop-shadow-xl">
                <div id="logo-container">
                  <div className="w-72">
                    <img src="/trashtalk.png" className="rounded-md"></img>
                  </div>
                </div>
                <div className="flex flex-col justify-between ml-4">
                  <h1 className="font-medium text-2xl mb-2 text-gray-300">Trashtalk</h1>
                  <p className="text-gray-300 w-52 text-xs">trashtalk is a fast, easy to use, free of charge web based chat app. it has features that are commonly found in major chatting app like WhatsApp and Telegram. or that is how it should’ve become</p>
                  <button className="rounded bg-green-400 w-16 h-6 mt-6 text-sm">View</button>
                </div>
              </div>

              <div id="card-container" className="flex p-2 m-2 rounded-lg bg-custom-card-color drop-shadow-xl">
                <div id="logo-container">
                  <div className="w-72">
                    <img src="/material.png" className="rounded-md"></img>
                  </div>
                </div>
                <div className="flex flex-col justify-between ml-4">
                  <h1 className="font-medium text-2xl mb-2 text-gray-300">RAB desktop app</h1>
                  <p className="text-gray-300 w-52 text-xs">Desktop class app plan, predict, and calculate estimated cost of construction project. Currently in development </p>
                  <button className="rounded bg-green-400 w-16 h-6 mt-6 text-sm">View</button>
                </div>
              </div>

              <div id="card-container" className="flex p-2 m-2 rounded-lg bg-custom-card-color drop-shadow-xl">
                <div id="logo-container">
                  <div className="w-72">
                    <img src="/homecare.png" className="rounded-md"></img>
                  </div>
                </div>
                <div className="flex flex-col justify-between ml-4">
                  <h1 className="font-medium text-2xl mb-2 text-gray-300">Home Care</h1>
                  <p className="text-gray-300 w-52 text-xs">A system comprised of 2 android app for doctors and patients, and a web app for hospital admins. Aimed to deliver best in class medical care to patients</p>
                  <button className="rounded bg-green-400 w-16 h-6 mt-6 text-sm">View</button>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </section>

      <section id="skills">
        <div id="skill-container" className="container mx-auto items-center ">
          <div id="skill-text-container" className="flex flex-col justify-center items-center">
            <h1 className="text-gray-300 text-5xl font-medium text-center">Experienced in building application using popular frameworks</h1>
            <p className="text-gray-300 mt-8 text-md font-normal italic text-left">"A Developer is cursed to learn technology forever, for he is both the slave and its master"</p>
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

      <footer className="flex flex-row justify-center items-center gap-2 h-24 mt-24 bg-slate-950">
        <h1 className="text-gray-300 text-xl">made with</h1>
        <div className="flex flex-row gap-1 justify-center items-center">
          <h1 className="text-cyan-600 text-xl">TailwindCSS</h1>
          <Image src="/svg/icons8-tailwindcss.svg" width={32} height={32} alt="tailwind"/>
        </div>
      </footer>
    </main>
  );
}
