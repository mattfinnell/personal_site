import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC } from "react";
import ContactForm from "./ContactForm";

type OptionalLoginModalProps = {
  onSuccess?: () => void;
  onFailure?: () => void;
};

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
} & OptionalLoginModalProps;

const ContactModal: FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxWidth="800px">
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ContactForm onSuccess={onClose} onFailure={() => {}} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;
