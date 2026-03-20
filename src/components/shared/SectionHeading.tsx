import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  children?: ReactNode;
}

export function SectionHeading({ title, subtitle, centered = false, children }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className={`heading-line ${centered ? "inline-block" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
