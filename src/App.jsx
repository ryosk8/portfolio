import React from "react";
import { BrowserRouter as Router, } from "react-router-dom";
import Header from "./components/Header.jsx"
export default function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
      </Router>

    </div>
  );
}

