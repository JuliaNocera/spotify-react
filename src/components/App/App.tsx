import React from "react";
import "./App.css";
import { useRoutes } from "hookrouter";

import Sidebar from "../Sidebar";
import Body from "../Body";
import Footer from "../Footer";
import Autosizer from "../Autosizer";
import { routeObject } from "../../lib/routes";

const App: React.FC = () => {
  const Route = useRoutes(routeObject);

  return (
    <Autosizer>
      {({ width, height, hasComputed }) => {
        return (
          <div style={{ width, height }}>
            <div className="jan-App" style={{ width, height }}>
              <div className="jan-App-Grid">
                <Sidebar />
                <Body>{Route}</Body>
              </div>
              <Footer />
            </div>
          </div>
        );
      }}
    </Autosizer>
  );
};

export default App;
