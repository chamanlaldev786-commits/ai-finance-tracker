"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login, user } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ ONLY redirect place
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  const submit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email || !password)
      return setError("Email and password are required");

    if (!email.includes("@"))
      return setError("Please enter a valid email");

    if (password.length < 6)
      return setError("Password must be at least 6 characters");

    setLoading(true);

    // ✅ LOGIN
    login(email);

    // ✅ SHOW SUCCESS
    setSuccess(true);

    setLoading(false);

    // ❌ NO router.push here
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-md w-full p-8 bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl space-y-6">
        <h2 className="text-3xl font-extrabold">Login</h2>

        {error && (
          <div className="text-red-600 bg-red-100 p-3 rounded">
            {error}
          </div>
        )}

        {success && (
          <div className="text-green-600 bg-green-100 p-3 rounded">
            Login successful! Redirecting...
          </div>
        )}

        <form onSubmit={submit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button disabled={loading} type="submit" className="w-full">
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
}
