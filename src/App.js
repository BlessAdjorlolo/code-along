import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
// import Header from "./component/Header";
// import Button from "./component/Button";
// import Image  from "./component/Image";
import Navbar from "./components/Navbar";
// import Practice from "./component/Practice"
import TaskManager from "./pages/TaskManager";
import Form from "./components/Form";
import ProductList from "./pages/ProductList";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/task-manager" element={<TaskManager />} />
      <Route path="/form" element={<Form />} />
      <Route path="/*" element={<NotFound />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;