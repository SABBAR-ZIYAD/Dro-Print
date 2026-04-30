import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Devis from './pages/Devis';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/devis" element={<Devis />} />
          {/* Temporary stubs for the other routes */}
          <Route path="/search" element={<div className="p-10 text-center">Search Page Placeholder</div>} />
          <Route path="/categories/:slug" element={<div className="p-10 text-center">Category Placeholder</div>} />
          <Route path="/products/:slug" element={<div className="p-10 text-center">Product Placeholder</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
