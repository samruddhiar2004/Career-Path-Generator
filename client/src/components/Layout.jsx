import React from 'react';
import Sidebar from './layout/Sidebar';
import Topbar from './layout/Topbar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-[#F8F9FA] overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto bg-[#F8F9FA] p-6 pb-0">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;