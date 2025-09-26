import React from 'react'
// Layout.jsx
import { Routes, Route, Navigate } from "react-router-dom";
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






function Layout() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Desktop/Tab Sidebar */}
      <aside className="hidden md:flex   ">
        <SideNav />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Desktop Header */}
        <header className="hidden md:block w-full">
          <Header />
        </header>

        {/* Mobile Header */}
        <header className="md:hidden">
          <MobileHeader />
        </header>

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
    <main className='w-[85%] ml-45 pl-0 mt-23  bg-[var(--bg)]'>
    
    <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={<Navigate to='/home'/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/explore' element={<ExplorePage/>}/>
      <Route path='/challange' element={<ChallangePage/>}/>
      <Route path='/aichatbot' element={<Aichatbot/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/uploade' element={<UploadPage/>}/>
     

      </Route>
      <Route path='/log-in' element={<LandingPage/>}/>

    </Routes>

   </main>
  )
}

export default App
