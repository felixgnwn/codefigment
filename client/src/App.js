// client/src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Suggestion from "./components/Suggestion";
import ContentArea from "./components/Content-Area/ContentArea";

function App() {
  return (
    <div className="App">
      <div className="flex flex-row justify-between">
        <Navbar />
        <ContentArea />
        <Suggestion />
      </div>
    </div>
  );
}

export default App;
