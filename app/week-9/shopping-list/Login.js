"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, githubProvider } from "../../utils/firebase";

export default function Login() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      console.log("User:", result.user);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-black text-white px-4 py-2 rounded mb-4"
    >
      Login with GitHub
    </button>
  );
}