import * as React from "react";
import { Home, ChevronRight } from "lucide-react";
import { ViewTransitionLink } from "@/components/view-transition-link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItemProps {
  label: string;
  href: string;
  isCurrent?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItemProps[];
}

export function BreadcrumbNav({ items }: BreadcrumbProps) {
  return (
    <Breadcrumb className="text-white/80">
      <BreadcrumbList className="text-white/80">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <ViewTransitionLink
              href="/"
              className="flex items-center text-white/80 hover:text-white"
            >
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </ViewTransitionLink>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li
              className="flex items-center mx-2 text-white/70"
              aria-hidden="true"
            >
              <ChevronRight className="h-4 w-4" />
            </li>
            <BreadcrumbItem>
              {item.isCurrent ? (
                <BreadcrumbPage className="text-white font-medium">
                  {item.label}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <ViewTransitionLink
                    href={item.href}
                    className="text-white/80 hover:text-white hover:underline"
                  >
                    {item.label}
                  </ViewTransitionLink>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
