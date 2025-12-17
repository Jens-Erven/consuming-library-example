import Button from "@mui/material/Button";
import React from "react";

export interface MaterialButtonProps {
  children: React.ReactNode;
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
  onClick?: () => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}

export const MaterialButton: React.FC<MaterialButtonProps> = ({
  children,
  variant = "contained",
  color = "primary",
  onClick,
  disabled = false,
  size = "medium",
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      disabled={disabled}
      size={size}
    >
      {children}
    </Button>
  );
};
