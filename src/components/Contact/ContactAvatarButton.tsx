import { Avatar, Button, Stack, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import profilePicture from "../../assets/profile_photo.png";
import ContactModal from "./ContactModal";

type ContactAvatarButtonProps = {};
const ContactAvatarButton: FC<ContactAvatarButtonProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify={"flex-end"}
      direction={"row"}
      spacing={6}
    >
      <Button
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
        onClick={onOpen}
      >
        <Avatar size={"sm"} src={profilePicture} />
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

export default ContactAvatarButton;
