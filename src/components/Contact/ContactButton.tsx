import { Button, Stack, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import ContactModal from "./ContactModal";

type ContactButtonProps = {};
const ContactButton: FC<ContactButtonProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify={"flex-end"}
      direction={"row"}
      spacing={6}
    >
      <Button
        as={"a"}
        display={{ base: "none", md: "inline-flex" }}
        fontSize={"sm"}
        fontWeight={600}
        color={"white"}
        bg={"green.400"}
        href={"#"}
        onClick={onOpen}
        _hover={{
          bg: "green.300",
        }}
      >
        Contact
      </Button>
      <ContactModal
        isOpen={isOpen}
        onClose={onClose}
        onSuccess={() => {
          onClose();
        }}
      />
    </Stack>
  );
};

export default ContactButton;
