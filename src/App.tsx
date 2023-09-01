import { ChakraProvider, Container } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { FC } from "react";
import { NavigationBarContainer } from "./components/Navigation/NavigationBar";
import { routes } from "./components/Navigation/routes";

type AppProps = {};
const App: FC<AppProps> = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App">
          <NavigationBarContainer />
          <Container maxWidth="container.xl" marginTop="12">
            <Routes>
              {routes.map((route) => (
                <Route path={route.path} Component={route.component} />
              ))}
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
