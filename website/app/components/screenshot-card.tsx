import Image from "next/image";
import React from "react";

interface ScreenshotCardProps {
  title: string;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export function ScreenshotCard({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}: ScreenshotCardProps) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-8 items-center border border-border rounded-xl p-8 bg-muted/50 dark:bg-accent/50 hover:bg-muted dark:hover:bg-accent transition-colors duration-300`}
    >
      <div className="md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border shadow-lg">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
