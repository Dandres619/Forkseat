import { useState, useMemo } from "react";
import { MenuHeader } from "./components/MenuHeader";
import { MenuFilters } from "./components/MenuFilters";
import { MenuGrid } from "./components/MenuGrid";
import { dishData, categories } from "./data";

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [sortBy, setSortBy] = useState("nombre");

  const filtered = useMemo(() => {
    const result =
      activeCategory === "Todas"
        ? [...dishData]
        : dishData.filter((d) => d.category === activeCategory);

    const cmp = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

    switch (sortBy) {
      case "nombre":
        return result.sort((a, b) => cmp(a.title, b.title));
      case "precio-asc":
        return result.sort((a, b) => a.price - b.price);
      case "precio-desc":
        return result.sort((a, b) => b.price - a.price);
      default:
        return result;
    }
  }, [activeCategory, sortBy]);

  return (
    <section className="bg-linear-to-b from-white to-stone-50">
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-20">
        <MenuHeader
          title="Nuestro Menú"
          description="Explora nuestra carta completa, desde entradas hasta postres, todo preparado con ingredientes frescos y mucho sabor."
        />

        <MenuFilters
          categories={categories}
          activeCategory={activeCategory}
          sortBy={sortBy}
          onCategoryChange={setActiveCategory}
          onSortChange={setSortBy}
          total={filtered.length}
        />

        <MenuGrid dishes={filtered} activeCategory={activeCategory} />
      </div>
    </section>
  );
}
