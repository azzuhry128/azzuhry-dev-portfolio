import Image from "next/image";

export default function Landing() {
  return (
    <main className="flex h-screen flex-col bg-custom-black-background">
      {/* <div className="container mx-auto flex justify-center">
        <div class="relative w-64 space-y-3 overflow-hidden bg-white p-9 shadow-[0px_0px_15px_rgba(0,0,0,0.09)]">
          <div class="absolute -right-5 -top-7 h-24 w-24 rounded-full bg-green-500">
            <p class="absolute bottom-6 left-7 text-2xl text-white">02</p>
          </div>
          <div class="w-12 fill-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
            >
              <path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"></path>
            </svg>
          </div>
          <h1 class="text-xl font-bold">UI / UX Creative Desing</h1>
          <p class="text-sm leading-6 text-zinc-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga
            adipisicing elit
          </p>
        </div>
      </div> */}
      {/* <div className="container mx-auto my-auto">
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="w-96 p-4 rounded bg-slate-900">
                    <h1 className="font-medium text-xl mb-1 text-gray-300">Personal Information</h1>
                    <div className=" rounded">
                        <h3 className="text-gray-300">im a third year student at Universitas Teknologi Yogyakarta, majoring in computer science, specializing in web and mobile development, currently learning dart and flutter</h3>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-96 p-4 rounded bg-slate-900">
                    <h1 className="font-medium text-xl mb-1 text-gray-300">commonly used languages</h1>
                    <div id="languages">
                        <div className="flex flex-row gap-2 p-2 items-center">
                            <Image src="/svg/icons8-javascript-yellow.svg" width={32} height={32} alt="javascript"/>
                            <h1 className="font-medium text-gray-300">Javascript</h1>
                        </div>

                        <div className="flex flex-row gap-2 p-2 items-center">
                            <Image src="/svg/icons8-dart.svg" width={32} height={32} alt="dart"/>
                            <h1 className="font-medium text-gray-300">Dart</h1>
                        </div>
                    </div>
                </div>

                <div className="w-96 p-4 rounded bg-slate-900">
                    <h1 className="font-medium text-xl mb-1 text-gray-300">Frameworks that i use in projects</h1>
                    <div id="languages">
                        <div className="flex flex-row gap-2 p-2 items-center">
                            <Image src="/svg/icons8-express-js-yellow.svg" width={32} height={32} alt="javascript"/>
                            <h1 className="font-medium text-gray-300">expressJS</h1>
                        </div>

                        <div className="flex flex-row gap-2 p-2 items-center">
                            <Image src="/svg/icons8-react.svg" width={32} height={32} alt="dart"/>
                            <h1 className="font-medium text-gray-300">ReactJS</h1>
                        </div>

                        <div className="flex flex-row gap-2 p-2 items-center">
                            <Image src="/svg/icons8-flutter.svg" width={32} height={32} alt="dart"/>
                            <h1 className="font-medium text-gray-300">Flutter</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </main>
  );
}
