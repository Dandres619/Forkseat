export const ClientFooter = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="md:col-span-1">
            <span className="text-xl font-bold tracking-tight text-amber-400">Fork & Flame</span>
            <p className="mt-3 text-sm text-stone-400 leading-relaxed">
              Tu comida favorita a la puerta de tu casa o la mesa perfecta para esa ocasión especial.
            </p>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Enlaces</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#inicio" className="text-stone-400 hover:text-amber-400 transition-colors">Inicio</a></li>
              <li><a href="#platos" className="text-stone-400 hover:text-amber-400 transition-colors">Platos</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Contacto</h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>forkandflame@servicio.com</li>
              <li>+57 (604) 500 60 70</li>
              <li>Carrera 48 #32B Sur - 139</li>
              <li>Medellín, Colombia</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Síguenos</h3>
            <div className="flex gap-3">
              {["Facebook", "Twitter", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-stone-400 hover:text-amber-400 transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Fork & Flame. Todos los derechos reservados.</p>
          <p>Términos y condiciones · Política de privacidad</p>
        </div>
      </div>
    </footer>
  );
};
