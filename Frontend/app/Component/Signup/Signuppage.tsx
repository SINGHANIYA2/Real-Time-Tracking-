"use client";

import { useState } from "react";

type SignuppageProps = {
  setSignup: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Signuppage({ setSignup }: SignuppageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, mobilenumber, password } = formData;

    if (!name || !email || !mobilenumber || !password) {
      alert("Please fill all ");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/v1/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Signup successful ✅");
        setSignup(false); // switch to login
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-center text-blue-700">
        Create Account
      </h2>

      <p className="text-center text-gray-500 mt-2">
        Book buses & track your journey
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="tel"
          name="mobilenumber"
          placeholder="Mobile Number"
          value={formData.mobilenumber}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-6">
        Already have an account?{" "}
        <span
          onClick={() => setSignup(false)}
          className="text-blue-600 font-medium cursor-pointer"
        >
          Login
        </span>
      </p>
    </div>
  );
}
