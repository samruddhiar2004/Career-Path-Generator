import React, { useMemo } from 'react';
import { 
  LayoutDashboard, 
  Search, 
  TrendingUp, 
  Briefcase, 
  GraduationCap, 
  Users, 
  MessageSquare, 
  Settings, 
  HelpCircle 
} from 'lucide-react';

// Constants
const SIDEBAR_CONFIG = {
  logo: 'C',
  appName: 'Advance',
  iconSize: 20,
};

const NAVIGATION_ITEMS = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Search, label: 'Explore Careers' },
  { icon: TrendingUp, label: 'My Skills' },
  { icon: Briefcase, label: 'Job Board' },
  { icon: GraduationCap, label: 'Learning' },
  { icon: Users, label: 'Networking' },
  { icon: MessageSquare, label: 'Chat' },
];

const BOTTOM_ITEMS = [
  { icon: HelpCircle, label: 'Support Center' },
  { icon: Settings, label: 'Settings' },
];

// Reusable Sidebar Item Component
const SidebarItem = React.memo(({ icon: Icon, label, active = false }) => (
  <div className={`flex items-center space-x-3 px-4 py-3 rounded-2xl cursor-pointer transition-all ${
    active 
    ? 'bg-primary text-white shadow-lg shadow-purple-200' 
    : 'text-slate-400 hover:bg-purple-50 hover:text-primary'
  }`}>
    <Icon size={SIDEBAR_CONFIG.iconSize} />
    <span className="font-medium">{label}</span>
  </div>
));

SidebarItem.displayName = 'SidebarItem';

const Sidebar = React.memo(() => {
  // Memoize navigation items
  const navItems = useMemo(() => NAVIGATION_ITEMS, []);
  const bottomItems = useMemo(() => BOTTOM_ITEMS, []);

  return (
    <aside className="w-64 h-screen bg-white border-r border-slate-100 flex flex-col p-6 fixed left-0 top-0">
      {/* App Logo */}
      <div className="flex items-center space-x-3 mb-10 px-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
          {SIDEBAR_CONFIG.logo}
        </div>
        <span className="text-xl font-bold text-slate-900 tracking-tight">
          {SIDEBAR_CONFIG.appName}
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2">
        {navItems.map(item => (
          <SidebarItem key={item.label} {...item} />
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="pt-6 border-t border-slate-100 space-y-2">
        {bottomItems.map(item => (
          <SidebarItem key={item.label} {...item} />
        ))}
      </div>
    </aside>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;