import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC } from "react";

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
      <ModalContent>
        <ModalHeader>Contact</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex bg="gray.100" align="center" justify="center" h="75vh">
            <Box bg="white" p={4} rounded="md" w={64}></Box>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;
