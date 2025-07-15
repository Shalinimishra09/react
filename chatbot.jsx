import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! 👋 Welcome to the Museum. How many tickets would you like to book?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: "user", text: input }];

    // Simple ticket booking logic
    let botReply = "Sorry, I didn’t get that.";

    const num = parseInt(input);
    if (!isNaN(num) && num > 0) {
      botReply = `Great! ✅ ${num} ticket(s) booked. See you at the museum! 🎫`;
    } else if (input.toLowerCase().includes("hi") || input.toLowerCase().includes("hello")) {
      botReply = "Hello there! 👋 How many tickets would you like to book?";
    }

    setMessages([...newMessages, { from: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 h-[500px] flex flex-col">
      <div className="flex-1 overflow-y-auto space-y-2 mb-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-md max-w-xs ${
              msg.from === "bot" ? "bg-indigo-100 self-start" : "bg-green-100 self-end"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
