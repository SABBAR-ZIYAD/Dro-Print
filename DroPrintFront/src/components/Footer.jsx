import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-brand-purple)] text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8 mb-8 text-center md:text-left">
          
          {/* About Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">DroPrint</h3>
            <p className="text-gray-300 text-sm">
              Votre partenaire d'impression numérique et de communication visuelle à Marrakech. 
              Qualité, rapidité et sur-mesure.
            </p>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="text-sm text-gray-300 space-y-3 flex flex-col items-center md:items-start">
              <li><a href="tel:+212524358389" className="hover:text-white transition flex items-center gap-2">📞 +212 524358389</a></li>
              <li><a href="tel:+212694802518" className="hover:text-white transition flex items-center gap-2">📞 +212 694802518</a></li>
              <li><a href="tel:+212664089442" className="hover:text-white transition flex items-center gap-2">📞 +212 664089442</a></li>
              <li><a href="mailto:droprint10@gmail.com" className="hover:text-white transition flex items-center gap-2">✉️ droprint10@gmail.com</a></li>
              <li>
                <a href="https://maps.app.goo.gl/jS119dqipzL3Yc576" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-start gap-2 text-left">
                  <span>📍</span> N° 399 Zone Industrielle Massar 1 Magasin, 2, Route de Safi, Marrakech 40000
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Horaires</h3>
            <p className="text-sm text-gray-300">Lundi - Vendredi : 9H - 13H | 14H - 19H<br />Samedi : 9H - 13H</p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><Link to="/" className="hover:text-white transition">Accueil</Link></li>
              <li><Link to="/about" className="hover:text-white transition">À Propos</Link></li>
              <li><Link to="/devis" className="hover:text-white transition">Demander un Devis</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              {/* Facebook */}
              <a href="https://www.facebook.com/p/DRO-PRINT-100075857636572/" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-blue-600 transition">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/dro_print/" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-pink-500 transition">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.12 1.12 0 110 2.25 1.12 1.12 0 010-2.25z"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/212694802518" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-green-500 transition">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 .01 5.36.01 12.01a11.93 11.93 0 001.67 6.02L0 24l6.13-1.67A11.92 11.92 0 0012 24c6.63 0 12-5.36 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21a9.03 9.03 0 01-4.7-1.35l-.34-.2-3.64 1 1-3.54-.21-.36A9.02 9.02 0 1121 12c0 4.97-4.03 9-9 9zm5.3-7.7c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.58.13s-.66.85-.81 1.03c-.15.19-.31.21-.57.07-.26-.13-1.1-.41-2.1-1.28-.78-.7-1.3-1.57-1.45-1.83-.15-.26-.02-.4.11-.53.11-.11.26-.28.39-.42.13-.14.17-.24.26-.4.09-.15.04-.28-.02-.41-.06-.13-.58-1.4-.8-1.92-.21-.5-.43-.43-.58-.44l-.5-.01c-.17 0-.44.06-.67.31s-.88.86-.88 2.08c0 1.22.9 2.4 1.03 2.57.13.17 1.77 2.7 4.3 3.79 2.53 1.09 2.53.73 2.98.68.44-.05 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.11-.24-.18-.5-.31z"/>
                </svg>
              </a>
            </div>
            <a href="https://g.page/r/CVc11cCdDAIgEAE/review" target="_blank" rel="noreferrer" className="text-sm text-yellow-300 hover:text-yellow-400 transition flex items-center justify-center md:justify-start gap-2 mt-4">
              ⭐ Laissez-nous un avis sur Google
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 mt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} DroPrint. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
