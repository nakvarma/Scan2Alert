import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/'); 
  };

  const handleCarRegistration = () => {
    navigate('/dashboard'); 
  };

  return (
    <div className="bg-indigo-600 p-4 font-serif">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <button
          onClick={handleCarRegistration}
          className="text-white font-semibold text-lg hover:text-indigo-200 transition-all"
        >
          Car Registration
        </button>
        <button
          onClick={handleSignOut}
          className="flex items-center text-white font-semibold text-lg hover:text-indigo-200 transition-all"
        >
          <LogOut size={20} className="mr-2" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
