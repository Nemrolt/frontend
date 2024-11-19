import React from 'react';
import { useNavigate } from 'react-router-dom';
import Analytics from '../components/Analytics';

const Dashboard = () => {
    const navigate = useNavigate();
    const role = localStorage.getItem('role');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/login');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
            <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded mb-4">
                Logout
            </button>
            {role === 'teacher' && (
                <div>
                    <h2 className="text-xl font-bold">Teacher Tools</h2>
                    <Analytics />
                    {/* Add more teacher-specific components or links */}
                </div>
            )}
            {role === 'student' && (
                <div>
                    <h2 className="text-xl font-bold">Student Dashboard</h2>
                    {/* Add student-specific components or links */}
                </div>
            )}
        </div>
    );
};

export default Dashboard;

