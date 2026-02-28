import { Search, Sun, Bell, ChevronDown, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Topbar = () => {
    const navigate = useNavigate();
    const { currentUser, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    // Helper to get initials
    const getInitials = (name) => {
        if (!name) return 'U';
        return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    };

    return (
        <header className="flex justify-between items-center py-4 px-8 border-b border-gray-100 bg-white">
            <div className="flex-1 max-w-xl">
                <div className="relative flex items-center w-full">
                    <Search className="absolute left-3 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-gray-50 border-none rounded-full py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-indigo-100 transition-shadow outline-none text-gray-700 placeholder:text-gray-400 font-medium placeholder:font-normal"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4 ml-6">
                <div className="flex items-center bg-gray-50 rounded-full p-1 border border-gray-100 shadow-sm">
                    <button className="px-3 py-1.5 text-xs font-semibold rounded-full bg-white shadow-sm text-gray-800 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                        AI Assistant
                    </button>
                    <button className="px-3 py-1.5 text-xs font-medium rounded-full text-gray-500 hover:text-gray-900 transition-colors">
                        Chat
                    </button>
                </div>

                <div className="flex items-center gap-3 ml-4">
                    <button className="w-10 h-10 flex flex-col justify-center items-center gap-[4px] rounded-full hover:bg-gray-50 transition-colors text-gray-500">
                        <div className="w-5 border-t-2 border-current rounded-full" />
                        <div className="w-5 border-t-2 border-current rounded-full" />
                        <div className="w-3 border-t-2 border-current rounded-full self-start ml-[10px]" />
                    </button>
                    <button className="relative w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2.5 w-2 h-2 bg-yellow-400 rounded-full border border-white"></span>
                    </button>

                    <div
                        onClick={handleLogout}
                        className="flex items-center gap-2 cursor-pointer pt-1 pb-1 pr-1 pl-2 rounded-full hover:bg-gray-50 transition-colors group"
                        title="Sign Out"
                    >
                        <div className="relative">
                            {currentUser?.name ? (
                                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-bold border-2 border-white shadow-sm text-sm">
                                    {getInitials(currentUser.name)}
                                </div>
                            ) : (
                                <img
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                    alt="User profile"
                                    className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
                                />
                            )}
                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-white"></span>
                        </div>
                        <LogOut size={18} className="text-gray-400 mr-2 group-hover:text-red-500 transition-colors" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Topbar;
