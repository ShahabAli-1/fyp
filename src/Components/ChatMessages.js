import { MessageCircleIcon } from "lucide-react";
import UserAvatar from "./UserAvatar";
import ew_chat_logo from "../logos/ew-chat-black.png";
// const messages = [
//   {
//     input: "Hello!",
//     isSender: true,
//   },
//   {
//     input: "Hello! How are you?",
//     isSender: false,
//   },
// ];
const ChatMessages = ({ messages }) => {
  return (
    <div className="p-5">
      {/* {messages?.length === 0 && (
        <div className="flex flex-col text-center justify-center items-center p-20 rounded-xl space-y-2 bg-indigo-400 text-white font-extralight">
          <MessageCircleIcon className="h-10 w-10" />
          <h2>
            <span className="font-bold">Tyo</span> &{" "}
            <span className="font-bold">
              Send your first message in ANY language
            </span>{" "}
            below to get started!
          </h2>
          <p>The AI will auto-detect & translate it all for you</p>
        </div>
      )} */}
      {messages?.map((message) => {
        // const isSender = "123";
        return (
          <div key={message.id} className="flex my-2 items-end">
            <div
              className={`flex flex-col relative space-y-2 p-4 w-fit line-clamp-1 mx-2 rounded-lg ${
                message.isSender
                  ? "bg-green-500 text-white rounded-br-none ml-auto"
                  : "bg-gray-100 dark:text-gray-100 dark:bg-slate-700 rounded-bl-none"
              }`}
            >
              <p
                className={`text-xs italic font-extralight line-clamp-1 ${
                  message.isSender ? "text-right" : "text-left"
                }`}
              ></p>
              <div className="flex space-x-2">
                <p>{message.input}</p>
                {/* {!message.translated && <LoadingSpinner />} */}
              </div>
            </div>
            {/* <UserAvatar
              name={message.user.name}
              image={message.user.image}
              className={`${!isSender && "-order-1"}`}
            /> */}
            <UserAvatar
              size={"small"}
              image={
                message.isSender
                  ? "https://cdn.pixabay.com/photo/2015/07/08/07/41/tree-835455_640.jpg"
                  : ew_chat_logo
              }
              className={`${!message.isSender && "-order-1"}`}
            />
          </div>
        );
      })}
      {/* <div ref={messagesEndRef}></div> */}
    </div>
  );
};

export default ChatMessages;
