import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { MaterialButton } from "../components/MaterialButton/MaterialButton";

const meta = {
  title: "Components/MaterialButton",
  component: MaterialButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "outlined", "contained"],
      description: "The variant of the button",
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "error", "info", "warning"],
      description: "The color theme of the button",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "The size of the button",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof MaterialButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Contained Button
export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "contained",
    color: "primary",
  },
};

// Secondary Contained Button
export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "contained",
    color: "secondary",
  },
};

// Outlined Variants
export const OutlinedPrimary: Story = {
  args: {
    children: "Outlined Primary",
    variant: "outlined",
    color: "primary",
  },
};

export const OutlinedSecondary: Story = {
  args: {
    children: "Outlined Secondary",
    variant: "outlined",
    color: "secondary",
  },
};

// Text Variants
export const TextPrimary: Story = {
  args: {
    children: "Text Primary",
    variant: "text",
    color: "primary",
  },
};

export const TextSecondary: Story = {
  args: {
    children: "Text Secondary",
    variant: "text",
    color: "secondary",
  },
};

// Color Variants
export const Success: Story = {
  args: {
    children: "Success Button",
    variant: "contained",
    color: "success",
  },
};

export const Error: Story = {
  args: {
    children: "Error Button",
    variant: "contained",
    color: "error",
  },
};

export const Info: Story = {
  args: {
    children: "Info Button",
    variant: "contained",
    color: "info",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning Button",
    variant: "contained",
    color: "warning",
  },
};

// Size Variants
export const Small: Story = {
  args: {
    children: "Small Button",
    variant: "contained",
    color: "primary",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium Button",
    variant: "contained",
    color: "primary",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    variant: "contained",
    color: "primary",
    size: "large",
  },
};

// Disabled State
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    variant: "contained",
    color: "primary",
    disabled: true,
  },
};

export const DisabledOutlined: Story = {
  args: {
    children: "Disabled Outlined",
    variant: "outlined",
    color: "primary",
    disabled: true,
  },
};
