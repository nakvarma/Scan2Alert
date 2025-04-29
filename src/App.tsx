import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import UserVehicleTable from './pages/UserVehicleTable';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <div>
        <main className="flex-1 overflow-y-auto min-h-[calc(100vh-3.5rem)]">
          <Routes>
            <Route path="/" element={<LoginPage />} />
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
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
