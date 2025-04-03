import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  title,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col bg-card rounded-xl p-6 border border-primary/10 h-full",
        className
      )}
    >
      {/* Decorative gradient background */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent" />

      {/* Content */}
      <div className="relative flex flex-col h-full">
        {/* Quote icon */}
        <div>
          <Quote className="h-8 w-8 text-primary/30" />
        </div>

        {/* Quote text */}
        <blockquote className="mt-4 flex-1">
          <p className="text-lg leading-relaxed text-card-foreground/80">
            "{quote}"
          </p>
        </blockquote>

        {/* Author info */}
        <div className="mt-6 border-t border-primary/10 pt-4">
          <div className="flex flex-col gap-1">
            <div className="font-medium text-card-foreground">{name}</div>
            <div className="text-sm text-muted-foreground">{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
