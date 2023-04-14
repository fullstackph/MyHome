import { useState, useRef } from "react";
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
  Portal,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  GiHamburgerMenu,
  BiLogIn,
  HiPhone,
  BsChevronDown,
  HiOutlineEnvelope,
  IoSquareSharp,
  AiOutlineArrowLeft,
  RxDotsVertical,
} from "@/utils/icons";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const initRef = useRef();

  return (
    <Box px={{ base: "1", md: "50", lg: "350" }}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={{ base: "60px", md: "120px" }}
        py={{ base: 2 }}
        px={{ base: 2 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        justifyContent="space-between"
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <Icon as={AiOutlineArrowLeft} boxSize="25px" />
              ) : (
                <Icon as={GiHamburgerMenu} boxSize="25px" />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
          <Image
            display={{ base: "block", md: "none" }}
            src="header-logo.png"
            alt="logo"
          />
        </Flex>

        <Flex
          flex={{ base: 1 }}
          h="100%"
          m="auto"
          justify="start"
          display={{ base: "none", md: "flex" }}
        >
          <Image src="header-logo.png" alt="logo" />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: "end", md: "start" }}>
          <Icon
            display={{ base: "block", md: "none" }}
            color="#BC986B"
            as={BiLogIn}
            h={7}
            w={7}
            m="auto 12px"
          />
          <Popover
            closeOnBlur={false}
            placement="bottom-end"
            initialFocusRef={initRef.current}
          >
            {({ isOpen, onClose }) => (
              <>
                <PopoverTrigger>
                  <IconButton
                    icon={
                      <Icon
                        display={{ base: "block", md: "none" }}
                        as={RxDotsVertical}
                        h={7}
                        w={7}
                        m="auto"
                      />
                    }
                    variant={"ghost"}
                    aria-label={"Toggle Navigation"}
                  />
                </PopoverTrigger>
                <Portal>
                  <PopoverContent
                    zIndex="200"
                    maxW="max-content"
                    borderRadius={0}
                    backgroundColor="#F3F4F9"
                    lineHeight={2}
                  >
                    <PopoverBody py={5} px={4}>
                      <Flex letterSpacing={2}>
                        <Icon color="#BC986B" as={HiPhone} mr={2} />
                        <Text>1-800-1234-567</Text>
                      </Flex>
                      <Flex alignItems="center">
                        <Icon color="#BC986B" as={HiOutlineEnvelope} mr={2} />
                        <Text>info@demolink.org</Text>
                      </Flex>
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </>
            )}
          </Popover>
        </Flex>

        <Stack
          flex={{ base: 1, md: 1 }}
          justify={"flex-end"}
          align={"center"}
          direction={"row"}
          spacing={8}
          display={{ base: "none", md: "flex" }}
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
    <Stack direction={"row"} spacing={12} whiteSpace="nowrap">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          {navItem.label === "Pages" ? (
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
                    color: "#BC986B",
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>
              {navItem.children && (
                <PopoverContent
                  border={0}
                  bg={popoverContentBgColor}
                  p={4}
                  borderRadius={"0"}
                  letterSpacing={1}
                  w={"1200px"}
                  top="50%"
                  left="26%"
                  boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.24)"
                >
                  <Stack>
                    <Flex
                      justifyContent={"space-between"}
                      px={"15px"}
                      pt={"10px"}
                    >
                      {navItem.children.map((child, index) => (
                        <>
                          <Box w={"full"} key={child.label}>
                            <DesktopSubNavPages {...child} />
                          </Box>
                          {index < 2 && (
                            <Box
                              w={"4px"}
                              bg={
                                "linear-gradient(to top, #ffffff, #f8f8f8, #f2f2f2, #ebebeb, #e5e5e5, #e5e5e5, #e5e5e5, #e5e5e5, #ebebeb, #f2f2f2, #f8f8f8, #ffffff);"
                              }
                            ></Box>
                          )}
                        </>
                      ))}
                    </Flex>
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          ) : (
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  w={"max-content"}
                  href={navItem.href ?? "#"}
                  fontSize={"12px"}
                  letterSpacing={1.2}
                  textTransform={"uppercase"}
                  fontWeight={700}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: "#BC986B",
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>
              {navItem.children && (
                <PopoverContent
                  border={0}
                  bg={popoverContentBgColor}
                  p={[1, 4]}
                  color={"#444"}
                  borderRadius={"0"}
                  maxW={"250px"}
                  letterSpacing={1}
                  boxShadow="0px 1px 4px 0px rgba(0, 0, 0, 0.24)"
                >
                  <Stack>
                    {navItem.children.map((child, index) => (
                      <Box
                        mt={"0"}
                        key={index}
                        pb={
                          index === navItem?.children?.length! - 1
                            ? "none"
                            : "8px"
                        }
                        borderBottom={
                          index === navItem?.children?.length! - 1
                            ? "none"
                            : "1px solid #e1e1e1"
                        }
                      >
                        <DesktopSubNav {...child} />
                      </Box>
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          )}
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={[1, 2]}
      rounded={"md"}
      _hover={{ textDecoration: "none", color: "#bc986b" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Icon h={"10px"} color={"#c2d3f2"} as={IoSquareSharp} />
          <Text
            fontSize={"14px"}
            transition={"all .3s ease"}
            fontWeight={500}
            ml={"10px"}
          >
            {label}
          </Text>
        </Flex>
      </Stack>
    </Link>
  );
};

const DesktopSubNavPages = ({ label, href, children }: NavItem) => {
  const [keyLabel, setKeyLabel] = useState(label);

  return (
    <Box display={"block"} w={"full"} mx={"20px"} key={label}>
      <Stack direction={"column"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            fontWeight={700}
            fontSize={"18px"}
            textTransform={"uppercase"}
          >
            {label}
          </Text>
          <Box w={"full"}>
            {children?.map((child, index) => (
              <Flex key={index} alignItems={"center"} my={"20px"} role="group">
                <Icon h={"10px"} color={"#c2d3f2"} as={IoSquareSharp} />
                <Link
                  fontSize={"15px"}
                  color={"#444"}
                  href={href}
                  ml={"10px"}
                  _groupHover={{ color: "#bc986b", textDecoration: "none" }}
                >
                  {child.label}
                </Link>
              </Flex>
            ))}
          </Box>
        </Box>
      </Stack>
    </Box>
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
    label: "Contact Us",
    href: "#",
  },
];
