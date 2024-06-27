import Image from "next/image";
import { Inter, Anton, Poppins } from "next/font/google";
import Portada from "@/Components/Portada";
import Slide from "@/Components/Slide";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Home() {
  return (
    <>
      <div className="md:bg-[url('/img/desktop.png')] bg-[url('/img/mobile.png')] bg-cover bg-no-repeat h-screen w-full ">
        <div className="mx-12 md:mx-44 pt-20 md:pt-48">
          <h1 className="text-white md:text-left text-center text-[20px] md:text-[38.3px] font-bold text-outline">
            ¿Cansado de no encontrar compradores
          </h1>
          <h2
            className={`text-white text-[50px] md:text-[86.3px] md:-mt-6  md:text-left text-center ${anton.className}`}
          >
            {" "}
            PARA TU PROPIEDAD?
          </h2>
          <h3
            className={`text-white ${poppins.className} md:-mt-4 text-sm md:text-2xl md:text-left text-center`}
          >
            Es hora de utilizar Marketing Inmobiliario y conseguir <br></br>
            vender rápido y al mejor precio.
          </h3>
          <div className="flex md:justify-start justify-center">
            <a
              href="https://wa.link/kmoseo"
              className="bg-[#ED155D] text-white font-bold py-3 px-6 rounded-md mt-4 md:w-auto w-64"
            >
              ¡Contáctame ahora!
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <img src="/img/banner2.png" className="w-full md:flex hidden" />
        <img src="/img/mobile2.png" className="w-full flex md:hidden" />
      </div>
      <div className="bg-[url('/img/mobile3.png')] md:bg-[url('/img/banner3.png')] bg-cover bg-no-repeat bg-center h-auto pb-24 w-full ">
        <div className="flex justify-center gap-5 flex-wrap px-24 lg:px-52 xl:px-64 2xl:pt-96 xl:pt-96 lg:pt-52 pt-32 ">
          <button className="bg-[#ED155D] text-white font-bold py-3 px-6 rounded-md mt-4 md:w-auto w-64">
            Analisis de mercado
          </button>

          <button className="bg-[#FC4E0A] text-white font-bold py-3 px-6 rounded-md mt-4 md:w-auto w-64">
            Fotografía Profesional
          </button>
          <button className="bg-[#fff] text-[#D30801] font-bold py-3 px-6 rounded-md mt-4 md:w-auto w-64">
            Videos para redes sociales
          </button>
          <button className="bg-[#ffffff] text-[#D30801] font-bold py-3 px-6 rounded-md mt-4 md:w-auto w-64">
            Asesoramiento Personalizado
          </button>
          <button className="bg-[#ED155D] text-white font-bold py-3 px-6 rounded-md mt-4 md:w-auto w-64">
            Tour 360º
          </button>
          <button className="bg-[#FC4E0A] text-white font-bold py-3 px-6 rounded-md mt-4 md:w-auto w-64">
            Estrategias de marketing
          </button>
          <button className="bg-[#D30801] text-white font-bold py-3 px-6 rounded-md mt-4 md:w-auto w-64">
            Destacados en portales
          </button>
          <button className="bg-[#ED155D] text-white font-bold py-3 px-6 rounded-md mt-4 md:w-auto w-64">
            Publicidad en Google
          </button>
          <button className="bg-[#fff] text-[#D30801] font-bold py-3 px-6 rounded-md mt-4 md:w-auto w-64">
            Reportes semanales
          </button>
          <button className="bg-[#ED155D] text-white font-bold py-3 px-6 rounded-md mt-4 md:w-auto w-64">
            Publicidad en Meta
          </button>
        </div>
      </div>
      <div className="slider pb-44 md:pt-4 pt-12">
        <div className="slider-track flex flex-row">
          <Slide />
        </div>
      </div>
      <Footer />
    </>
  );
}
