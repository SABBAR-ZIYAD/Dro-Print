import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Testimonials from '../components/Testimonials';

const Home = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // Fallback featured products if API returns empty
  const fallbackProducts = [
    { id: 1, name: "Roll-up Premium", slug: "roll-up", image_path: "https://placehold.co/600x400/5b21b6/ffffff?text=Roll-up" },
    { id: 2, name: "Cartes de Visite", slug: "cartes-de-visite", image_path: "https://placehold.co/600x400/5b21b6/ffffff?text=Cartes+de+Visite" },
    { id: 3, name: "Flyers A5", slug: "flyers", image_path: "https://placehold.co/600x400/5b21b6/ffffff?text=Flyers" },
    { id: 4, name: "Affiches Grand Format", slug: "affiches", image_path: "https://placehold.co/600x400/5b21b6/ffffff?text=Affiches" },
  ];

  useEffect(() => {
    axios.get('http://localhost:8000/api/home')
      .then(res => {
        if (res.data.success) {
          setAnnouncements(res.data.announcements);
          setFeaturedProducts(res.data.featuredProducts);
        }
      })
      .catch(err => console.error("Error fetching home data:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {/* Hero Section with Swiper */}
      <section className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-5">
          {loading ? (
            <div className="w-full h-76 bg-gray-200 animate-pulse rounded-lg"></div>
          ) : (
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              className="mySwiper rounded-lg shadow"
            >
              {announcements.map(ann => (
                <SwiperSlide key={ann.id}>
                  <img 
                    src={`http://localhost:8000/storage/${ann.image_path}`} 
                    alt={ann.title} 
                    className="w-full h-76 object-cover rounded-lg shadow" 
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center text-[var(--color-brand-purple)] mb-10">
            Nos produits phares
          </h2>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-64 bg-gray-200 animate-pulse rounded-2xl"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {featuredProducts && featuredProducts.length > 0 ? (
                featuredProducts.map(product => (
                  <Link 
                    key={product.id} 
                    to={`/products/${product.slug}`} 
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 border border-gray-100 hover:border-[var(--color-brand-purple-dark)] block"
                  >
                    {product.image_path && (
                      <div className="w-full h-48 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                        <img 
                          src={`http://localhost:8000/storage/${product.image_path}`} 
                          alt={product.name} 
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-[var(--color-brand-purple-dark)] mt-4">
                      {product.name}
                    </h3>
                  </Link>
                ))
              ) : (
                fallbackProducts.map(product => (
                  <Link 
                    key={product.id} 
                    to={`/products/${product.slug}`} 
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 border border-gray-100 hover:border-[var(--color-brand-purple-dark)] block"
                  >
                    {product.image_path && (
                      <div className="w-full h-48 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                        <img 
                          src={product.image_path.startsWith('http') ? product.image_path : `/images/${product.image_path}`} 
                          alt={product.name} 
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-[var(--color-brand-purple-dark)] mt-4">
                      {product.name}
                    </h3>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 px-6">
        <Link to="/about" className="block max-w-3xl mx-auto text-center no-underline font-extrabold text-[var(--color-brand-purple)] hover:underline cursor-pointer">
          <h2 className="text-3xl font-extrabold text-center mb-10 tracking-tight drop-shadow-md">
            À propos de DroPrint
          </h2>
        </Link>
        <p className="text-gray-800 text-lg leading-relaxed max-w-prose mx-auto text-justify">
          Dro Print, votre imprimerie numérique de référence à Marrakech, révolutionne le monde de l’impression en alliant innovation,
          accompagnement sur mesure et expertise technique. Installée dans la zone industrielle Al Massar, Dro Print propose une offre
          complète d’impression petits et grands formats, de fabrication d’enseignes et de supports de communication visuelle.
        </p>
      </section>

      {/* Features Grid */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center text-[var(--color-brand-purple)] mb-10">
            Pourquoi choisir DroPrint ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div>
              <img src="/images/icons/fast-delivery.svg" className="mx-auto h-12 mb-2 icon-yellow" alt="Livraison rapide" />
              <h3 className="font-bold text-[var(--color-brand-yellow)]">Livraison rapide</h3>
              <p className="text-sm text-gray-600">Commandez et recevez vos produits en un temps record partout au Maroc.</p>
            </div>

            <div>
              <img src="/images/icons/test.svg" className="mx-auto h-12 mb-2 icon-yellow" alt="Personnalisation" />
              <h3 className="font-bold text-[var(--color-brand-yellow)]">Produits personnalisés</h3>
              <p className="text-sm text-gray-600">Créez des supports à votre image grâce à notre large choix d’options de personnalisation.</p>
            </div>

            <div>
              <img src="/images/icons/eco-friendly.svg" className="mx-auto h-12 mb-2 icon-yellow" alt="Eco responsable" />
              <h3 className="font-bold text-[var(--color-brand-yellow)]">Engagement éco-responsable</h3>
              <p className="text-sm text-gray-600">Nous privilégions des matériaux recyclés et des encres respectueuses de l’environnement.</p>
            </div>

            <div>
              <img src="/images/icons/expert-support.svg" className="mx-auto h-12 mb-2 icon-yellow" alt="Support technique" />
              <h3 className="font-bold text-[var(--color-brand-yellow)]">Accompagnement expert</h3>
              <p className="text-sm text-gray-600">Notre équipe vous guide à chaque étape, du choix produit jusqu’à la livraison finale.</p>
            </div>

          </div>
        </div>
      </section>
{/* Testimonials Section */}
<Testimonials />

    </div>
  );
};

export default Home;
