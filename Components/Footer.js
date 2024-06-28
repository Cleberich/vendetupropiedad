import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black rounded-lg shadow m-4 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
        <span className="text-xs md:text-sm text-gray-500 text-center ">
          © 2024{" "}
          <a
            href="https://instagram.com/cleberdavilaa"
            className="hover:underline"
          >
            Cleber Davila - Asesor Inmobiliario asociado a Imperium
          </a>
          . Todos los derechos reservados
        </span>
      </div>
    </footer>
  );
};

export default Footer;
