import React from 'react';

const Login = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen  ">
        {/* Left Side: Login Form */}
        <div className="w-full lg:w-2/5 bg-white  p-6 lg:p-12">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="text-left text-2xl font-bold text-gray-900">Sign In</h2>
            <p className="text-sm text-[#A3AED0] mt-2">Enter your email and password to sign in!</p>
          </div>

          <button
            type="button"
            className="text-black gap-2 sm:mx-auto sm:w-full sm:max-w-md bg-[#F4F7FE] hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mt-10"
          >
            <img src="/Image/Group.png" alt="google icon" className="h-5 w-5" />
            Sign in with Google
          </button>

          <div className="flex items-center gap-5 mt-7 justify-center w-full">
            <hr className="w-1/3 h-px bg-gray-200 border-0 dark:bg-gray-700" />
            <p className="text-sm text-[#A3AED0]">or</p>
            <hr className="w-1/3 h-px bg-gray-200 border-0 dark:bg-gray-700" />
          </div>

          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <form className="space-y-4" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email<span className="text-indigo-600">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block w-full rounded-lg border border-gray-300 py-3 text-gray-900 placeholder-gray-400 sm:text-sm sm:leading-6"
                    placeholder="mail@simmmple.com"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password<span className="text-indigo-600">*</span>
                  </label>
                </div>
                <div className="mt-2 relative">
                  <img
                    src="./Image/remove_red_eye.png"
                    alt="Toggle visibility"
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => {
                      // Toggle password visibility logic here
                    }}
                  />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="block w-full rounded-lg border py-3 text-gray-900 placeholder-gray-400 border-gray-300 sm:text-sm sm:leading-6 pl-10"
                    placeholder="Min. 8 characters"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mt-7">
                <div>
                  <input
                    checked
                    id="checked-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Keep me logged in
                  </label>
                </div>
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full mt-10 justify-center rounded-lg border bg-black px-3 py-4 text-sm font-semibold leading-6 text-white"
                >
                  Sign in
                </button>
              </div>
            </form>

            <footer className="mt-20 text-[#A3AED0] text-sm w-full sm:max-w-md mx-auto text-center">
              <h1>© 2022 Horizon. All Rights Reserved. Made with love by Simmmple!</h1>
            </footer>
          </div>
        </div>

        {/* Right Side: Background Image and Links */}
        <div className="relative w-full lg:w-3/5 h-80 lg:h-full rounded-bl-[150px] overflow-hidden">
          <img
            src="./Image/Background 5.4.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 mt-4 z-10">
            <img src="./Image/Horizon Logo.png" alt="Horizon Logo" className="w-48  h-full" />
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-sm text-white px-4 lg:px-8">
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">
                Market Place
              </a>
              <a href="#" className="hover:underline">
                License
              </a>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </div>
            <div className="w-8 lg:w-10">
              <img src="./Image/light.png" alt="Light icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
