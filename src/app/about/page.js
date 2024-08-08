import Image from "next/image";

export default function Landing() {
    return (
    <main className="flex flex-col bg-custom-black-background h-screen">
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

        <div className="container mx-auto my-auto">
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
        </div>
    </main>
    )
}