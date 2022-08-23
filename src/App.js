import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
// import Header from "./component/Header";
// import Button from "./component/Button";
// import { Image } from "./component/Image";
import Navbar from "./components/Navbar";
// import Practice from "./component/Practice"
import TaskManager from "./components/TaskManager";
// import Form from "./components/Form";
import ProductList from "./components/ProductList";

function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/task-manager" element={<TaskManager />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;