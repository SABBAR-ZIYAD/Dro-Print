import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Devis from './pages/Devis';
import Search from './pages/Search';
import Category from './pages/Category';
import Product from './pages/Product';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/search" element={<Search />} />
          <Route path="/categories/:slug" element={<Category />} />
          <Route path="/products/:slug" element={<Product />} />
          <Route path="*" element={<main className="p-10 text-center"><h1 className="text-3xl font-bold">Page introuvable</h1></main>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
