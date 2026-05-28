export function Modal({ isOpen, children }) {
  if (!isOpen) return null;

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl">
        {children}
      </div>
    </section>
  );
}
