import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardBody, CardFooter } from "@/components/ui/Card";
import { formatPrice } from "@/utils/formatPrice.js";

const dishes = [
  {
    id: 1,
    title: "Pizza Napolitana",
    description:
      "Mozzarella fresca, tomate San Marzano, albahaca y un toque de aceite de oliva extra virgen.",
    price: 34900,
    image: "https://imag.bonviveur.com/pizza-napolitana.jpg",
    tag: "Más pedido",
  },
  {
    id: 2,
    title: "Risotto ai Funghi",
    description:
      "Arroz cremoso con mix de hongos silvestres, parmesano reggiano y trufa negra.",
    price: 38500,
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80",
  },
  {
    id: 3,
    title: "Salmon a la Plancha",
    description:
      "Salmón noruego sellado con costra de hierbas, cama de espárragos y puré de batata.",
    price: 42900,
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80",
    tag: "Chef",
  },
  {
    id: 4,
    title: "Pasta Carbonara",
    description:
      "Spaghetti artesanal con guanciale, yema de huevo, pecorino y pimienta negra recién molida.",
    price: 32500,
    image:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80",
  },
  {
    id: 5,
    title: "Hamburguesa Flame",
    description:
      "Doble carne angus, cheddar maduro, cebolla caramelizada, bacon crujiente y nuestra salsa especial.",
    price: 36900,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    tag: "Nuevo",
  },
  {
    id: 6,
    title: "Tiramisú Clásico",
    description:
      "Mascarpone, café expreso, cacao amargo y bizcochos artesanales. El postre que cierra con broche de oro.",
    price: 18900,
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80",
  },
];

export function Dishes() {
  return (
    <section id="platos" className="bg-linear-to-b from-stone-100 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 mb-3">
            Nuestros destacados
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 tracking-tight">
            Especialidades de la casa
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-amber-400 to-amber-600" />
          <p className="mt-5 text-stone-500 max-w-xl mx-auto leading-relaxed">
            Descubre nuestros platos estrella, preparados con ingredientes
            frescos y mucho amor por la cocina.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <Card key={dish.id} className="group">
              <CardBody className="p-0">
                <div className="relative w-full overflow-hidden aspect-4/3">
                  <img
                    src={dish.image}
                    alt={dish.title}
                    className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                  {dish.tag && (
                    <span className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                      {dish.tag}
                    </span>
                  )}
                </div>
              </CardBody>

              <CardHeader title={dish.title} description={dish.description} />

              <CardFooter>
                <span className="text-lg font-bold text-amber-700">
                  {formatPrice(dish.price)}
                </span>
                <Button size="sm">Ordenar</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
