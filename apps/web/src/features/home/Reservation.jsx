import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";

const features = [
  {
    title: "Horarios flexibles",
    description:
      "Abierto todos los días de 12:00 p.m. a 11:00 p.m. Reserva a la hora que prefieras.",
    icon: (
      <svg
        className="size-5 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Grupos grandes",
    description:
      "Disponemos de espacios privados para eventos, reuniones y celebraciones de hasta 20 personas.",
    icon: (
      <svg
        className="size-5 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Ocasiones especiales",
    description:
      "Decoramos tu mesa para cumpleaños, aniversarios y fechas especiales. Cuentanos qué celebras.",
    icon: (
      <svg
        className="size-5 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
];

export function Reservation() {
  return (
    <section
      id="reservas"
      className="py-20 px-4 bg-linear-to-b from-stone-50 to-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 mb-3">
          Experiencia Fork & Flame
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 tracking-tight">
          Reserva tu mesa
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-amber-400 to-amber-600" />
        <p className="mt-6 text-stone-500 max-w-2xl mx-auto leading-relaxed">
          Celebra tus momentos especiales en un ambiente único. Ya sea una cena
          romántica, un cumpleaños o una reunión de negocios, nuestro equipo
          hará que cada visita sea inolvidable.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mt-12 text-left">
          {features.map((feature) => (
            <Card key={feature.title} className="text-left">
              <CardBody className="p-6">
                <div className="size-10 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-stone-800 font-semibold text-sm mb-2">
                  {feature.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg">Reservar ahora</Button>
          <Button size="lg" variant="outline">
            Ver menú completo
          </Button>
        </div>
      </div>
    </section>
  );
}
