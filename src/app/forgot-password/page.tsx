import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Image
            alt="Logo"
            width={200}
            height={220}
            className="mx-auto mb-20"
            src={logo}
          />
          <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-gray-200">
            Forgot Your Password?
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
            Enter your email address and we will send you a reset link.
          </p>
        </div>
        <form action="#" className="mt-8 space-y-6" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                autoComplete="email"
                className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md"
                id="email"
                name="email"
                placeholder="Email"
                required
                type="email"
              />
            </div>
          </div>
          <div>
            <button
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-sky-400 hover:bg-sky-500"
              type="submit"
            >
              Send Reset Link
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link
            href="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
