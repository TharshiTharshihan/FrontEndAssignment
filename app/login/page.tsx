import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12 bg-black">
        <section className="flex items-center justify-center p-0  sm:px-12 lg:col-span-7 lg:px-16 lg:py-1 xl:col-span-6">
          <div className="-mt-[650px]">
            <img src="/logo.png" alt="logo" className=" w-[24] h-[25]" />
          </div>
          <div className="max-w-xl lg:max-w-3xl">
            <div>
              <h1>Welcome back to Room.me!</h1>
              <p>
                Room.me is an innovative video conference product that
                revolutionizes virtual meetings.
              </p>
            </div>
            <form className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-4 ">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  // value={email}
                  // onChange={(e) => setemail(e.target.value)}
                  className="mt-1 w-full rounded-md border-gray-200  text-sm text-gray-700 shadow-xs dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                  className="mt-1 w-full rounded-md border-gray-200  text-sm text-gray-700 shadow-xs dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  By creating an account, you agree to our
                  <a
                    href="#"
                    className="text-gray-700 underline dark:text-gray-200"
                  >
                    terms and conditions
                  </a>
                  and
                  <a
                    href="#"
                    className="text-gray-700 underline dark:text-gray-200"
                  >
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-cyan-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-hidden dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Login
                </button>
                <br />

                <p className="mt-4 text-sm text-gray-500  dark:text-gray-400">
                  Do not have an account?
                  <Link
                    href="/dashboard"
                    className="text-gray-700 underline dark:text-gray-200"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </section>

        <section className="relative flex h-32 items-end  lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="/login.png"
            className="absolute inset-0 h-full w-[700px] object-cover opacity-80 p-4 rounded-4xl "
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <span className="sr-only">Home</span>
            </a>

            {/* <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to Squid 🦑
              </h2> */}

            <p className=" w-96 text-white  transform -translate-y-20 bg-blur">
              “We love the screen sharing and whiteboarding features, which have
              improved our presentations. Room.me has become an essential tool
              for our team, allowing us to collaborate effectively. Highly
              recommended!”
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
