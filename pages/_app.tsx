import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import theme from "../src/theme";
import Router from "next/router";
import nprogress from "nprogress";
import "../src/theme/style.css";
import "reactjs-popup/dist/index.css";


Router.events.on("routeChangeStart", nprogress.start);
Router.events.on("routeChangeError", nprogress.done);
Router.events.on("routeChangeComplete", nprogress.done);

nprogress.configure({
  showSpinner: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const [domLoaded, setDomLoaded] = useState(false); //quick fix for persisted hydration error
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  }

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
