import { Clock, Users, Sparkles } from "lucide-react";

const iconMap = {
  clock: Clock,
  users: Users,
  sparkles: Sparkles,
};

export function CardFeature({ icon, title, description }) {
  const Icon = iconMap[icon];

  return (
    <div className="group relative flex items-center gap-2.5 rounded-xl bg-white border border-stone-200 px-4 py-3 shadow-xs transition-shadow hover:shadow-md">
      <div className="shrink-0 size-8 rounded-lg bg-amber-100 flex items-center justify-center">
        <Icon className="size-4 text-amber-600" />
      </div>
      <span className="text-sm font-medium text-stone-700 whitespace-nowrap">
        {title}
      </span>

      <div
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-10
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-500"
      >
        <div className="bg-stone-800 text-white text-xs rounded-lg px-3 py-2 leading-relaxed whitespace-nowrap shadow-lg">
          {description}
          <div className="absolute top-full left-1/2 -translate-x-1/2 size-0 border-x-4 border-x-transparent border-t-4 border-t-stone-800" />
        </div>
      </div>
    </div>
  );
}
