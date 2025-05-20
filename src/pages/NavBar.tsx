import { useNavigate } from 'react-router-dom';
import { LogIn, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/scan2alert-logo.jpg';

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
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <div className="bg-[#0084C2] p-4 font-serif">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-20 rounded-xl" />
          {isAuthenticated && (
            <button
              onClick={handleCarRegistration}
              className="text-white font-semibold text-lg hover:text-blue-100 transition-all"
            >
              Car Registration
            </button>
          )}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className="text-white font-semibold text-lg hover:text-blue-100 transition-all"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
                   <div className="flex items-center">
  <button
    onClick={handleSignOut}
    className="flex items-center text-white font-semibold text-lg hover:text-blue-100 transition-all"
  >
    <LogOut size={20} className="mr-2" />
    Sign Out
  </button>

  <button
                onClick={() => navigate('/')}
    className="ml-2 text-white font-semibold text-lg hover:text-blue-100 transition-all"
  >
    | 
    Start Registration
  </button>
</div>
          ) : (
            <div className="flex items-center">
  <button
    onClick={() => navigate('/login')}
    className="flex items-center text-white font-semibold text-lg hover:text-blue-100 transition-all"
  >
    <LogIn size={20} className="mr-2" />
    Sign In
  </button>
  
  <button
                onClick={() => navigate('/')}
    className="ml-2 text-white font-semibold text-lg hover:text-blue-100 transition-all"
  >
    | 
    Start Registration
  </button>
</div>

          )}
        </div>
      </div>

      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#0084C2] p-4 space-y-4`}
      >
        {navLinks.map((link) => (
          <button
            key={link.path}
            onClick={() => {
              navigate(link.path);
              setIsMenuOpen(false);
            }}
            className="text-white font-semibold text-lg hover:text-blue-100 transition-all w-full text-left"
          >
            {link.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
