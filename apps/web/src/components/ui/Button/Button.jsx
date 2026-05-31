const BUTTON_VARIANTS = {
    primary: "bg-amber-600 text-white hover:bg-amber-700",
    alt: "bg-emerald-600 text-white hover:bg-emerald-700",
    secondary: "bg-stone-100 text-stone-800 hover:bg-stone-200",
    outline: "border border-amber-200 text-amber-700 hover:bg-amber-50",
    ghost: "text-stone-600 hover:bg-amber-50",
    danger: "bg-red-600 text-white hover:bg-red-700",
  },
  BUTTON_SIZES = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

export function Button({
  variant = "primary",
  size = "md",
  type = "button",
  onClick,
  disabled = false,
  className = "",
  children,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center 
        cursor-pointer rounded-lg font-medium transition-colors 
        disabled:opacity-50 disabled:pointer-events-none 
        ${BUTTON_VARIANTS[variant]} ${BUTTON_SIZES[size]} ${className}
      `}
    >
      {children}
    </button>
  );
}
