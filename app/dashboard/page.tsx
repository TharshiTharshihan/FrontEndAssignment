"use client";

import { logout } from "../login/actions";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <>
      <div className="p-6 flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-3xl font-extrabold mb-8 text-center">
          Welcome to the Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 transition-colors px-6 py-3 rounded-md text-white font-semibold shadow-md"
        >
          Logout
        </button>
      </div>
    </>
  );
}
