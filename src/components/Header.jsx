import { useState } from "react";
import logo from "../images/logo.svg";
import Button from "./Button";
import MenuIcon from "../images/icon-hamburger.svg";
import CloseIcon from "../images/icon-close.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-sm flex justify-between items-center w-full h-20 px-6 bg-white shadow-md relative">
      {/* Logo */}
      <img src={logo} alt="logo do easybank" className="w-35 h-5 md:mr-150" />

      {/* Ícone do menu hamburguer (Mobile) */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <img
          src={isOpen ? CloseIcon : MenuIcon}
          alt="menu"
          className="w-6 h-6"
        />
      </button>

      {/* Menu Mobile */}
      <div
        className={`absolute left-0 w-full bg-white shadow-md md:static md:flex md:items-center md:gap-6 md:bg-transparent md:shadow-none transition-transform ${
          isOpen ? "top-20 flex flex-col items-center py-6 gap-4" : "hidden"
        }`}
      >
        <a href="#" className="text-grayish-blue hover:text-dark-blue">
          Home
        </a>
        <a href="#" className="text-grayish-blue hover:text-dark-blue">
          About
        </a>
        <a href="#" className="text-grayish-blue hover:text-dark-blue">
          Contact
        </a>
        <a href="#" className="text-grayish-blue hover:text-dark-blue">
          Blog
        </a>
        <a href="#" className="text-grayish-blue hover:text-dark-blue">
          Careers
        </a>
      </div>

      {/* Botão */}
      <div className="hidden md:block">
        <Button />
      </div>
    </nav>
  );
}
