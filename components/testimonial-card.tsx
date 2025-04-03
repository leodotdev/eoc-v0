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
        "relative flex flex-col bg-card rounded-xl p-6 shadow-sm",
        className
      )}
    >
      {/* Decorative gradient background */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent" />

      {/* Content */}
      <div className="relative">
        {/* Quote icon */}
        <div className="mb-4">
          <Quote className="h-8 w-8 text-primary/30" />
        </div>

        {/* Quote text */}
        <blockquote className="mb-6">
          <p className="text-lg leading-relaxed text-card-foreground/80">
            "{quote}"
          </p>
        </blockquote>

        {/* Author info */}
        <div className="mt-auto border-t border-primary/10 pt-4">
          <div className="flex items-center gap-3">
            <div>
              <div className="font-medium text-card-foreground">{name}</div>
              <div className="mt-1 text-sm text-muted-foreground">{title}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
