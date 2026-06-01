const CARD_SIZES = {
  sm: "max-w-72",
  md: "max-w-sm",
  lg: "max-w-md",
};

export function Card({ size = "sm", className, children }) {
  return (
    <article
      className={`w-full ${CARD_SIZES[size]} flex flex-col bg-white rounded-2xl shadow-md shadow-amber-900/5 ring-1 ring-stone-200/80 overflow-hidden
        transition-all duration-300 ease-out
        hover:shadow-xl hover:shadow-amber-900/10 hover:-translate-y-1 hover:ring-amber-200
        ${className ?? ""}`}
    >
      <div className="shrink-0 h-1.5 bg-linear-to-r from-amber-400 via-amber-500 to-amber-600" />
      {children}
    </article>
  );
}
