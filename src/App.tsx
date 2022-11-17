import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import AppMenu from "./components/AppMenu";
import Browse from "./routes/Browse";
import Feed from "./routes/Feed";
import Lookup from "./routes/Lookup";
import NoMatch from "./routes/NoMatch";

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="browse" element={<Browse />} />
          <Route path="lookup/:id" element={<Lookup />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <AppMenu />
      <div style={{ padding: "5em 1em 5em 1em" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
