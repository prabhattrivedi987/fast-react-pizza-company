import React from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";
import Header from "./Header";
// import Pizza from "./pizza";
import Footer from "./footer";
import Menu from "./menu";

function App() {
  return (
    <React.Fragment className="container">
      <Header />
      <Menu />
      <Footer />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
