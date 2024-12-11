import { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button.tsx"

const meta = {
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

/** Primary variant. Used as 'default'*/
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary button",
  },
}

/** Secondary variant */
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary button",
  },
}

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Outlined button",
  },
}

export const ButtonAsLink: Story = {
  args: {
    variant: "primary",
    asChild: true,
    children: <a href={"https://it-incubator.io"}>it-incubator</a>,
  },
}
