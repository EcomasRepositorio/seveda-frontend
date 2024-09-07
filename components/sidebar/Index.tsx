"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaUserCog, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { PiCertificateBold } from "react-icons/pi";



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
              <PiCertificateBold className="text-2xl" />
              <button className="">Verificar Certificado</button>
            </div>

            <div className="flex items-center space-x-1">
              <HiOutlineDesktopComputer className="text-2xl" />
              <button className="">Aula Virtual</button>
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
            <FaSearch
              className="text-gray-800 hover:text-customOrange cursor-pointer"
              size={20}
            />

            {/* Icono de carrito */}
            <div className="relative">
              <FaShoppingCart
                className="text-gray-800 hover:text-customOrange cursor-pointer"
                size={20}
              />
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
                0
              </span>
            </div>

            {/* Botón de acción */}
            <Link
              href="/quote"
              className="py-2 px-4 bg-customOrange text-white rounded-lg hover:bg-orange-600 transition-all"
            >
              Get A Quote
            </Link>
          </div>

          {/* HAMBURGER BUTTON FOR MOBILE */}
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <FaTimes className="text-black" size={30} />
              ) : (
                <FaBars className="text-black" size={30} />
              )}
            </button>
          </div>
        </div>

        {/* Menú para móvil */}
        <div
          className={`md:hidden ${
            navbar ? "block" : "hidden"
          } bg-white shadow-md`}
        >
          <ul className="flex flex-col space-y-4 items-center py-4">
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
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
