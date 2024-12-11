import * as Dialog from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"
import clsx from "clsx"
import { ComponentPropsWithoutRef } from "react"
import s from "./ModalRadix.module.css"

type ModalSize = "lg" | "md" | "sm"

export type ModalRadixProps = {
  /** The controlled open state of the Modal */
  open: boolean
  /** Close modal handler */
  onClose: () => void
  /** Modal title */
  modalTitle: string
  /** 'sm' | 'md' | 'lg':
   * sm - 367px,
   * md - 532px,
   * lg - 764px.
   * Default: 'md'
   * For other values use className */
  size?: ModalSize
} & ComponentPropsWithoutRef<"div">

/** Ui kit ModalRadix component */
export const ModalRadix = ({
  modalTitle,
  className,
  onClose,
  open,
  children,
  size = "md",
  ...rest
}: ModalRadixProps) => {
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
