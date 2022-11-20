import React, { createContext, useContext, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { ApiKeyModalForm } from "./components/ApiKey";
import AppMenu from "./components/AppMenu";
import { AppContextProvider } from "./providers/AppContextProvider";
import Browse from "./routes/Browse";
import Feed from "./routes/Feed";
import Lookup from "./routes/Lookup";
import NoMatch from "./routes/NoMatch";
import Playground from "./routes/Playground";

function App() {
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="browse" element={<Browse />} />
          <Route path="lookup/:id" element={<Lookup />} />
          <Route path="playground" element={<Playground />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </AppContextProvider>
  );
}

function Layout() {
  return (
    <>
      <AppMenu />
      <div style={{ padding: "5em 1em 5em 1em" }}>
        <Outlet />
      </div>
      <ApiKeyModalForm />
    </>
  );
}

export default App;
