import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChatReceitas from "./pages/ChatReceitas";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatReceitas />} />
    </Routes>
  );
}

export default App;