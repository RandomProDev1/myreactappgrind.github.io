import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTwitter, FaDiscord, FaInstagram } from 'react-icons/fa';

// Navigation items
const navItems = [
  { name: 'Dashboard', href: '#', isPrimary: false },
  { name: 'Features', href: '#features', isPrimary: false },
  { name: 'Roadmap', href: '#', isPrimary: false },
  { name: 'Start Grinding', href: '#', isPrimary: true },
];

// Animation variants
const menuContainerVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
    y: "-20%",
    transition: { duration: 0.3 },
  },
};

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  closed: {
    y: 20,
    opacity: 0,
  },
};

// Custom hook for scroll locking
const useLockBodyScroll = () => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
};

// Main Navbar Component
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-800/80 backdrop-blur-lg border-b border-gray-700 fixed w-full top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                GRIND++ 🔥
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                item.isPrimary ? (
                  <button 
                    key={item.name} 
                    className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full transition-all duration-300 shadow-lg shadow-green-500/20 font-semibold text-white hover:-translate-y-0.5 transform"
                  >
                    {item.name}
                  </button>
                ) : (
                  <button 
                    key={item.name} 
                    className="text-gray-300 hover:text-green-400 transition-all duration-300"
                  >
                    {item.name}
                  </button>
                )
              ))}
            </div>

            {/* Mobile Menu Button - FIXED CENTERING */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center justify-center text-gray-400 hover:text-white ml-4 p-1 w-10 h-10"
              aria-label="Toggle Menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-6 relative flex items-center justify-center">
                <motion.span
                  className="absolute block h-0.5 w-6 bg-current rounded-full"
                  animate={isMenuOpen ? "open" : "closed"}
                  variants={{ 
                    closed: { rotate: 0, y: -5 }, 
                    open: { rotate: 45, y: 0 } 
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute block h-0.5 w-6 bg-current rounded-full"
                  animate={isMenuOpen ? "open" : "closed"}
                  variants={{ 
                    closed: { opacity: 1 }, 
                    open: { opacity: 0 } 
                  }}
                  transition={{ duration: 0.1 }}
                />
                <motion.span
                  className="absolute block h-0.5 w-6 bg-current rounded-full"
                  animate={isMenuOpen ? "open" : "closed"}
                  variants={{ 
                    closed: { rotate: 0, y: 5 }, 
                    open: { rotate: -45, y: 0 } 
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && <MobileMenu navItems={navItems} closeMenu={() => setIsMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

// Mobile Menu Subcomponent
function MobileMenu({ navItems, closeMenu }) {
  useLockBodyScroll();

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-40 md:hidden"
        onClick={closeMenu}
      />
      
      {/* Menu Content */}
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        variants={menuContainerVariants}
        className="fixed top-16 inset-x-0 bg-gray-900/95 backdrop-blur-2xl z-50 md:hidden border-b border-gray-800"
      >
        <div className="px-4 py-5 space-y-2">
          {navItems.map((item) => (
            <motion.div key={item.name} variants={menuItemVariants}>
              <button
                onClick={closeMenu}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-colors text-lg font-medium
                  ${item.isPrimary
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                    : 'text-gray-200 hover:bg-gray-800'
                  }`}
              >
                {item.name}
              </button>
            </motion.div>
          ))}
          
          <motion.div 
            variants={menuItemVariants} 
            className="pt-6 pb-3 flex justify-center space-x-5"
          >
            {[FaTwitter, FaDiscord, FaInstagram].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700 text-gray-400 hover:text-green-400 hover:border-green-400 transition-colors"
              >
                <Icon className="text-xl" />
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Navbar;