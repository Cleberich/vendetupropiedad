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
      <div className="md:bg-[url('/img/desktop.png')] bg-[url('/img/mobile.png')] bg-cover bg-center bg-no-repeat h-screen w-full ">
        <div className="flex justify-center  pt-6">
          <img
            src="/img/logo.png"
            alt="inmobiliaria imperium"
            className="w-14 md:w-20"
          />
        </div>
        <div className="mx-2 md:mx-44 pt-8 md:pt-48">
          <h1 className="text-white md:text-left text-center text-[16px] md:text-[38.3px] font-bold text-outline">
            ¿Cansado de no encontrar comprador
          </h1>
          <h2
            className={`text-white text-[40px] md:text-[86.3px] md:-mt-6  md:text-left text-center ${anton.className}`}
          >
            {" "}
            PARA TU PROPIEDAD?
          </h2>
          <h3
            className={`text-white ${poppins.className} md:-mt-4 text-xs md:text-2xl md:text-left text-center`}
          >
            Es hora de utilizar Marketing Inmobiliario y conseguir <br></br>
            vender rápido y al mejor precio.
          </h3>
          <div className="flex md:justify-start justify-center">
            <a
              href="https://wa.link/kmoseo"
              className="bg-[#ED155D] text-white font-bold py-3 text-center px-6 rounded-md mt-2 md:mt-4 md:w-auto w-64"
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
      <div className="bg-[url('/img/mobile3.png')] md:bg-[url('/img/banner3.png')] bg-cover bg-no-repeat bg-center md:bg-top h-auto md:h-screen pb-24 w-full ">
        <div className="flex justify-center gap-5 flex-wrap  px-2 lg:px-52 xl:px-64 2xl:pt-96 xl:pt-96 lg:pt-52 pt-32 ">
          <button className="cursor-none bg-[#ED155D] text-white font-bold py-3 px-6 rounded-md mt-4 md:w-auto w-64">
            Analisis de mercado
          </button>

          <button className="cursor-none bg-[#FC4E0A] text-white font-bold py-3 px-6 rounded-md mt-4 md:w-auto w-64">
            Fotografía Profesional
          </button>
          <button className="cursor-none bg-[#fff] text-[#D30801] font-bold py-3 px-6 rounded-md mt-4 md:w-auto w-64">
            Videos para redes sociales
          </button>
          <button className="cursor-none bg-[#ffffff] text-[#D30801] font-bold py-3 px-6 rounded-md mt-4 md:w-auto w-64">
            Asesoramiento Personalizado
          </button>
          <button className="cursor-none bg-[#ED155D] text-white font-bold py-3 px-6 rounded-md mt-4 md:w-auto w-64">
            Tour 360º
          </button>
          <button className="cursor-none bg-[#FC4E0A] text-white font-bold py-3 px-6 rounded-md mt-4 md:w-auto w-64">
            Estrategias de marketing
          </button>
          <button className="cursor-none bg-[#D30801] text-white font-bold py-3 px-6 rounded-md mt-4 md:w-auto w-64">
            Destacados en portales
          </button>
          <button className="cursor-none bg-[#ED155D] text-white font-bold py-3 px-6 rounded-md mt-4 md:w-auto w-64">
            Publicidad en Google
          </button>
          <button className="cursor-none bg-[#fff] text-[#D30801] font-bold py-3 px-6 rounded-md mt-4 md:w-auto w-64">
            Reportes semanales
          </button>
          <button className="cursor-none bg-[#ED155D] text-white font-bold py-3 px-6 rounded-md mt-4 md:w-auto w-64">
            Publicidad en Meta
          </button>
        </div>
      </div>
      <div className="slider pb-32 md:pt-4 pt-12">
        <div className="slider-track ">
          <div className="slide mx-2 ">
            <article>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-[20px]">
                  {" "}
                  <img
                    className="w-[10px] h-[20px] foto me-4 rounded-full"
                    src="/img/leo.jpeg"
                    alt=""
                  />
                </div>
                <div className="font-medium text-white">
                  <p>Leo Fernandez</p>
                </div>
              </div>

              <h3 className="ms-2 text-sm font-semibold italic text-white mt-2 ">
                "Te recomiendo a cada persona que quiera vender"
              </h3>
              <footer className="mb-5 text-sm text-gray-400"></footer>
              <p className="mb-2 text-gray-400 -mt-4 text-sm">
                Estaba cansado de que me llamaran las inmobiliarias entonces
                decidi dejar mi propiedad en manos de Cleber y logro vender en
                38 días
              </p>
            </article>
          </div>
          <div className="slide mx-2 ">
            <article>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 md:w-10 foto">
                  {" "}
                  <img
                    className="w-[10px] h-auto foto me-4 rounded-full"
                    src="/img/miriam.png"
                    alt=""
                  />
                </div>
                <div className="font-medium text-white">
                  <p>Miriam</p>
                </div>
              </div>

              <h3 className="ms-2 text-sm font-semibold italic text-white mt-2 ">
                "Muy profesional"
              </h3>
              <footer className="mb-5 text-sm text-gray-400"></footer>
              <p className="mb-2 text-gray-400 -mt-4 text-sm">
                Vino con un equipo de profesionales a sacar fotos hacer videos
                trajeron un dron, la atención muy buena muy profesional
              </p>
            </article>
          </div>{" "}
          <div className="slide mx-2 ">
            <article>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 md:w-10 foto">
                  {" "}
                  <img
                    className="w-[10px] h-auto foto me-4 rounded-full"
                    src="/img/yuca.png"
                    alt=""
                  />
                </div>
                <div className="font-medium text-white">
                  <p>Daniel Castro</p>
                </div>
              </div>

              <h3 className="ms-2 text-sm font-semibold italic text-white mt-2 ">
                "Muy contento con el servicio"
              </h3>
              <footer className="mb-5 text-sm text-gray-400"></footer>
              <p className="mb-2 text-gray-400 -mt-4 text-sm">
                Muy profesional en todo momento estuvo para responder mis
                consultas
              </p>
            </article>
          </div>
          <div className="slide mx-2 ">
            <article>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 md:w-10 foto">
                  {" "}
                  <img
                    className="w-[10px] h-auto foto me-4 rounded-full"
                    src="/img/leo.jpeg"
                    alt=""
                  />
                </div>
                <div className="font-medium text-white">
                  <p>Leo Fernandez</p>
                </div>
              </div>

              <h3 className="ms-2 text-sm font-semibold italic text-white mt-2 ">
                "Te recomiendo a cada persona que quiera vender"
              </h3>
              <footer className="mb-5 text-sm text-gray-400"></footer>
              <p className="mb-2 text-gray-400 -mt-4 text-sm">
                Estaba cansado de que me llamaran las inmobiliarias entonces
                decidi dejar mi propiedad en manos de Cleber y logro vender en
                38 días
              </p>
            </article>
          </div>
          <div className="slide mx-2 ">
            <article>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 md:w-10 foto">
                  {" "}
                  <img
                    className="w-[10px] h-auto foto me-4 rounded-full"
                    src="/img/miriam.png"
                    alt=""
                  />
                </div>
                <div className="font-medium text-white">
                  <p>Miriam</p>
                </div>
              </div>

              <h3 className="ms-2 text-sm font-semibold italic text-white mt-2 ">
                "Muy profesional"
              </h3>
              <footer className="mb-5 text-sm text-gray-400"></footer>
              <p className="mb-2 text-gray-400 -mt-4 text-sm">
                Vino con un equipo de profesionales a sacar fotos hacer videos
                trajeron un dron, la atención muy buena muy profesional
              </p>
            </article>
          </div>{" "}
          <div className="slide mx-2 ">
            <article>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 md:w-10 foto">
                  {" "}
                  <img
                    className="w-[10px] h-auto foto me-4 rounded-full"
                    src="/img/yuca.png"
                    alt=""
                  />
                </div>
                <div className="font-medium text-white">
                  <p>Daniel Castro</p>
                </div>
              </div>

              <h3 className="ms-2 text-sm font-semibold italic text-white mt-2 ">
                "Muy contento con el servicio"
              </h3>
              <footer className="mb-5 text-sm text-gray-400"></footer>
              <p className="mb-2 text-gray-400 -mt-4 text-sm">
                Muy profesional en todo momento estuvo para responder mis
                consultas
              </p>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
