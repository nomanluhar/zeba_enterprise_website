"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  variant?: "default" | "feature" | "compact";
  className?: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  href,
  variant = "default",
  className = "",
}: ServiceCardProps) => {
  const baseClasses =
    "group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg";

  const variantClasses = {
    default:
      "bg-white p-6 border border-gray-200 hover:border-primary/20 hover:-translate-y-1 shadow-md",
    feature:
      "bg-white p-6 border border-gray-100 hover:border-primary/30 hover:scale-105 shadow-lg",
    compact:
      "bg-white p-5 border border-gray-200 hover:border-primary/20 hover:shadow-md",
  };

  const iconSizes = {
    default: "w-10 h-10",
    feature: "w-12 h-12",
    compact: "w-8 h-8",
  };

  const titleSizes = {
    default: "text-lg",
    feature: "text-xl",
    compact: "text-base",
  };

  const content = (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full -translate-y-16 translate-x-16" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div
          className={`${iconSizes[variant]} text-primary mb-3 group-hover:text-secondary transition-colors duration-300`}
        >
          {icon}
        </div>

        {/* Title */}
        <h3
          className={`${titleSizes[variant]} font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300 leading-tight`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-gray-600 leading-relaxed mb-3 text-sm 
             line-clamp-3 max-w-xs"
        >
          {description}
        </p>

        {/* Arrow Icon for Links */}
        {href && (
          <div className="flex items-center text-primary font-medium group-hover:text-secondary transition-colors duration-300">
            <span className="text-sm">Learn More</span>
            <ArrowRight
              size={16}
              className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
            />
          </div>
        )}
      </div>

      {/* Hover Effect Line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
    </div>
  );

  // If href is provided, wrap in Link
  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
};

export default ServiceCard;
