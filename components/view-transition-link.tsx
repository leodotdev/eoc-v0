"use client";

import { forwardRef, HTMLAttributes } from "react";
import { useRouter } from "next/navigation";

interface ViewTransitionLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  prefetch?: boolean;
}

const ViewTransitionLink = forwardRef<
  HTMLAnchorElement,
  ViewTransitionLinkProps
>(({ href, children, className = "", prefetch, ...props }, ref) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Use the native browser startViewTransition API if available
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        router.push(href);
      });
    } else {
      router.push(href);
    }
  };

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
});

ViewTransitionLink.displayName = "ViewTransitionLink";

export { ViewTransitionLink };
