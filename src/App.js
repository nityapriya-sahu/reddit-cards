// src/App.js
import React from "react";
import RedditCard from "./components/RedditCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          margin: "20px 0",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Reddit Cards
      </h1>
      <RedditCard />
      <Footer />
    </div>
  );
}

export default App;
