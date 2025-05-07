import React, { useState, useEffect } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hi there! Im Lelouch, How can I assist you with buying or selling a home today?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // This is a simple function simulating a response from the bot
  const handleBotResponse = (userInput) => {
    let response = "";

    // Handle greetings
    if (/hi|hello|hey|greetings/i.test(userInput)) {
      response = "Hello! How can I assist you today?";
    } else if (/good morning/i.test(userInput)) {
      response = "Good morning! How can I help you today?";
    } else if (/good afternoon/i.test(userInput)) {
      response = "Good afternoon! How can I help you today?";
    } else if (/good evening/i.test(userInput)) {
      response = "Good evening! How can I help you today?";
    }

    // Handle thanking
    else if (/thanks|thank you|thankyou/i.test(userInput)) {
      response = "You're very welcome! Let me know if you need anything else.";
    }

    // Handle price/buy inquiries
    else if (/buy|purchase|cost|price/i.test(userInput)) {
      response =
        "I can help you with buying a property! Which property are you interested in? Or you can ask for pricing details.";
    } else if (/house|home|property/i.test(userInput)) {
      response =
        "We have a variety of homes and penthouses available for sale. Please specify the type you're looking for!";
    } else if (/contact|information/i.test(userInput)) {
      response =
        "You can contact our sales team at: sales@houseseller.com or call 0794927995.";
    } else if (/process|steps/i.test(userInput)) {
      response =
        "The process to buy a house is simple! 1. Browse properties. 2. Contact the seller. 3. Finalize the payment.";
    } else if (/services|website/i.test(userInput)) {
      response =
        "We connect the buyer of the house to the respective seller through this platform.";
    } else if (
      /how are you|how's it going|how are you doing/i.test(userInput)
    ) {
      response =
        "I'm doing great! Thanks for asking. How can I assist you today?";
    } else if (/help|assist|guide/i.test(userInput)) {
      response =
        "I'm here to help! You can ask me about property listings, pricing, and the buying process. Just let me know your preferences!";
    } else if (/how do i pay|how to pay|pay/i.test(userInput)) {
      response =
        "click on the buy button on the item you are interested in";
    } else {
      response = `Sorry, I didn't quite catch that. Could you please clarify?`;
    }

    return response;
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);

    // Simulate bot reply
    setIsLoading(true);
    setTimeout(() => {
      const botReply = { text: handleBotResponse(input), sender: "bot" };
      setMessages((prev) => [...prev, botReply]);
      setIsLoading(false);
    }, 1000);

    setInput("");
  };

  // Scroll to the latest message
  useEffect(() => {
    const chatWindow = document.querySelector(".chat-window");
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, [messages]);

  return (
    
    <div className="chatbot card shadow m-5">
      <div className="chat-window ">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <div className="chat-message bot">
            <span className="typing-indicator">...</span>
            Bot is typing...
          </div>
        )}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask me anything about the houses or process..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
