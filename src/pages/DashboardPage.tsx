import Navbar from './NavBar';
import HomePage from './HomePage';

function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col relative bg-gray-50">
      <Navbar />
      <div className="flex flex-1 pt-14">
        <HomePage />
      </div>
    </div>
  );
}

export default DashboardPage;
