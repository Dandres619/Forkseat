import { Button } from "@/components/ui/Button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const scrollToTop = () => window.scrollTo(0, 0);

export function ClientNavbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => setHeroVisible(window.scrollY < 500);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const scrolled = isHome ? !heroVisible : true;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-amber-200 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            to="/"
            onClick={scrollToTop}
            className={`text-xl font-bold transition-colors duration-300 ${
              scrolled ? "text-amber-600" : "text-white"
            }`}
          >
            Fork & Flame
          </Link>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link
              to="/"
              onClick={scrollToTop}
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-stone-600 hover:text-amber-600"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/menu"
              onClick={scrollToTop}
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-stone-600 hover:text-amber-600"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Menú
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant={scrolled ? "ghost" : "primary"}>
              Iniciar sesión
            </Button>
            <Button variant={scrolled ? "ghost" : "alt"}>Registrarse</Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors ${
              scrolled ? "text-stone-600" : "text-white"
            }`}
          >
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-amber-100 bg-white px-4 py-4 space-y-2 shadow-lg">
          <Link
            to="/"
            onClick={() => { scrollToTop(); setIsOpen(false); }}
            className="block px-4 py-2.5 text-stone-700 hover:text-amber-700 hover:bg-amber-50 rounded-lg text-base font-medium transition-colors"
          >
            Inicio
          </Link>
          <Link
            to="/menu"
            onClick={() => { scrollToTop(); setIsOpen(false); }}
            className="block px-4 py-2.5 text-stone-700 hover:text-amber-700 hover:bg-amber-50 rounded-lg text-base font-medium transition-colors"
          >
            Menú
          </Link>
          <Button className="w-full mt-3">Pedir domicilio</Button>
        </div>
      )}
    </nav>
  );
}
