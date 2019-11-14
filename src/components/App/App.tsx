import React from "react";
import "./App.css";
import Sidebar from "../Sidebar";
import Body from "../Body";
import Footer from "../Footer";
import Autosizer from "../Autosizer";

const App: React.FC = () => {
  return (
    <Autosizer>
      {({ width, height, hasComputed }) => {
        console.log({ width, height });
        return (
          <div className="App" style={{ width, height }}>
            <div className="App-Grid">
              <Sidebar />
              <Body />
            </div>
            <Footer />
          </div>
        );
      }}
    </Autosizer>
  );
};

export default App;
