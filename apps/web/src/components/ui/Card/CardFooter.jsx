export function CardFooter({ className, children }) {
  return (
    <footer
      className={`flex items-center gap-3 mt-2 border-t border-stone-100 bg-stone-50/80 px-5 py-4 rounded-b-2xl ${className ?? ""}`}
    >
      {children}
    </footer>
  );
}
