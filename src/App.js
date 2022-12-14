import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Single from "./pages/Single/Single";
import List from "./pages/List/List";
import New from "./pages/New/New";
import Login from "./pages/Login/Login";
import { ThemeProvider } from "@mui/material/styles";
import { useMainContext } from "./context/main_context";
import Layout from "./components/Layout/Layout";
import { productInputs, userInputs } from "./formSource";

function App() {
  const { theme, darkTheme } = useMainContext();
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="new" element={<New />} />
                <Route path="users">
                  <Route index element={<List />} />
                  <Route path=":userId" element={<Single />} />
                  <Route
                    path="new"
                    element={<New inputs={userInputs} title="Add New User" />}
                  />
                </Route>
                <Route path="products">
                  <Route index element={<List />} />
                  <Route path=":productId" element={<Single />} />
                  <Route
                    path="new"
                    element={
                      <New inputs={productInputs} title="Add New Product" />
                    }
                  />
                </Route>
              </Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
