import { Button } from "@/components/ui/Button";
import { useState, useEffect } from "react";

export function ClientNavbar() {
  //isOpen para abrir o cerrar desde el celular
  const [isOpen, setIsOpen] = useState(false);

  //heroVisible para saber si los elementos del navbar deben mostrarse de un color u otro
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setHeroVisible(window.scrollY < 500);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = `transition-colors duration-300 ${
    heroVisible
      ? "text-white hover:text-amber-200"
      : "text-stone-600 hover:text-amber-600"
  }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        heroVisible
          ? "bg-transparent border-b border-transparent"
          : "bg-white border-b border-amber-200 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <span
            className={`text-xl font-bold transition-colors duration-300 ${
              heroVisible ? "text-white" : "text-amber-600"
            }`}
          >
            Forkseat
          </span>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#" className={navLinkClass}>
              Inicio
            </a>
            <a href="#" className={navLinkClass}>
              Platos
            </a>
            <a href="#" className={navLinkClass}>
              Contacto
            </a>
          </div>

          {/* Button desktop */}
          <div className="hidden md:block">
            <Button>Pedir domicilio</Button>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors ${
              heroVisible ? "text-white" : "text-stone-600"
            }`}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-amber-100 bg-amber-50 px-4 py-4 space-y-2">
          <a className="block">Inicio</a>
          <a className="block">Platos</a>
          <a className="block">Contacto</a>

          <Button className="w-full mt-2">Pedir domicilio</Button>
        </div>
      )}
    </nav>
  );
}
