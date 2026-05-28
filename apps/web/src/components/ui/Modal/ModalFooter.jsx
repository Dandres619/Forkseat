import { Button } from "@/components/ui/Button";

export function ModalFooter({ children, onClose }) {
  return (
    <footer className="flex items-center justify-between gap-3 border-t border-amber-200 px-6 py-4 rounded-b-2xl bg-linear-to-r from-white to-amber-50">
      {children}
      <Button variant="outline" onClick={onClose}>
        Cerrar
      </Button>
    </footer>
  );
}
