import { LayoutDashboard, Compass, Lightbulb, Briefcase, BookOpen, Users, MessageSquare, Settings, HeadphonesIcon, Info } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 flex flex-col h-screen bg-transparent shrink-0">
      <div className="flex items-center gap-2 p-6 pb-8">
        <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-sm"></div>
        </div>
        <span className="font-bold text-xl tracking-tight text-gray-900">Advance</span>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <NavItem to="/dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" />
        <NavItem to="/explore" icon={<Compass size={20} />} label="Explore Careers" />
        <NavItem to="/skills" icon={<Lightbulb size={20} />} label="My Skills" />
        <NavItem to="/jobs" icon={<Briefcase size={20} />} label="Job Board" />
        <NavItem to="/learning" icon={<BookOpen size={20} />} label="Learning" />
        <NavItem to="/networking" icon={<Users size={20} />} label="Networking" />
        <NavItem to="/chat" icon={<MessageSquare size={20} />} label="Chat" />
      </nav>

      <div className="p-4 mt-auto">
        <div className="bg-gradient-to-br from-yellow-200 to-pink-200 rounded-3xl p-6 text-center relative overflow-hidden">
          {/* Abstract background shapes */}
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

          <h3 className="font-bold text-gray-900 mb-1 relative z-10">Upgrade to Pro</h3>
          <p className="text-sm text-gray-700 mb-3 relative z-10">Get 1 month free and unlock all Pro features</p>
          <div className="bg-[#121212] text-white text-xs font-semibold px-4 py-2 rounded-full inline-block relative z-10 cursor-pointer hover:bg-black transition-colors">
            Upgrade now
          </div>
        </div>
      </div>

      <div className="px-4 pb-6 space-y-1">
        <NavItem to="/support" icon={<HeadphonesIcon size={20} />} label="Support Center" />
        <NavItem to="/settings" icon={<Settings size={20} />} label="Settings" />
      </div>
    </aside>
  );
};

const NavItem = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-2xl transition-colors font-medium text-[15px]
        ${isActive ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900 hover:bg-indigo-50/50'}`}
    >
      {({ isActive }) => (
        <>
          <span className={`${isActive ? 'text-gray-900' : 'text-gray-400'}`}>
            {icon}
          </span>
          {label}
        </>
      )}
    </NavLink>
  );
};

export default Sidebar;
