const { default: Image } = require("next/image");

const HeaderComponent = () => {
  return (
    <footer className="flex h-[10vh] flex-row items-center justify-center gap-2 bg-slate-950 p-4">
      <h1 className="text-xl text-gray-300">made with</h1>
      <div className="flex flex-row items-center justify-center gap-1">
        <h1 className="text-xl text-cyan-600">TailwindCSS</h1>
        <Image
          src="/svg/icons8-tailwindcss.svg"
          width={32}
          height={32}
          alt="tailwind"
        />
      </div>
    </footer>
  );
};

export default HeaderComponent;
