import { Link } from "react-router-dom";
import React from "react";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-green-100 text-gray-800 p-6">
      <h2 className="text-3xl font-bold mb-4">You're In! 🎉</h2>
      <p className="mb-6 max-w-md text-center">
        Check your inbox for your free 7-day plan. In the meantime, would you like to schedule a free call with one of our fitness coaches?
      </p>
      <a
        href="#"
        className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600"
      >
        Book a Free Coaching Call
      </a>
      <Link to="/" className="mt-4 text-sm text-blue-700 underline">Back to Home</Link>
    </div>
  );
}