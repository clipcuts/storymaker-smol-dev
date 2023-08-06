import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      100: "#E5E7EB",
      200: "#9CA3AF",
      300: "#6B7280",
      400: "#4B5563",
      500: "#374151",
      600: "#1F2937",
      700: "#111827",
    },
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      sizes: {
        sm: {
          fontSize: "12px",
          padding: "16px",
        },
        md: {
          fontSize: "16px",
          padding: "24px",
        },
      },
      variants: {
        solid: {
          bg: "primary.500",
          color: "white",
          _hover: {
            bg: "primary.600",
          },
        },
      },
      defaultProps: {
        size: "md",
        variant: "solid",
      },
    },
  },
});

export default theme;