export function MenuHeader({ title, description }) {
  return (
    <div className="text-center mb-12">
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 mb-3">
        Carta
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-stone-800 tracking-tight">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-amber-400 to-amber-600" />
      {description && (
        <p className="mt-5 text-stone-500 max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
