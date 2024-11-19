import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User registered:', userCredential);
            // Optionally, save additional user data to your backend
        } catch (error) {
            console.error(error);
            // Handle errors
        }
    };
    

    return (
        <div className="container mx-auto">
            <h2 className="text-xl">Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="border p-2 m-2"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    className="border p-2 m-2"
                />
                <button type="submit" className="bg-green-500 text-white p-2 m-2">Register</button>
            </form>
        </div>
    );
};

export default Register;

