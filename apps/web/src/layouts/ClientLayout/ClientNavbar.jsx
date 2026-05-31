import { Button } from "@/components/ui/Button";

export function ClientNavbar() {
  return (
    <section>
      <nav className="sticky top-0 z-40 bg-white border-b border-amber-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="shrink-0 flex items-center">
              <span className="text-xl font-bold tracking-tight text-amber-600">
                Forkseat
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#" className="text-stone-600 hover:text-amber-600 transition-colors">
                Inicio
              </a>
              <a href="#" className="text-stone-600 hover:text-amber-600 transition-colors">
                Platos
              </a>
              <a href="#" className="text-stone-600 hover:text-amber-600 transition-colors">
                Contacto
              </a>
            </div>

            <div className="hidden md:block">
              <Button>Pedir domicilio</Button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                id="mobile-menu-btn"
                className="text-stone-400 hover:text-amber-600 focus:outline-none"
                aria-label="Abrir menú"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div id="mobile-menu" className="hidden md:hidden border-t border-amber-100 bg-amber-50 px-4 py-4 space-y-2">
          <a href="#" className="block text-stone-700 hover:text-amber-600 hover:bg-white px-3 py-2 rounded-lg text-base font-medium transition-colors">
            Inicio
          </a>
          <a href="#" className="block text-stone-700 hover:text-amber-600 hover:bg-white px-3 py-2 rounded-lg text-base font-medium transition-colors">
            Servicios
          </a>
          <a href="#" className="block text-stone-700 hover:text-amber-600 hover:bg-white px-3 py-2 rounded-lg text-base font-medium transition-colors">
            Contacto
          </a>

          <Button className="w-full mt-2">Pedir domicilio</Button>
        </div>
      </nav>
    </section>
  );
}
