import React from 'react'
import PrivateRoute from "./components/PrivateRoute";
// Layout.jsx
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

import { Outlet } from "react-router-dom";
import MobileHeader from "./components/MobleHeader";
import BottomNav from "./components/BottomNav";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import Aichatbot from './pages/Aichatbot'
import ChallangePage from './pages/ChallangePage';
import ExplorePage from './pages/ExplorePage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage';
import UploadPage from './pages/UploadPage'
import Notifications from './pages/Notifications';
import PostPage from './pages/PostPage';
import AddChallenge from './pages/AddChallange';
import Settings from './pages/Settings';









function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const isAichatbot = location.pathname === "/aichatbot"; // ✅ check for AI chatbot page

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Desktop/Tab Sidebar */}
      <aside className="hidden md:flex">
        <SideNav />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Desktop Header */}
        {!isAichatbot && (
          <header className="hidden md:block w-full">
            <Header />
          </header>
        )}

        {/* Mobile Header only on /home and not aichatbot */}
        {!isAichatbot && isHome && (
          <header className="md:hidden">
            <MobileHeader />
          </header>
        )}

        {/* Page Content */}
        <main className="overflow-y-auto">
          <Outlet />
        </main>

        {/* Mobile Bottom Nav */}
        <footer className="md:hidden fixed bottom-0 left-0 w-full border-t bg-white">
          <BottomNav />
        </footer>
      </div>
    </div>
  );
}




const App = () => {
  return (
    <main className='w-[98%]  bg-[var(--bg)]'>
    
    <Routes>
  <Route path="/log-in" element={<LandingPage />} />

  {/* Protected Routes */}
  <Route element={<PrivateRoute><Layout /></PrivateRoute>}>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/explore" element={<ExplorePage />} />
    <Route path="/challange" element={<ChallangePage />} />
    <Route path="/aichatbot" element={<Aichatbot />} />
    <Route path="/profile/:id" element={<ProfilePage />} />
    <Route path="/upload" element={<UploadPage />} />
    <Route path="/post/:id" element={<PostPage />} />
    <Route path="/notifications" element={<Notifications />} />
    <Route path="/settings" element={<Settings />} />
    {/* <Route path="/edit-profile" element={<EditProfile />} /> */}
    <Route
    path="/add-challenge"
     element={
    <PrivateRoute adminOnly={false}>
      <AddChallenge />
    </PrivateRoute>
  }
/>


  </Route>
</Routes>


   </main>
  )
}

export default App
