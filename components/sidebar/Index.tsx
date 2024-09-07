"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaUserCog } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/components/utils/motion";
import { Button } from "@nextui-org/react";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="">
      <nav className="w-full top-0 left-0 right-0  z-50 relative">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-2 lg:max-w-full backdrop-blur-md bg-customPurple800">
          <div className="md:text-right text-center font-semibold w-full py-1  border-cyan-50">
            <Link
              href="/certs"
              className="mr-4 py-1 px-6 bg-customPurple800 text-white border-2 border-white rounded-lg font-light hover:bg-customOrange/65 hover:border-customOrange/65 hover:scale-105 transition duration-300 ease-in-out"
            >
              Verificar Certificado
            </Link>
            <Link
              href="https://site2.q10.com/login?ReturnUrl=%2F&aplentId=0959465f-37c3-4032-803b-bbfc499af7a3"
              className="mr-3 py-1 px-6 bg-customPurple800 text-white border-2 border-white rounded-lg font-light hover:bg-customOrange/65 hover:border-customOrange/65 hover:scale-105 transition duration-300 ease-in-out"
            >
              Aula Virtual
            </Link>
          </div>
        </div>

        <div className="justify-between px-2 lg:px-0 mx-auto lg:max-w-full md:items-center md:flex w-full bg-customPurple800/85 ">
          <div>
            <div className="items-center inline-flex justify-between py-3 md:py- lg:py- md:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src="/logo/logo8.png"
                  width={800}
                  height={800}
                  alt="binex_logo"
                  className="w-full max-w-xs md:max-w-sm h-auto ml-auto"
                  priority={true}
                />
              </Link>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden ml-44">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    // Ícono de cerrar (FaTimes) cuando el menú está abierto
                    <FaTimes className="text-white " size={30} />
                  ) : (
                    // Ícono de menú (FaBars) cuando el menú está cerrado
                    <FaBars className="text-white" size={30} />
                  )}
                </button>
              </div>
              
            </div>

          </div>
         
          <div>
          {/* Contenido para dispositivos móviles */}
          <div
            className={`md:hidden fixed inset-0 z-50 transition-transform duration-300 ease-in-out ${
              navbar ? "translate-x-0" : "translate-x-full"
            } bg-black bg-opacity-90`}
          >
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? "p-12 md:p-0 block" : "hidden"
                }`}
              >
                <ul className="h-screen md:h-12 lg:text-sm md:text-sm text-xl items-center justify-center md:flex mt-12">
                  {/* Opción del menú: Inicio */}
                  <li className="font-bold text-[#FFD700] hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-[#6D0083] rounded transition-transform transform hover:scale-125">
                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                      Iniciop
                    </Link>
                  </li>

                  {/* Opción del menú: Certificado */}
                  <li className="font-bold text-[#FFD700] hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-[#6D0083] rounded transition-transform transform hover:scale-125">
                    <Link
                      href="/certificate"
                      onClick={() => setNavbar(!navbar)}
                    >
                      Certificado
                    </Link>
                  </li>

                  {/* Opción del menú: Diplomados */}
                  <li className="font-bold text-[#FFD700] hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-[#6D0083] rounded transition-transform transform hover:scale-125">
                    <Link href="/graduate" onClick={() => setNavbar(!navbar)}>
                      Diplomados
                    </Link>
                  </li>

                  {/* Opción del menú: Nosotros */}
                  <li className="font-bold text-[#FFD700] hover:text-white lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center md:border-b-0 hover:bg-[#6D0083] rounded transition-transform transform hover:scale-125">
                    <Link href="/about" onClick={() => setNavbar(!navbar)}>
                      Nosotros
                    </Link>
                  </li>

                  {/* Opción del menú: ¡Inscríbete! */}
                  <li className="font-bold text-[#FFD700] hover:text-white lg:mb-0 md:mb-0 mb-4 py-1 px-6 text-center md:border-b-0 hover:bg-[#6D0083] rounded transition-transform transform hover:scale-125">
                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                      ¡Inscríbete!
                    </Link>
                  </li>

                  {/* Botón de inicio de sesión con icono */}
                  <li className="lg:pl-40 flex justify-center items-center hover:text-pink-600 md:mt-0 mt-20">
                    <Link
                      href="/login"
                      className="bg-[#FFD700] py-1 px-4 rounded-xl text-[#6D0083] hover:bg-[#6D0083] hover:text-[#FFD700] hover:scale-125 duration-300"
                    >
                      <FaUserCog className="md:text-xl text-4xl" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

          {/* Contenido para dispositivos de escritorio */}
          <div className={`hidden md:block ${navbar ? "block" : "hidden"}`}>
            <div className="flex-1 justify-self-center rounded-lg pb-3 mt-2">
              <ul className="h-screen md:h-12 lg:text-sm md:text-sm text-xl items-center justify-center md:flex  ">
                <li className="font-extralight text-xl text-gray-100 lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center border border-transparent hover:border-testCian hover:bg-white/15 rounded transition-transform transform hover:scale-125">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Inicio
                  </Link>
                </li>
                <li className="font-extralight text-xl text-gray-100 lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center border border-transparent hover:border-testCian hover:bg-white/15 rounded transition-transform transform hover:scale-125">
                  <Link href="/certs" onClick={() => setNavbar(!navbar)}>
                    Certificado
                  </Link>
                </li>
                <li className="font-extralight text-xl text-gray-100 lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center border border-transparent hover:border-testCian hover:bg-white/15 rounded transition-transform transform hover:scale-125">
                  <Link href="/graduate" onClick={() => setNavbar(!navbar)}>
                    Diplomados
                  </Link>
                </li>
                <li className="font-extralight text-xl text-gray-100 lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center border border-transparent hover:border-testCian hover:bg-white/15 rounded transition-transform transform hover:scale-125">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    Nosotros
                  </Link>
                </li>
                <li className="font-extralight text-xl text-gray-100 lg:mb-0 md:mb-0 mb-6 py-1 px-6 text-center border border-transparent hover:border-testCian hover:bg-white/15 rounded transition-transform transform hover:scale-125">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    ¡Inscribete!
                  </Link>
                </li>
                <li className="lg:pl-40 flex  justify-center items-center hover:text-primaryBlue md:mt-0 mt-20">
                  <Link
                    href="/login"
                    className="bg-customOrange py-1 px-4 rounded-xl text-white hover:bg-gray-100 hover:text-primaryBlue hover:scale-125 duration-300 "
                  >
                    <FaUserCog className="md:text-xl text-4xl" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        
        
      </nav>
    </div>
  );
}

export default Navbar;
