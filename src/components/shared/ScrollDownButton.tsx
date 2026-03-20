import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollDownButtonProps {
  targetId: string;
  className?: string;
}

export function ScrollDownButton({ targetId, className }: ScrollDownButtonProps) {
  const handleScroll = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleScroll}
      aria-label="Rolar para baixo"
      className={cn(
        "group flex items-center justify-center",
        "w-12 h-12 sm:w-14 sm:h-14",
        "rounded-full",
        "bg-accent/10 hover:bg-accent/20",
        "border border-accent/30 hover:border-accent/50",
        "backdrop-blur-sm",
        "transition-all duration-300 ease-out",
        "hover:scale-110 hover:shadow-lg hover:shadow-accent/20",
        "focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background",
        "cursor-pointer",
        className
      )}
    >
      <ChevronDown 
        className="w-5 h-5 sm:w-6 sm:h-6 text-accent transition-transform duration-300 group-hover:translate-y-1" 
      />
    </button>
  );
}
