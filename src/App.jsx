import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Create from "./Create";
import Home from "./Home";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blog/:id" element={<BlogDetails />}  />
          <Route path="*"element={<NotFound />}  />
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
