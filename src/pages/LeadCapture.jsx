import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";

export default function LeadCapture() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    navigate("/thank-you");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-4">
      <h2 className="text-3xl font-bold mb-4">Get Your Free 7-Day Fitness Plan</h2>
      <p className="mb-6 text-center max-w-md">
        Enter your email below and we’ll send you a complete guide to help you start losing fat and gaining energy.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Send Me The Plan
        </button>
      </form>
    </div>
  );
}