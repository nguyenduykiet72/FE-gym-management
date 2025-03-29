import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from './components/layout/Sidebar';
import Login from './pages/Login';
import Navbar from './components/layout/Navbar';
import QRCheckIn from './pages/QRCheckIn';
import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import Trainers from './pages/Trainers';
import Schedules from './pages/Schedules';
import Packages from './pages/Packages';
import Equipment from './pages/Equipment';
import PublicLayout from './components/layout/PublicLayout';
import Home from './pages/public/Home';
import About from './pages/public/About';
import Classes from './pages/public/Classes';
import Contact from './pages/public/Contact';
import Pricing from './pages/public/Pricing';
import TrainersPublic from './pages/public/Trainers';
import TrainerDetail from './pages/public/TrainerDetail';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'admin' | 'trainer' | 'member' | null>(null);

  // Check if user is logged in from localStorage
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    const savedUserRole = localStorage.getItem('userRole') as 'admin' | 'trainer' | 'member' | null;

    if (loggedInStatus === 'true' && savedUserRole) {
      setIsLoggedIn(true);
      setUserRole(savedUserRole);
    }
  }, []);

  // Mock login function - in a real app, this would validate with a backend
  const handleLogin = (role: 'admin' | 'trainer' | 'member') => {
    setIsLoggedIn(true);
    setUserRole(role);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userRole', role);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="classes" element={<Classes />} />
          <Route path="trainers" element={<TrainersPublic />} />
          <Route path="trainers/:id" element={<TrainerDetail />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="login"
            element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}
          />
        </Route>

        {/* Protected Routes */}
        {isLoggedIn ? (
          <Route
            path="/*"
            element={
              <div className="flex h-screen bg-gray-100">
                <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} userRole={userRole} />
                <div className="flex-1 flex flex-col overflow-hidden">
                  <Navbar
                    setSidebarOpen={setSidebarOpen}
                    userRole={userRole}
                    userName="John Doe"
                    onLogout={handleLogout}
                  />
                  <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
                    <Routes>
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route path="members" element={<Members />} />
                      <Route path="trainers" element={<Trainers />} />
                      <Route path="schedules" element={<Schedules />} />
                      <Route path="packages" element={<Packages />} />
                      <Route path="equipment" element={<Equipment />} />
                      <Route path="checkin" element={<QRCheckIn />} />
                      <Route path="*" element={<Navigate to="/dashboard" replace />} />
                    </Routes>
                  </main>
                </div>
              </div>
            }
          />
        ) : (
          <Route path="/*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
