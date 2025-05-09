import { useNavigate } from 'react-router-dom';
import { LogIn, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  console.log("isAuthenticated", isAuthenticated);

  const handleSignOut = () => {
    navigate('/login');
  };

  const handleCarRegistration = () => {
    navigate('/dashboard');
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Terms & Conditions', path: '/terms' },
    { label: 'Privacy Policy', path: '/privacy' },
  ];

  return (
    <div className="bg-teal-600 p-4 font-serif">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {isAuthenticated && (
            <button
              onClick={handleCarRegistration}
              className="text-white font-semibold text-lg hover:text-teal-200 transition-all"
            >
              Car Registration
            </button>
          )}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className="text-white font-semibold text-lg hover:text-teal-200 transition-all"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <button
                onClick={handleSignOut}
                className="flex items-center text-white font-semibold text-lg hover:text-teal-200 transition-all"
              >
                <LogOut size={20} className="mr-2" />
                Sign Out
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white font-semibold text-lg"
              >
                <span className={`block w-6 h-0.5 bg-white mb-2 ${isMenuOpen ? 'rotate-45' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white mb-2 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white ${isMenuOpen ? '-rotate-45' : ''}`} />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate('/login')}
                className="flex items-center text-white font-semibold text-lg hover:text-teal-200 transition-all"
              >
                <LogIn size={20} className="mr-2" />
                Sign In
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white font-semibold text-lg"
              >
                <span className={`block w-6 h-0.5 bg-white mb-2 ${isMenuOpen ? 'rotate-45' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white mb-2 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white ${isMenuOpen ? '-rotate-45' : ''}`} />
              </button>
            </>
          )}
        </div>
      </div>

      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-teal-600 p-4 space-y-4`}
      >
        {navLinks.map((link) => (
          <button
            key={link.path}
            onClick={() => {
              navigate(link.path);
              setIsMenuOpen(false);
            }}
            className="text-white font-semibold text-lg hover:text-teal-200 transition-all w-full text-left"
          >
            {link.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
