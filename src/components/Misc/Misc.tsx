import {
  HStack,
  Heading,
  HeadingProps,
  Icon,
  SystemProps,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { ElementType, PropsWithChildren, SVGProps } from "react";

export function MainHeading(props: HeadingProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Heading
      as="h1"
      width="full"
      fontFamily="heading"
      fontSize={{ base: "4rem", md: "7rem" }}
      letterSpacing="tight"
      lineHeight="1"
      userSelect="none"
      color={colorMode === "light" ? "black" : "white"}
      marginBottom="4"
      {...props}
    />
  );
}

export function Emoji(props: PropsWithChildren<{ label: string }>) {
  const { label, ...rest } = props;
  return <span role="img" aria-label={label} {...rest} />;
}

type AchievementItemProps = {
  icon: any;
  children: any;
};
export function AchievementItem({ icon, children }: AchievementItemProps) {
  return (
    <HStack spacing="3">
      <Icon as={icon} fontSize="4xl" />
      <Text fontFamily="heading" fontSize="xl">
        {children}
      </Text>
    </HStack>
  );
}

export function GithubStarIcon(props: any) {
  return (
    <svg width="48" height="46" viewBox="0 0 48 46" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.9176 29.7467L39.1932 45.8086L24.4422 38.8682L9.2238 45.4284L10.2558 29.7497L0 17.7946L16.665 13.2167L24.081 0L32.6382 14.3097L48 17.5953L37.9176 29.7467Z"
        fill="#F6C247"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.0582 30.0257L37.0524 42.55L27.987 38.2848C27.8025 38.1982 27.6465 38.0589 27.5377 37.8837C27.4289 37.7085 27.372 37.5049 27.3738 37.2974C27.3853 35.953 27.3925 34.6085 27.3954 33.2641C27.3954 32.1049 27.0054 31.3456 26.568 30.9623C29.2818 30.6538 32.1288 29.6031 32.1288 24.8265C32.1288 23.4698 31.6572 22.3603 30.8766 21.4912C31.0026 21.1765 31.4202 19.9124 30.7554 18.2006C30.7554 18.2006 29.7354 17.8664 27.4104 19.4751C26.4168 19.1991 25.392 19.0583 24.3624 19.0562C23.3323 19.058 22.3071 19.1988 21.3132 19.4751C18.987 17.8664 17.9652 18.2006 17.9652 18.2006C17.3016 19.9118 17.7198 21.1765 17.8452 21.4912C17.0664 22.3603 16.5912 23.4698 16.5912 24.8265C16.5912 29.5921 19.434 30.6574 22.1388 30.9721C21.7908 31.2824 21.4764 31.8301 21.3654 32.6336C20.6718 32.9525 18.9078 33.5008 17.8212 31.6001C17.8212 31.6001 17.391 30.5924 16.1688 30.5041C16.1688 30.5041 14.9796 30.4882 16.0848 31.2597C16.0848 31.2597 16.8732 31.7222 17.2248 32.5637C17.2248 32.5637 17.9388 34.9814 21.327 34.2307C21.3306 34.8324 21.3354 36.267 21.339 37.3667C21.3396 37.5792 21.2787 37.7872 21.1639 37.9645C21.0491 38.1417 20.8856 38.2803 20.694 38.3627L11.4924 42.3298L12.3636 29.0916L11.7798 28.4108L3.65576 18.9391L17.2398 15.207L18.0978 14.9714L24.2394 4.02466L31.5012 16.1717L32.4072 16.3655L44.4378 18.9385L35.9868 29.1259L36.0588 30.0257"
        fill="#DE852E"
      />
    </svg>
  );
}

export function ChakraLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
      <path
        d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24Z"
        fill="url(#mask)"
      />
      <path
        d="M12.9914 25.324L29.351 9.07705C29.6565 8.77353 30.1485 9.14289 29.9421 9.521L23.8532 20.6809C23.7172 20.9297 23.8975 21.2334 24.181 21.2334H34.7036C35.0426 21.2334 35.2062 21.6486 34.9584 21.88L16.5189 39.0894C16.1883 39.3979 15.6962 38.9631 15.9616 38.5971L24.6905 26.5554C24.8694 26.3085 24.6931 25.9626 24.3881 25.9626H13.2546C12.9212 25.9626 12.7548 25.559 12.9914 25.324Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="mask"
          x1="24"
          y1="0"
          x2="24"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7BCBD4" />
          <stop offset="1" stopColor="#29C6B7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

type LinkItemProps = {
  icon: ElementType;
  children: string;
  href: string;
  iconColor?: SystemProps["color"];
};

export function LinkItem(props: LinkItemProps) {
  const { icon, children, href, iconColor = "brown.600" } = props;
  return (
    <HStack as="a" href={href} rel="noopener" target="_blank" spacing="3">
      <Icon aria-hidden as={icon} fontSize="xl" color={iconColor} />
      <Text
        textDecoration="underline"
        textDecorationThickness="1px"
        textUnderlineOffset="3px"
      >
        {children}
      </Text>
    </HStack>
  );
}
