import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import TalentCartDrawer from './components/TalentCartDrawer.jsx';
import GenericPage from './components/GenericPage.jsx';
import Home from './pages/Home.jsx';
import Discover from './pages/Discover.jsx';
import Casting from './pages/Casting.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import Pricing from './pages/Pricing.jsx';
import FAQ from './pages/FAQ.jsx';
import Contact from './pages/Contact.jsx';
import Auth from './pages/Auth.jsx';

export default function App() {
  const [page, setPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  const mainRef = useRef(null);

  const go = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const addToCart = (talent) => {
    const exists = cart.some((c) => (c.id || c.name) === (talent.id || talent.name));
    if (!exists) {
      setCart((prev) => [...prev, talent]);
    }
    setCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((c) => (c.id || c.name) !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    if (mainRef.current) {
      gsap.fromTo(mainRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power1.out' });
    }
  }, [page]);

  const view = () => {
    switch (page) {
      case 'home':
        return <Home go={go} addToCart={addToCart} cart={cart} />;
      case 'discover':
        return <Discover addToCart={addToCart} cart={cart} />;
      case 'casting':
        return <Casting go={go} />;
      case 'howItWorks':
        return <HowItWorks go={go} />;
      case 'pricing':
        return <Pricing go={go} />;
      case 'faq':
        return <FAQ go={go} />;
      case 'contact':
        return <Contact />;
      case 'auth':
        return <Auth setUser={setUser} go={go} />;
      default:
        return <GenericPage page={page} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)]">
      <Header
        page={page}
        go={go}
        cart={cart}
        onOpenCart={() => setCartOpen(true)}
        user={user}
        onLogout={() => setUser(null)}
      />
      
      <main ref={mainRef} className="flex-1">
        {view()}
      </main>

      <Footer go={go} />

      <TalentCartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onRemove={removeFromCart}
        onClear={clearCart}
        go={go}
      />
    </div>
  );
}
