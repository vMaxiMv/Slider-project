import Slider from "./components/Slider";

export default function Home() {
  return (
    <div className="container mx-auto px-6 mt-3">
        <section className="sm:flex items-center gap-3">
          <h2 className="text-3xl font-light text-indigo-500">1.0</h2>
          <div className="sm:hidden w-full h-[1px] bg-gray-300 my-2"></div>
          <div className="sm:pl-[25%]">
          <h2 className="text-3xl font-light text-indigo-500">Наши услуги</h2>
          </div>
        </section>
      <div className="hidden sm:block w-full h-[1px] bg-gray-300 mt-2"></div>
      <Slider/>
    </div>

  );
}

