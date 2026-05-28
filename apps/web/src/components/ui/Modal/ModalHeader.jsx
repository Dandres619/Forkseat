import { Button } from "@/components/ui/Button";

export function ModalHeader({ title, onClose }) {
  return (
    <header className="flex items-center justify-between border-b border-amber-200 bg-linear-to-r from-amber-50 to-white px-6 py-4 rounded-t-2xl">
      <h2 className="text-xl font-semibold text-stone-800 tracking-tight">
        {title}
      </h2>
      <Button
        variant="ghost"
        size="sm"
        onClick={onClose}
        className="text-stone-400 hover:text-stone-600 hover:bg-amber-50 rounded-full size-8 p-0"
      >
        ✕
      </Button>
    </header>
  );
}
