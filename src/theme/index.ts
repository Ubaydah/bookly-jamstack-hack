import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const globalStyles = {
  styles: {
    global: {
      "html, body": {
        scrollBehavior: "smooth",
        padding: 0,
        margin: 0,
      },
      a: {
        color: "inherit",
        textDecoration: "none",
      },
      " *, *::after, *::before ": {
        boxSizing: "border-box",
      },
    },
    
  },
};

const theme = extendTheme({
  ...globalStyles,
  breakpoints: breakpoints,
});

export default theme;
