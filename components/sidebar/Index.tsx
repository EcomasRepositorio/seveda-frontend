"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaUserCog, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { PiCertificateBold } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="relative">
      {/* Barra Superior (Información de Contacto y Redes Sociales) */}
      <div className="bg-customPurple800 text-white text-sm py-2">
        <div className=" mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4"></div>
          <div className="flex items-center space-x-2 mr-8">
            <div className="flex items-center space-x-1 mr-6">
              <Link
                href="/certs"
                className="flex items-center space-x-1 transition duration-300 ease-in-out transform hover:scale-105 hover:text-customYellow"
              >
                <PiCertificateBold className="text-2xl" />
                <span className="">Verificar Certificado</span>
              </Link>
            </div>
            <div className="flex items-center space-x-1">
              <Link
                href="https://site2.q10.com/login?ReturnUrl=%2F&aplentId=0959465f-37c3-4032-803b-bbfc499af7a3"
                className="flex items-center space-x-1 transition duration-300 ease-in-out transform hover:scale-105 hover:text-customYellow"
              >
                <HiOutlineDesktopComputer className="text-2xl " />
                <span>Aula Virtual</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar principal */}
      <nav className="w-full top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto py-4 px-2">
          {/* LOGO */}
          <Link href="/">
            <Image
              src="/logo/logo9.png"
              width={200}
              height={200}
              alt="binex_logo"
              className="w-auto h-auto"
              priority={true}
            />
          </Link>

          {/* Enlaces de navegación */}
          <div className={`hidden md:flex items-center space-x-6`}>
            <Link href="/" className="text-gray-800 hover:text-customOrange">
              Inicio
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-customOrange"
            >
              Certificados
            </Link>
            <Link
              href="/services"
              className="text-gray-800 hover:text-customOrange"
            >
              Diplomados
            </Link>
            <Link
              href="/projects"
              className="text-gray-800 hover:text-customOrange"
            >
              Nosotros
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-customOrange"
            >
              Contactos
            </Link>
          </div>

          {/* Iconos y botón de acción */}
          <div className="flex items-center space-x-4">
            {/* Icono de búsqueda */}

            {/* Botón de acción */}
            <label className="inline-flex items-center relative">
              <input className="peer hidden" id="toggle" type="checkbox" />
              <div className="relative w-[110px] h-[50px] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[40px] after:h-[40px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[5px] after:left-[5px] active:after:w-[50px] peer-checked:after:left-[105px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"></div>
              <svg
                height="0"
                width="100"
                viewBox="0 0 24 24"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white peer-checked:opacity-60 absolute w-6 h-6 left-[13px]"
              >
                <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"></path>
              </svg>
              <svg
                height="512"
                width="512"
                viewBox="0 0 24 24"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-6 h-6 right-[13px]"
              >
                <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"></path>
              </svg>
            </label>

            <div className="hidden md:flex justify-center">
              <a href="/login">
                <FaUserAlt className="text-2xl text-customPurple800 transition duration-300 ease-in-out transform hover:scale-110 hover:text-customYellow" /> 
              </a>
            </div>
          </div>

          {/* HAMBURGER BUTTON FOR MOBILE */}
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 foc:borduser"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <FaTimes className="text-transparent z-50 " size={30} />
              ) : (
                <FaBars className="text-black" size={30} />
              )}
            </button>
          </div>
        </div>

        {/* Menú para móvil */}
        <div
          className={`fixed inset-0 z-50 md:hidden ${
            navbar ? "flex" : "hidden"
          } bg-black bg-opacity-50 justify-center items-center transition-all duration-300`}
        >
          <div className="bg-white shadow-md h-[450px] w-[300px] md:w-[450px] rounded-2xl flex flex-col justify-center items-center py-6 relative">
            {/* Botón de cierre (X) posicionado en la parte superior derecha */}
            <button
              className="absolute top-4 right-4 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400"
              onClick={() => setNavbar(!navbar)}
            >
              <FaTimes className="text-black z-50" size={30} />
            </button>

            {/* Contenido del menú */}
            <ul className="flex flex-col space-y-4 items-center">
              <Link
                href="/"
                onClick={() => setNavbar(!navbar)}
                className="text-gray-800 hover:text-customOrange"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setNavbar(!navbar)}
                className="text-gray-800 hover:text-customOrange"
              >
                About
              </Link>
              <Link
                href="/services"
                onClick={() => setNavbar(!navbar)}
                className="text-gray-800 hover:text-customOrange"
              >
                Services
              </Link>
              <Link
                href="/projects"
                onClick={() => setNavbar(!navbar)}
                className="text-gray-800 hover:text-customOrange"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                onClick={() => setNavbar(!navbar)}
                className="text-gray-800 hover:text-customOrange"
              >
                Contact
              </Link>
            </ul>

            {/* Ícono al final del menú */}
            <div className=" flex justify-center mt-4">
              <a href="/login">
                <FaUserAlt className="text-2xl text-customPurple800 transition duration-300 ease-in-out transform hover:scale-110 hover:text-customYellow" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
