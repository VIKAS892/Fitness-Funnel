import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Transform Your Body in Just 7 Days</h1>
      <p className="text-lg md:text-xl mb-6 max-w-xl">
        Join our free fitness challenge designed to kickstart your health journey with quick home workouts and meal plans.
      </p>
      <Link
        to="/get-started"
        className="bg-white text-green-500 px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-100"
      >
        Get My Free Plan
      </Link>
    </div>
  );
}
