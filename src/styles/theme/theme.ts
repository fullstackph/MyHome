import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
    mono: "Menlo, monospace",
    navbar: "Roboto, sans-serif", // Add the "Roboto" font for the navbar
  },
});

export default theme;
