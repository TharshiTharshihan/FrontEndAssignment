"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const correctEmail = "test@example.com";
  const correctPassword = "password123";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === correctEmail && password === correctPassword) {
      router.push("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="lg:grid lg:min-h-screen lg:grid-cols-12 bg-black text-white">
      <section className="flex flex-col justify-center px-8 py-12 sm:px-12 lg:col-span-7 xl:col-span-6">
        <div className="max-w-xl lg:max-w-3xl w-full">
          <div className="flex items-center gap-2 mb-3 p-3 ">
            <img
              src="/logo.png"
              alt="logo"
              className="w-6 h-6 fill-blue-500 -mt-40"
            />
            <span className="text-lg font-Days One text-white -mt-40">
              Room Me!
            </span>
          </div>

          <h1 className="text-2xl font-bold  mb-2">Welcome back to Room.me!</h1>
          <p className="mb-6 text-gray-300">
            Room.me is an innovative video conference product that <br />{" "}
            revolutionizes virtual meetings.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="mt-1 w-2xl rounded-md border border-gray-700 bg-gray-800 p-2 text-sm text-white"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="mt-1 w-full rounded-md border border-gray-700 bg-gray-800 p-2 text-sm text-white"
              />
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-semibold hover:opacity-90"
              >
                Sign in
              </button>
            </div>

            <button
              type="button"
              className="w-full flex items-center bg-white text-black justify-center gap-2 border border-gray-500 py-2 rounded-md text-sm hover:bg-gray-700 hover:text-white transition duration-200 "
            >
              <img src="/Google.svg" alt="Google" className="w-4 h-4" />
              Sign in with Google
            </button>

            <div className="flex justify-between items-center text-sm text-gray-400">
              <label className="flex items-center gap-1">
                <input type="checkbox" className="accent-blue-500" />
                Remember for 30 days
              </label>
              <a href="#" className="hover:underline text-white">
                Forgot password
              </a>
            </div>

            <p className="text-sm text-gray-400 text-center">
              Don’t have an account?{" "}
              <Link href="/signup" className="underline text-white">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </section>

      <section className="relative hidden lg:flex lg:col-span-5 xl:col-span-6 items-center justify-center  ">
        <img
          src="/login.png"
          alt="Testimonial"
          className="absolute inset-0 h-full w-[700px]  object-cover opacity-80 rounded-[40px] p-2"
        />
        <div className="relative  max-w-md text-white backdrop-blur-md p-6 rounded-xl ">
          <p className="mb-1 ">
            “We love the screen sharing and whiteboarding features, which have
            improved our presentations. Room.me has become an essential tool for
            our team, allowing us to collaborate effectively. Highly
            recommended!”
          </p>
          <p className="font-semibold">Sarah Markivoc – Project Manager</p>
        </div>
      </section>
    </div>
  );
};

export default Page;
