import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@/components/ui/Modal";
import { Button } from "@/Components/ui/Button";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <main>
      <Button onClick={openModal}>Abrir</Button>
      <Modal isOpen={isModalOpen}>
        <ModalHeader
          title="Prueba de modal"
          onClose={closeModal}
        />
        <ModalBody>
          <p>prueba de Modal</p>
        </ModalBody>
        <ModalFooter onClose={closeModal}>
          <p>Forkseat 2026 prueba</p>
        </ModalFooter>
      </Modal>
    </main>
  );
} 

export default App;
