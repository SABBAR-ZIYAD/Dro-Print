// Using inline SVGs to avoid lucide-react version compatibility issues

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Main Button */}
      <button className="bg-[var(--color-brand-purple)] text-white p-4 rounded-full shadow-lg hover:bg-[var(--color-brand-purple-dark)] transition-all">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
      </button>

      {/* Dropdown Menu (Hoverable) */}
      <div className="absolute bottom-full right-0 mb-3 flex flex-col space-y-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        
        {/* Facebook */}
        <a 
          href="https://www.facebook.com/p/DRO-PRINT-100075857636572/" 
          target="_blank" 
          rel="noreferrer"
          className="relative group/icon flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-sm px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Suivez-nous sur Facebook
          </span>
        </a>

        {/* Instagram */}
        <a 
          href="https://www.instagram.com/dro_print/" 
          target="_blank" 
          rel="noreferrer"
          className="relative group/icon flex items-center justify-center w-14 h-14 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-all"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.12 1.12 0 110 2.25 1.12 1.12 0 010-2.25z"/></svg>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-sm px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Suivez-nous sur Instagram
          </span>
        </a>

        {/* WhatsApp */}
        <a 
          href="https://wa.me/212694802518" 
          target="_blank" 
          rel="noreferrer"
          className="relative group/icon flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 .01 5.36.01 12.01a11.93 11.93 0 001.67 6.02L0 24l6.13-1.67A11.92 11.92 0 0012 24c6.63 0 12-5.36 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21a9.03 9.03 0 01-4.7-1.35l-.34-.2-3.64 1 1-3.54-.21-.36A9.02 9.02 0 1121 12c0 4.97-4.03 9-9 9zm5.3-7.7c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.58.13s-.66.85-.81 1.03c-.15.19-.31.21-.57.07-.26-.13-1.1-.41-2.1-1.28-.78-.7-1.3-1.57-1.45-1.83-.15-.26-.02-.4.11-.53.11-.11.26-.28.39-.42.13-.14.17-.24.26-.4.09-.15.04-.28-.02-.41-.06-.13-.58-1.4-.8-1.92-.21-.5-.43-.43-.58-.44l-.5-.01c-.17 0-.44.06-.67.31s-.88.86-.88 2.08c0 1.22.9 2.4 1.03 2.57.13.17 1.77 2.7 4.3 3.79 2.53 1.09 2.53.73 2.98.68.44-.05 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.11-.24-.18-.5-.31z"/>
          </svg>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-sm px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Contactez-nous sur WhatsApp
          </span>
        </a>

        {/* Google Review */}
        <a 
          href="https://g.page/r/CVc11cCdDAIgEAE/review" 
          target="_blank" 
          rel="noreferrer"
          className="relative group/icon flex items-center justify-center w-14 h-14 bg-yellow-400 text-white rounded-full shadow-lg hover:bg-yellow-500 transition-all"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-sm px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Donnez-nous un avis
          </span>
        </a>
      </div>
    </div>
  );
};

export default FloatingCTA;
