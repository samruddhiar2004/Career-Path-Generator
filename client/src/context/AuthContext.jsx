import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage for an existing session on load
        const userJson = localStorage.getItem('currentUser');
        if (userJson) {
            setCurrentUser(JSON.parse(userJson));
        }
        setLoading(false);
    }, []);

    const signup = async (name, email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    // Get existing users
                    const usersJson = localStorage.getItem('users');
                    const users = usersJson ? JSON.parse(usersJson) : [];

                    // Check if user already exists
                    if (users.some(u => u.email === email)) {
                        resolve({ success: false, message: 'Email already exists.' });
                        return;
                    }

                    const newUser = {
                        id: Date.now().toString(),
                        name,
                        email,
                        password, // Storing raw password for local demo purposes only
                        createdAt: new Date().toISOString()
                    };

                    // Save to 'database' (local storage)
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));

                    // Log them in immediately
                    setCurrentUser(newUser);
                    localStorage.setItem('currentUser', JSON.stringify(newUser));

                    resolve({ success: true, user: newUser });
                } catch (error) {
                    resolve({ success: false, message: 'An error occurred during signup.' });
                }
            }, 600); // Simulate network request
        });
    };

    const login = async (email, password) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const usersJson = localStorage.getItem('users');
                const users = usersJson ? JSON.parse(usersJson) : [];

                const user = users.find(u => u.email === email && u.password === password);

                if (user) {
                    setCurrentUser(user);
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    resolve({ success: true, user });
                } else {
                    resolve({ success: false, message: 'Invalid email or password.' });
                }
            }, 600);
        });
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
    };

    const value = {
        currentUser,
        signup,
        login,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
