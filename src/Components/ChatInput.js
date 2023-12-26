const ChatInput = ({ query, setQuery, handleSubmit }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0">
      <form
        onSubmit={handleSubmit}
        className="flex space-x-2 p-4 rounded-t-xl max-w-4xl mx-auto bg-white border dark:bg-slate-800"
      >
        <input
          className="flex-1 border-none bg-transparent"
          placeholder="Enter message in ANY language..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-500 pt-1 pb-1 px-3 font-bold font-sans rounded-md text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
