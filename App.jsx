


import React from "react";
import Chatbot from "./Chatbot";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xl p-4">
        <h1 className="text-3xl font-bold text-center mb-4 text-indigo-700">
          🏛️ Museum Ticket Chatbot
        </h1>
        <Chatbot />
      </div>
    </div>
  );
};

export default App;
