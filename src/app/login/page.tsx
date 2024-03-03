"use client";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ButtonLoader from "@/components/Loader";

enum AccountType {
  DOCTOR = "doctor",
  PATIENT = "patient",
  TRANSPORTER = "transporter",
  CPAM = "cpam",
  CARE_SERVICE = "care_service",
}

enum DisplayType {
  LOGIN = "login",
  PREALABLE = "prealable",
}

export default function Component() {
  const router = useRouter();
  const [loginType, setLoginType] = useState<AccountType>(AccountType.DOCTOR);
  const [isLoaded, setIsLoaded] = useState(false);
  const [display, setDisplay] = useState<DisplayType>(DisplayType.PREALABLE);

  const handleLogin = (e: any) => {
    e.preventDefault();
    setIsLoaded(true);
    setTimeout(() => {
      switch (loginType) {
        case AccountType.DOCTOR:
          router.push("/profile");
          break;
        case AccountType.PATIENT:
          router.push("/customer-account");
          break;
        case AccountType.TRANSPORTER:
          router.push("/transporter");
          break;
        case AccountType.CPAM:
          router.push("/cpam-prealable");
          break;
        case AccountType.CARE_SERVICE:
          router.push("/doctor");
          break;
        default:
          router.push("/profile");
          break;
      }
    }, 3000);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Image
              alt="Logo"
              width={100}
              height={100}
              className="mx-auto mb-20"
              src={logo}
            />
            <h2 className="text-center text-xl font-extrabold text-gray-600 dark:text-gray-200">
              Connexion à votre compte
            </h2>
            {display === DisplayType.PREALABLE && (
              <>
                <div className="bg-white dark:bg-gray-900">
                  <div className="container px-6 py-3 mx-auto">
                    <div className="mt-6 space-y-3 xl:mt-12">
                      <div
                        className={`flex items-center justify-between max-w-2xl px-2 py-2 mx-auto border  cursor-pointer rounded-xl ${
                          loginType === AccountType.DOCTOR && "border-sky-400"
                        }`}
                        onClick={() => setLoginType(AccountType.DOCTOR)}
                      >
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-5 h-5 sm:h-9 sm:w-9 ${
                              loginType === AccountType.DOCTOR
                                ? "text-sky-400"
                                : "text-gray-400"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>

                          <div className="flex flex-col items-center mx-5 space-y-1">
                            <h2 className="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">
                              Praticien
                            </h2>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`flex items-center justify-between max-w-2xl px-2 py-2 mx-auto border  cursor-pointer rounded-xl ${
                          loginType === AccountType.TRANSPORTER &&
                          "border-sky-400"
                        }`}
                        onClick={() => setLoginType(AccountType.TRANSPORTER)}
                      >
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-5 h-5 sm:h-9 sm:w-9 ${
                              loginType === AccountType.TRANSPORTER
                                ? "text-sky-400"
                                : "text-gray-400"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>

                          <div className="flex flex-col items-center mx-5 space-y-1">
                            <h2 className="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">
                              Transporteur
                            </h2>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`flex items-center justify-between max-w-2xl px-2 py-2 mx-auto border  cursor-pointer rounded-xl ${
                          loginType === AccountType.PATIENT && "border-sky-400"
                        }`}
                        onClick={() => setLoginType(AccountType.PATIENT)}
                      >
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-5 h-5 sm:h-9 sm:w-9 ${
                              loginType === AccountType.PATIENT
                                ? "text-sky-400"
                                : "text-gray-400"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>

                          <div className="flex flex-col items-center mx-5 space-y-1">
                            <h2 className="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">
                              Patient
                            </h2>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`flex items-center justify-between max-w-2xl px-2 py-2 mx-auto border  cursor-pointer rounded-xl ${
                          loginType === AccountType.CPAM && "border-sky-400"
                        }`}
                        onClick={() => setLoginType(AccountType.CPAM)}
                      >
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-5 h-5 sm:h-9 sm:w-9 ${
                              loginType === AccountType.CPAM
                                ? "text-sky-400"
                                : "text-gray-400"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>

                          <div className="flex flex-col items-center mx-5 space-y-1">
                            <h2 className="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">
                              CPAM
                            </h2>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`flex items-center justify-between max-w-2xl px-2 py-2 mx-auto border  cursor-pointer rounded-xl ${
                          loginType === AccountType.CARE_SERVICE &&
                          "border-sky-400"
                        }`}
                        onClick={() => setLoginType(AccountType.CARE_SERVICE)}
                      >
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-5 h-5 sm:h-9 sm:w-9 ${
                              loginType === AccountType.CARE_SERVICE
                                ? "text-sky-400"
                                : "text-gray-400"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>

                          <div className="flex flex-col items-center mx-5 space-y-1">
                            <h2 className="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">
                              Service Mutuelle
                            </h2>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <button
                          className="px-8 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-sky-400 rounded-md hover:bg-sky-500"
                          onClick={() => setDisplay(DisplayType.LOGIN)}
                        >
                          Valider
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {display === DisplayType.LOGIN && (
            <>
              <form action="#" className="mt-8 space-y-6" method="POST">
                <input name="remember" type="hidden" value="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label className="sr-only" htmlFor="username">
                      Identifiant
                    </label>
                    <input
                      autoComplete="username"
                      className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md"
                      id="username"
                      name="username"
                      placeholder="Identifiant"
                      required
                      type="username"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="username">
                      Mot de passe
                    </label>
                    <input
                      className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md"
                      placeholder=" Mot de passe"
                      required
                      type="password"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <Link
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      href="/forgot-password"
                    >
                      Mot de passe oublié?
                    </Link>
                  </div>
                </div>
                <div>
                  <button
                    onClick={(e) => handleLogin(e)}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-sky-400 hover:bg-sky-500"
                    type="submit"
                  >
                    {isLoaded && <ButtonLoader />} Connexion
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
