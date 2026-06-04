export function MenuFilters({
  categories,
  activeCategory,
  sortBy,
  onCategoryChange,
  onSortChange,
  total,
}) {
  return (
    <div className="mb-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-amber-600 text-white shadow-sm shadow-amber-200"
                  : "text-stone-600 hover:text-amber-700 hover:bg-amber-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-stone-400">{total} platos</span>
          <span className="text-stone-200">|</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent cursor-pointer"
          >
            <option value="nombre">Ordenar: Nombre</option>
            <option value="precio-asc">Ordenar: Menor precio</option>
            <option value="precio-desc">Ordenar: Mayor precio</option>
          </select>
        </div>
      </div>
    </div>
  );
}
