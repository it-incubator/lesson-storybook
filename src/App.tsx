import { useState } from "react"
import { Button } from "./components/Button/Button.tsx"
import { ModalRadix } from "./components/ModalRadix/ModalRadix.tsx"

export const App = () => {
  const [showModal, setShowModal] = useState(false)

  const openModalHandler = () => {
    setShowModal(true)
  }

  const closeModalHandler = () => {
    setShowModal(false)
  }

  return (
    <>
      <Button variant={"primary"} onClick={openModalHandler}>
        Open modal
      </Button>
      <ModalRadix open={showModal} onClose={closeModalHandler} modalTitle={"Title"}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <Button variant={"secondary"} onClick={closeModalHandler}>
          Accept
        </Button>
      </ModalRadix>
    </>
  )
}
