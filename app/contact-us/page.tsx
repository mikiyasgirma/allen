"use client"
import { useState } from "react";

const ContactUs = () => {
    
const [email, setEmail] = useState('');

  const handleSubmit = (e : any) => {
    e.preventDefault();
    // Here you can implement your logic to handle the form submission
    console.log(`Submitting email: ${email}`);
    setEmail('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="max-w-lg w-full px-6 py-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-4">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-lg text-gray-500 mb-6">
        Get the latest updates and news delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md mr-0 sm:mr-2 mb-4 sm:mb-0 focus:outline-none focus:border-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition duration-300 focus:outline-none"
          style={{ backgroundColor: '#528265' }}
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
  );
}
export default ContactUs