import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant style
   */
  variant?: "primary" | "secondary" | "outline";
  /**
   * Button size
   */
  size?: "sm" | "md" | "lg";
  /**
   * Button content
   */
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", children, className = "", ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles = {
      primary:
        "bg-primary text-primary-contrast hover:opacity-90 focus:ring-primary",
      secondary:
        "bg-secondary text-secondary-contrast hover:opacity-90 focus:ring-secondary",
      outline:
        "border-2 border-primary text-primary hover:bg-primary hover:text-primary-contrast focus:ring-primary",
    };

    const sizeStyles = {
      sm: "px-3 py-1.5 text-sm rounded-[var(--radius-default)]",
      md: "px-4 py-2 text-base rounded-[var(--radius-default)]",
      lg: "px-6 py-3 text-lg rounded-[var(--radius-default)]",
    };

    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
