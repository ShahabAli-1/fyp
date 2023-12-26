import ChatMessages from "../../Components/ChatMessages";
import ChatInput from "../../Components/ChatInput";
import logohammer from "../../logos/ew_hammer.png";
import { useState } from "react";
import axios from "axios";
import Header from "../../Components/Header";
const Chat = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        input: query,
        isSender: true,
      },
    ]);
    const ew_response = await axios.post(
      "http://127.0.0.1:5080",
      {
        question: query,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        input: ew_response.data.answer,
        isSender: false,
      },
    ]);
    console.log(ew_response);
  };
  return (
    <>
      <Header />
      <div className="w-max-2xl flex flex-col items-center border border-t-gray-100 border-b-gray-100">
        <img src={logohammer} className="h-36 w-32 object-cover" />
        <h1 className="font-extrabold text-4xl font-inter mb-4">
          How can I help you today?
        </h1>
      </div>
      <div className="flex-1">
        <ChatMessages
          chatId={12332323}
          //   session={session}
          messages={messages}
        />
      </div>
      <ChatInput
        chatId={1}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Chat;
