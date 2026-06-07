import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./utils/ThemeContext";
import ScrollToTop from "./utils/ScrollToTop";

// Layout Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Shop from "./pages/Shop/Shop";
import Insights from "./pages/Insights/Insights";
import ArticleDetail from "./pages/ArticleDetail/ArticleDetail";
import Contact from "./pages/Contact/Contact";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-primary text-primary transition-colors duration-300">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:id" element={<ArticleDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop/product/:id" element={<ProductDetail />} />
            </Routes>
          </div>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
