import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../api';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const contactRef = useRef(null);
  const categoriesRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // We should fetch categories here from API, but for now we'll leave it empty
    // since the original Blade injected them globally. We'll fetch them from Laravel API.
    api.get('/categories')
      .then(res => {
        if (res.data.success && res.data.categories) {
          setCategories(res.data.categories);
        }
      })
      .catch(err => console.error("Could not fetch header data", err));

    const handleClickOutside = (event) => {
      if (contactRef.current && !contactRef.current.contains(event.target)) {
        setIsContactOpen(false);
      }
      if (categoriesRef.current && !categoriesRef.current.contains(event.target)) {
        setIsCategoriesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim().length >= 2) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-gray-50 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/">
          <img src="/images/logoDRO_PRINT.png" alt="DroPrint Logo" className="h-11" />
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 mx-3 ml-4 hidden md:block max-w-lg">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un produit ou une catégorie"
              className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-purple)]"
              required
              minLength="2"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-4 bg-[var(--color-brand-purple)] hover:bg-[var(--color-brand-purple-dark)] text-white rounded-full transition-colors duration-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </form>

        {/* Navigation Section */}
        <div className="flex items-center space-x-4">
          
          {/* Contact Dropdown */}
          <div ref={contactRef} className="relative group">
            <button
              onMouseEnter={() => setIsContactOpen(true)}
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="px-4 py-2 font-semibold text-[var(--color-brand-purple)] hover:text-white hover:bg-[var(--color-brand-yellow-hover)] transition rounded-md"
            >
              Contact
            </button>
            
            {isContactOpen && (
              <div 
                onMouseLeave={() => setIsContactOpen(false)}
                className="absolute right-0 mt-2 w-64 bg-white shadow-xl rounded-md p-4 z-50 border border-gray-200"
              >
                <ul className="space-y-3 text-sm text-gray-800">
                  <li>
                    <a href="tel:+212524358389" className="hover:text-[var(--color-brand-purple)] hover:underline flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> +212 524358389
                    </a>
                  </li>
                  <li>
                    <a href="tel:+212694802518" className="hover:text-[var(--color-brand-purple)] hover:underline flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> +212 694802518
                    </a>
                  </li>
                  <li>
                    <a href="tel:+212664089442" className="hover:text-[var(--color-brand-purple)] hover:underline flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> +212 664089442
                    </a>
                  </li>
                </ul>

                <div className="mt-4 border-t pt-4">
                  <a href="https://wa.me/212694802518" target="_blank" rel="noreferrer" className="text-sm text-green-600 hover:underline flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 .01 5.36.01 12.01a11.93 11.93 0 001.67 6.02L0 24l6.13-1.67A11.92 11.92 0 0012 24c6.63 0 12-5.36 12-12 0-3.2-1.25-6.21-3.48-8.52z"/></svg>
                    <span><b>Discuter sur WhatsApp</b></span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Categories Dropdown */}
          <div ref={categoriesRef} className="relative group">
            <button
              onMouseEnter={() => setIsCategoriesOpen(true)}
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              aria-label="Parcourir les catégories"
              aria-expanded={isCategoriesOpen}
              className="px-4 py-2 font-semibold text-[var(--color-brand-purple)] hover:text-white hover:bg-[var(--color-brand-yellow-hover)] transition rounded-md flex items-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>

            {isCategoriesOpen && (
              <div 
                onMouseLeave={() => setIsCategoriesOpen(false)}
                className="absolute right-0 mt-2 w-screen max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-[700px] bg-white shadow-xl rounded-md p-3 sm:p-4 z-50 border border-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
              >
                {/* Dynamically mapped categories would go here */}
                {categories.length === 0 ? (
                  <p className="text-gray-500 col-span-full">Loading categories...</p>
                ) : (
                  categories.map(category => (
                    <div key={category.id} className="min-w-0">
                      <h3 className="font-bold text-[var(--color-brand-purple)] text-sm mb-1 truncate">
                        <Link to={`/categories/${category.slug}`} className="hover:underline">{category.name}</Link>
                      </h3>
                      <ul className="space-y-1 text-xs sm:text-sm text-gray-800">
                        {category.products?.map(product => (
                          <li key={product.id}>
                            <Link to={`/products/${product.slug}`} className="hover:underline block truncate">
                              {product.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

        </div>
      </div>
      <form onSubmit={handleSearch} className="mx-auto max-w-lg px-6 pb-3 md:hidden">
        <label htmlFor="mobile-search" className="sr-only">Rechercher un produit ou une catégorie</label>
        <div className="flex overflow-hidden rounded-full border border-gray-300 bg-white">
          <input id="mobile-search" type="search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} minLength="2" required placeholder="Rechercher un produit" className="min-w-0 flex-1 px-4 py-2 outline-none" />
          <button type="submit" className="bg-[var(--color-brand-purple)] px-4 text-white">Chercher</button>
        </div>
      </form>
    </header>
  );
};

export default Header;
