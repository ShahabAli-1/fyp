import Chat from "./screens/Chat/Chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Chat/Login";
function App() {
  return (
    <BrowserRouter>
      <div className="h-screen">
        <Routes>
          <Route path="/" element={<Login />}>
            <Route index element={<Chat />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
