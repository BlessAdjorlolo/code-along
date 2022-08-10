import Header from "./component/Header";
import Button from "./component/Button";
import { Image } from "./component/Image";
import Navbar from "./component/Navbar";

function App(){
  return (
    <div>
      <Navbar />
      <Header />
      <Button label="Add to Cart" />
      <Button label="Read more..." />
      <Button label="Register" />
      <Button label="Login" />
      <Image />
    </div>
  );
}

export default App;