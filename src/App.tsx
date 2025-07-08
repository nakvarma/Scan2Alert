import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import UserVehicleTable from './pages/UserVehicleTable';

import ProtectedRoute from './components/ProtectedRoute';
import About from './pages/About';
import Services from './pages/Services.tsx';
import TermsAndConditions from './pages/TermsAndConditions.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import ContactUs from './pages/ContactUs.tsx';
import Home from './pages/Home.tsx';
import Faq from './pages/Faq';
import HowItWorks from './pages/HowItWorks';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
      <div>
        <ToastContainer position="top-right" autoClose={3000} />
        <main className="flex-1 overflow-y-auto min-h-[calc(100vh-3.5rem)]">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/view/:userId" element={
              <ProtectedRoute>
                <UserVehicleTable />
              </ProtectedRoute>} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <About />
              }
            />
            <Route
              path="/"
              element={
                <Home />
              }
            />
            <Route
              path="/services"
              element={
                <Services />
              }
            />
            <Route
              path="/terms"
              element={
                <TermsAndConditions />
              }
            />
            <Route
              path="/privacy"
              element={<PrivacyPolicy />}
            />
            <Route
              path="/contact"
              element={
                <ContactUs />
              }
            />
            <Route
              path="/faq"
              element={<Faq />}
            />
            <Route
              path="/how-it-works"
              element={<HowItWorks />}
            />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
