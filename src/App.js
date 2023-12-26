import Chat from "./screens/Chat/Chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Chat/Login";
function App() {
  return (
    <BrowserRouter>
      <div className="h-screen">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
