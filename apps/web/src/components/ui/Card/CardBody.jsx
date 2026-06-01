export function CardBody({ className, children }) {
  return (
    <section className={`text-stone-700 leading-relaxed ${className ?? ""}`}>
      {children}
    </section>
  );
}
