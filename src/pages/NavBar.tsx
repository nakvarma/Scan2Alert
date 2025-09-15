import { Link, useNavigate } from 'react-router-dom';
import { LogIn, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();

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
 
<>
  <div className="w-full font-serif bg-[#0084C2] md:bg-transparent flex items-center justify-between md:px-0">
    <div className="flex items-center ml-0">
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className="h-16 sm:h-20 md:h-28  cursor-pointer"
        />
      </Link>
    </div>
    <div className="hidden md:flex flex-1 bg-[#0084C2] items-center justify-between  px-4 py-7">
      <div className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <button
            key={link.path}
            onClick={() => navigate(link.path)}
            className="text-white font-semibold text-base hover:text-blue-200 transition-all"
          >
            {link.label}
          </button>
        ))}
        {isAuthenticated && (
          <button
            onClick={handleCarRegistration}
            className="text-white font-semibold text-base hover:text-blue-200 transition-all"
          >
            Car Registration
          </button>
        )}
      </div>
      <div className="hidden md:flex items-center space-x-4">
        {isAuthenticated && (
          <>
            <button
              onClick={handleSignOut}
              className="flex items-center text-white font-semibold hover:text-blue-200 transition-all"
            >
              <LogOut size={20} className="mr-2" />
              Sign Out
            </button>
            <button
              onClick={() => navigate("/")}
              className="text-white font-semibold hover:text-blue-200 transition-all"
            >
              | Start Registration
            </button>
          </>
        )}
      </div>
    </div>
    <div className="md:hidden flex items-center mr-2">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-white focus:outline-none"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  </div>
  {isMenuOpen && (
<div className="md:hidden bg-white/30 backdrop-blur-md p-4 space-y-4 rounded-xl shadow-lg">

    {navLinks.map((link) => (
        <button
          key={link.path}
          onClick={() => {
            navigate(link.path);
            setIsMenuOpen(false);
          }}
          className="block w-full text-left text-black  text-lg font-semibold hover:text-blue-200 transition-all"
        >
          {link.label}
        </button>
      ))}
      {isAuthenticated && (
        <>
          <button
            onClick={handleCarRegistration}
            className="block w-full text-left text-white text-lg font-semibold hover:text-blue-200 transition-all"
          >
            Car Registration
          </button>
          <button
            onClick={() => {
              handleSignOut();
              setIsMenuOpen(false);
            }}
            className="block w-full text-left text-white text-lg font-semibold hover:text-blue-200 transition-all"
          >
            <LogOut size={18} className="inline mr-2" />
            Sign Out
          </button>
        </>
      )}
    </div>
  )}
</>



);
};

export default Navbar;
