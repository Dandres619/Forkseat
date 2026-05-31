import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('images/hero.png')" }}
    >
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
          Forkseat
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8">
          Pide domicilio de tu comida favorita o reserva una mesa para tus
          fechas mas especiales.
        </p>
        <div className="flex justify-center gap-5">
          <Button size="lg">
            Pide un domicilio
          </Button>
          <Button variant="alt" size="lg">
            Reserva tu mesa
          </Button>
        </div>
      </div>
    </section>
  );
}
