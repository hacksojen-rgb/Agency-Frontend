
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { SITE_SETTINGS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const companyName = SITE_SETTINGS.companyName;
  const nameParts = companyName.split(' ');
  const firstWord = nameParts[0];
  const rest = nameParts.slice(1).join(' ');

  const navBgClass = scrolled 
    ? 'bg-white/95 shadow-xl py-3 backdrop-blur-md border-b border-gray-100' 
    : 'bg-white/60 backdrop-blur-lg py-5 border-b border-white/20 shadow-sm';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${navBgClass}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-[#014034] p-2 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Rocket className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-[#014034] drop-shadow-sm">
              {firstWord}<span className="text-[#00695c]">{rest}</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold transition-all duration-300 hover:text-[#00695c] ${
                  location.pathname === link.path ? 'text-[#00695c] scale-105' : 'text-gray-800 hover:scale-105'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pl-6 border-l border-gray-300/50">
              <Link 
                to="/get-quote" 
                className="bg-[#014034] text-white px-7 py-3 rounded-full text-sm font-extrabold hover:bg-[#00332a] transition-all shadow-[0_10px_20px_rgba(1,64,52,0.3)] hover:shadow-[0_15px_25px_rgba(1,64,52,0.4)] hover:-translate-y-0.5"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          <button 
            className="lg:hidden p-2 rounded-xl bg-white/20 backdrop-blur-sm text-[#014034] hover:bg-white/40 transition-all" 
            onClick={toggleMenu}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden absolute w-full bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-300 ease-in-out border-b border-gray-100 ${isOpen ? 'max-h-screen opacity-100 py-8 translate-y-0' : 'max-h-0 opacity-0 overflow-hidden -translate-y-4'}`}>
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xl font-bold ${location.pathname === link.path ? 'text-[#014034] scale-110' : 'text-gray-700'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-full px-10 pt-6 border-t border-gray-100 flex flex-col space-y-4">
            <Link 
              to="/get-quote" 
              className="bg-[#014034] text-white py-4 rounded-2xl text-center font-black text-lg shadow-xl" 
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
