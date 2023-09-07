import { Avatar, Button, Stack } from "@chakra-ui/react";
import { FC } from "react";
import profilePicture from "../../assets/profile_photo.png";

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
        onClick={() => {}}
      >
        <Avatar size={"sm"} src={profilePicture} />
      </Button>
    </Stack>
  );
};

export default ContactAvatarButton;
