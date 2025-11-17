"use client";

import { useParams } from "next/navigation";
import { type ReactNode, useEffect, useState } from "react";
import { cn } from "fumadocs-ui/utils/cn";
import Image from "next/image";

export function Body({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  const mode = useMode();

  return (
    <body className={cn(mode, "relative flex min-h-screen flex-col")}>
      {children}
    </body>
  );
}

export function useMode(): string | undefined {
  const { slug } = useParams();
  return Array.isArray(slug) && slug.length > 0 ? slug[0] : undefined;
}

export function FumadocsIcon(props: React.SVGProps<SVGSVGElement>) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      if (typeof window !== "undefined") {
        const isDarkMode =
          document.documentElement.classList.contains("dark") ||
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDark(isDarkMode);
      }
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    if (typeof window !== "undefined") {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Image
      src={isDark ? "/light-moydus.svg" : "/dark-moydus.svg"}
      alt="Moydus Logo"
      width={80}
      height={80}
      className={cn("object-contain", props.className)}
      style={props.style}
    />
  );
}
