import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Public Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

// Public Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import PracticeAreasPage from './pages/PracticeAreasPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';

// Admin Components & Pages
import AdminLayout from './pages/admin/AdminLayout';
import DashboardOverview from './pages/admin/DashboardOverview';
import AppointmentsPage from './pages/admin/AppointmentsPage';
import MessagesPage from './pages/admin/MessagesPage';
import LoginPage from './pages/admin/LoginPage';

// Auth & State
import ProtectedRoute from './components/ProtectedRoute';
import { AdminDataProvider } from './context/AdminDataContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout for the main website 
const PublicLayout = ({ children }) => (
  <div className="app-container">
    <Navbar />
    <main>
      {children}
    </main>
    <Footer />
    <BookingModal />
  </div>
);

function App() {
  return (
    <AdminDataProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Public Website Routes */}
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
          <Route path="/practice-areas" element={<PublicLayout><PracticeAreasPage /></PublicLayout>} />
          <Route path="/team" element={<PublicLayout><TeamPage /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />

          {/* Admin Login */}
          <Route path="/admin/login" element={<LoginPage />} />

          {/* Admin Dashboard Routes (Protected) */}
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<DashboardOverview />} />
            <Route path="appointments" element={<AppointmentsPage />} />
            <Route path="messages" element={<MessagesPage />} />
          </Route>
        </Routes>
      </Router>
    </AdminDataProvider>
  );
}

export default App;
