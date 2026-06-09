import { Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { CardFeature } from "./Card.jsx";
import { features } from "./data.js";

export function Reservation() {
  return (
    <section className="py-24 px-4 bg-linear-to-b from-white to-stone-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
            Experiencia Fork & Flame
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 tracking-tight leading-tight">
            Reserva tu mesa
          </h2>

          <div className="h-1 w-20 rounded-full bg-linear-to-r from-amber-400 to-amber-600" />

          <p className="text-stone-500 leading-relaxed max-w-lg">
            Celebra tus momentos especiales en un ambiente único. Ya sea una
            cena romántica, un cumpleaños o una reunión de negocios, nuestro
            equipo hará que cada visita sea inolvidable.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {features.map((f) => (
              <CardFeature
                key={f.title}
                icon={f.icon}
                title={f.title}
                description={f.description}
              />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto px-8">
              Reservar ahora
            </Button>
            <Link to="/menu" onClick={() => window.scrollTo(0, 0)}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Ver menú completo
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1636405189493-181ecf851006?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mesas principales en Fork & Flame"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
          </div>

          <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg px-5 py-4 flex items-center gap-3 max-w-48">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="size-4 text-amber-400"
                  fill="currentColor"
                />
              ))}
            </div>
            <div className="text-sm">
              <p className="font-semibold text-stone-800 leading-tight">4.7</p>
              <p className="text-stone-400 text-xs">200+ reseñas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
