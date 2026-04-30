import Header from './Header';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 relative">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Layout;
