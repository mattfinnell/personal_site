import { ChakraProvider, Container } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { FC } from "react";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { NavigationBarContainer } from "./components/Navigation/NavigationBar";

type AppProps = {};
const App: FC<AppProps> = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App">
          <NavigationBarContainer />
          <Container maxWidth="container.xl" marginTop="12" minHeight="75vh">
            <Home />
          </Container>
          <Footer />
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
