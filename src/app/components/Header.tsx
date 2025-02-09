import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full top-0 left-0 bg-white shadow-md py-4 z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="flex items-center gap-x-3 text-xl text-gray-900">
            <Image 
                src='/logo-big.svg'
                width={28}
                height={28}
                alt="logo"
                />
            <h1 className="hidden sm:block font-semibold">STEMPS</h1>
        </div>
        <nav className="hidden md:flex flex-1 justify-start pl-[20%] gap-8">
          <Link href="#" className="text-gray-700 hover:text-gray-900 transition">
            О школе
          </Link>
          <Link href="#" className="text-gray-700 hover:text-gray-900 transition">
            Курсы
          </Link>
          <Link href="#" className="text-gray-700 hover:text-gray-900 transition">
            Библиотека
          </Link>
        </nav>
        <div className="hidden sm:flex items-center gap-x-3">
        <h2 className="text-gray-700">Вход</h2>
        <Image 
                src='/Exclude.svg'
                width={30}
                height={28}
                alt="Exclude"
                />
        </div>
        <button className="sm:hidden bg-black rounded-md px-2 py-1">Меню</button>
      </div>
    </header>
  );
}
