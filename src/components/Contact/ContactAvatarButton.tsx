import { Avatar, Button, Stack } from "@chakra-ui/react";
import { FC } from "react";
import profilePicture from "../../assets/ProfilePhoto.webp";

type ContactAvatarButtonProps = {};
const ContactAvatarButton: FC<ContactAvatarButtonProps> = () => {
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
        aria-label="Matt"
        onClick={() => {}}
      >
        <Avatar
          size={"sm"}
          src={profilePicture}
          iconLabel="Avatar"
          getInitials={(_) => "MF"}
        />
      </Button>
    </Stack>
  );
};

export default ContactAvatarButton;
