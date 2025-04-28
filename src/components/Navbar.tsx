import React from 'react';
import { Menu, X } from 'lucide-react';
import ShiningBorder from './ui/ShiningBorder';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-14 sm:h-16">
          <ShiningBorder>
            <div className="hidden md:flex items-center space-x-8 lg:space-x-12 rounded-full border border-gray-500/50 px-6 py-2 bg-black/20">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={handleNavClick}
                  className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-blue-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                </a>
              ))}
            </div>
          </ShiningBorder>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-gray-300 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute left-0 right-0 bg-black p-4">
          <div className="space-y-2">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={handleNavClick}
                className="block px-3 py-2 text-base text-gray-300 hover:text-white text-center rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;