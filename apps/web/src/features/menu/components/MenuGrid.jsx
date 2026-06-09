import { Card, CardHeader, CardBody } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/utils/formatPrice.js";

function DishCard({ dish }) {
  return (
    <Card className="max-w-none group">
      <CardBody className="p-0">
        <div className="relative w-full overflow-hidden aspect-4/3">
          <img
            src={dish.image}
            alt={dish.title}
            className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
          {dish.tag && (
            <span className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              {dish.tag}
            </span>
          )}
          <span className="absolute bottom-3 right-3 bg-white/90 text-stone-800 text-sm font-bold px-3 py-1 rounded-full shadow-sm">
            {formatPrice(dish.price)}
          </span>
        </div>
      </CardBody>

      <CardHeader
        title={dish.title}
        description={dish.description}
        className="flex-1"
      />

      <div className="shrink-0 px-5 pb-5">
        <Button size="sm" className="w-full cursor-pointer">
          Agregar
        </Button>
      </div>
    </Card>
  );
}

export function MenuGrid({ dishes, activeCategory }) {
  if (dishes.length === 0) {
    return (
      <p className="text-center text-stone-400 py-16">
        No encontramos platos en esta categoría.
      </p>
    );
  }

  // When showing all categories, group them visually
  if (activeCategory === "Todas") {
    const grouped = {};
    for (const d of dishes) {
      if (!grouped[d.category]) grouped[d.category] = [];
      grouped[d.category].push(d);
    }

    return (
      <div className="space-y-14">
        {Object.entries(grouped).map(([cat, items]) => (
          <div key={cat}>
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-amber-700 shrink-0">
                {cat}
              </h3>
              <div className="h-px grow bg-linear-to-r from-amber-200 to-transparent" />
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {dishes.map((dish) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
}
