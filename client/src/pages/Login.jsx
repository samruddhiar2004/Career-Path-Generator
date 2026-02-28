import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        if (!email || !password) {
            setError('Please enter your email and password.');
            setIsLoading(false);
            return;
        }

        const response = await login(email, password);

        if (response.success) {
            navigate('/dashboard');
        } else {
            setError(response.message);
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center p-4 font-sans relative overflow-hidden w-full">
            {/* Decorative background elements */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 pointer-events-none"></div>
            <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 pointer-events-none"></div>

            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="flex justify-center items-center gap-3 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shadow-lg">
                        <div className="w-3.5 h-3.5 bg-white rounded-sm"></div>
                    </div>
                    <span className="font-bold text-3xl tracking-tight text-gray-900">Advance</span>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative z-10 w-full">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">Welcome back</h1>
                        <p className="text-gray-500 font-medium">Please enter your details to sign in.</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-medium border border-red-100">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-4">
                            {/* Email Input */}
                            <div className="relative">
                                <label className="block text-[13px] font-bold text-gray-700 mb-1.5 ml-1">Email</label>
                                <div className="relative flex items-center">
                                    <Mail className="absolute left-4 text-gray-400" size={18} />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3.5 pl-11 pr-4 text-[15px] focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none text-gray-700 placeholder:text-gray-400 font-medium"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="relative">
                                <label className="block text-[13px] font-bold text-gray-700 mb-1.5 ml-1">Password</label>
                                <div className="relative flex items-center">
                                    <Lock className="absolute left-4 text-gray-400" size={18} />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3.5 pl-11 pr-4 text-[15px] focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none text-gray-700 placeholder:text-gray-400 font-medium"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Options */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center group-hover:border-indigo-500 transition-colors">
                                    <input type="checkbox" className="hidden" />
                                    {/* Fake checkmark for styling */}
                                </div>
                                <span className="text-[13px] font-semibold text-gray-600">Remember me</span>
                            </label>
                            <a href="#" className="text-[13px] font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="mt-6 w-full bg-[#121212] hover:bg-black text-white rounded-2xl py-4 text-[15px] font-bold transition-all flex items-center justify-center gap-2 group shadow-md disabled:opacity-70"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-8 text-center">
                        <p className="text-[13px] font-medium text-gray-500">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-gray-900 font-bold hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
