import { Meta, StoryObj } from "@storybook/react"
import { ModalRadix } from "./ModalRadix.tsx"

const meta = {
  component: ModalRadix,
  tags: ["autodocs"],
} satisfies Meta<typeof ModalRadix>

export default meta
type Story = StoryObj<typeof ModalRadix>

/** BaseModal */
export const BaseModal: Story = {
  args: {
    open: false,
    onClose: () => console.log("onClose"),
    modalTitle: "Modal title",
    children: <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, error.</div>,
  },
}
