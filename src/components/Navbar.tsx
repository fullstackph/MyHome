import {
  Box,
  Flex,
  Text,
  IconButton,
  Image,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  GiHamburgerMenu,
  BsChevronUp,
  BsChevronDown,
  GrClose,
} from "@/utils/icons";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={{ base: "60px", md: "120px" }}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <GrClose size={15} /> : <GiHamburgerMenu size={15} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image src="header-logo.png" alt="logo" />
        </Flex>

        <Stack
          flex={{ base: 1, md: 1 }}
          justify={"flex-end"}
          align={"center"}
          direction={"row"}
          spacing={6}
        >
          <Flex display={{ base: "none", md: "flex" }}>
            <DesktopNav />
          </Flex>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"12px"}
            fontWeight={600}
            letterSpacing={1.2}
            textTransform={"uppercase"}
            color={"white"}
            bg={"#BC986B"}
            href={"#"}
            border="1px solid #BC986B"
            borderRadius="0"
            _hover={{
              color: "#000",
              bg: "#fdde52",
              border: "1px solid #fdde52",
            }}
          >
            Submit Property
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={8} whiteSpace="nowrap">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"12px"}
                letterSpacing={1.2}
                textTransform={"uppercase"}
                fontWeight={700}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={BsChevronUp} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={BsChevronDown}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
  },
  {
    label: "Properties",
    children: [
      {
        label: "Properties Grid",
        href: "#",
      },
      {
        label: "Properties Grid 2",
        href: "#",
      },
      { label: "Properties List", href: "#" },
      {
        label: "Submit Property",
        href: "#",
      },
      {
        label: "Single Property",
        href: "#",
      },
    ],
  },
  {
    label: "About Us",
    href: "#",
  },
  {
    label: "Blog",
    children: [
      {
        label: "Blog Post",
        href: "#",
      },
    ],
  },
  {
    label: "Pages",
    children: [
      {
        label: "Pages 1",
        children: [
          {
            label: "Agents",
            href: "#",
          },
          {
            label: "Agent Single Page",
            href: "#",
          },
          {
            label: "Careers",
            href: "#",
          },
          {
            label: "Gallery",
            href: "#",
          },
        ],
      },
      {
        label: "Pages 2",
        children: [
          {
            label: "Search Results",
            href: "#",
          },
          {
            label: "Coming Soon",
            href: "#",
          },
          {
            label: "404",
            href: "#",
          },
          {
            label: "Privacy Policy",
            href: "#",
          },
        ],
      },
      {
        label: "Elements",
        children: [
          {
            label: "Typography",
            href: "#",
          },
          {
            label: "Buttons",
            href: "#",
          },
          {
            label: "Forms",
            href: "#",
          },
          {
            label: "Tabs and accordions",
            href: "#",
          },
          {
            label: "Progress bars",
            href: "#",
          },
          {
            label: "Tables",
            href: "#",
          },
          {
            label: "Grid System",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    label: "Conatct Us",
    href: "#",
  },
];
