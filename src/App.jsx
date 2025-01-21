import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import OneProduct from "./pages/OneProduct"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/one/:id" element={<OneProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
