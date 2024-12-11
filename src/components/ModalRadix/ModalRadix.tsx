import * as Dialog from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"
import clsx from "clsx"
import { ComponentPropsWithoutRef } from "react"
import s from "./ModalRadix.module.css"

type ModalSize = "lg" | "md" | "sm"

type Props = {
  open: boolean
  onClose: () => void
  modalTitle: string
  size?: ModalSize
} & ComponentPropsWithoutRef<"div">

export const ModalRadix = ({ modalTitle, className, onClose, open, children, size = "md", ...rest }: Props) => {
  return (
    <Dialog.Root open={open} onOpenChange={onClose} {...rest}>
      <Dialog.Portal>
        <Dialog.Overlay className={s.Overlay} />
        <Dialog.Content className={clsx(s.Content, s[size], className)}>
          <Dialog.Title className={s.Title}>{modalTitle}</Dialog.Title>
          <hr />
          {children}
          <Dialog.Close asChild>
            <button className={s.IconButton} aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
