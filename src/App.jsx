
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import ShopContextProvider from "./context/shop-context";
import Footer from "./components/footer";

function App() {
  return(<>
    <div className="App">
      <ShopContextProvider>
        <Router basename="/Shopping-Cart-React">
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
        <Footer></Footer>
      </ShopContextProvider>
      
    </div>
  </>);
}

export default App
