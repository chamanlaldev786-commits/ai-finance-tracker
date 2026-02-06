"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const { login, user } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ✅ Redirect after signup
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  const submit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email || !password || !confirmPassword)
      return setError("All fields are required");

    if (!email.includes("@"))
      return setError("Please enter a valid email address");

    if (password.length < 6)
      return setError("Password must be at least 6 characters");

    if (password !== confirmPassword)
      return setError("Passwords do not match");

    setLoading(true);

    login(email); // ✅ frontend-only signup
    setSuccess(true);

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <div className="max-w-md w-full bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl p-8 space-y-6">

        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold">Create Your Account</h2>
          <p className="text-sm opacity-80">
            Start managing your finances with AI
          </p>
        </div>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 text-green-600 p-3 rounded">
            Account created successfully. Redirecting...
          </div>
        )}

        <form onSubmit={submit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button disabled={loading} type="submit" className="w-full">
            {loading ? "Creating..." : "Create Account"}
          </Button>
        </form>
      </div>
    </div>
  );
}
