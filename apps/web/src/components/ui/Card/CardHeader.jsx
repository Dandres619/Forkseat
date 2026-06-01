export function CardHeader({ title, description, className, children }) {
  return (
    <header
      className={`pl-5 pr-5 pt-5 pb-3 ${className ?? ""}`}
    >
      {title && (
        <h2 className="text-lg font-bold text-stone-800 tracking-tight">{title}</h2>
      )}
      {description && (
        <p className="mt-1 text-sm text-stone-500 leading-relaxed">{description}</p>
      )}
      {children}
    </header>
  );
}
