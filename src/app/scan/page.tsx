"use client";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";
import qrscan from "@/assets/qrscan.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ButtonLoader from "@/components/Loader";

function ScanCode() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClicked = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/scan-info");
    }, 3000);
  };

  return (
    <div>
      <div className="relative min-h-[1000px] antialiased bg-gray-100">
        <MobileNav />
        <div className="mt-20 text-gray-600 xl:w-[30%] p-4 md:py-8 xl:px-0 mx-auto bg-white rounded-xl">
          <div className="bg-white  rounded-lg overflow-hidden shadow-lg">
            <div className="p-1 bg-blue-200"></div>
            <div className="p-8">
              <div className="mx-auto">
                <Image
                  alt="Logo"
                  width={250}
                  height={250}
                  className="mx-auto"
                  src={qrscan}
                />
              </div>
            </div>
            <div className="p-4">
              <button
                className="mb-20 w-full font-bold bg-sky-400 text-white rounded-full px-4 py-2 hover:bg-sky-500 "
                onClick={(e) => handleClicked(e)}
              >
                {isLoading && <ButtonLoader />} Scanner le code
              </button>
            </div>

            <div className="p-10">
              <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
                <button
                  type="button"
                  className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                ></button>
                <div
                  id="tooltip-home"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Home
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button
                  data-tooltip-target="tooltip-wallet"
                  type="button"
                  className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                  <svg
                    className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-sky-500 dark:group-hover:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 6c0-1.1.9-2 2-2h5.5a2 2 0 0 1 1.6.7L14 7H3V6Zm0 3v10c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V9H3Z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span className="sr-only">Wallet</span>
                </button>
                <div
                  id="tooltip-wallet"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Wallet
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    data-tooltip-target="tooltip-new"
                    type="button"
                    className="inline-flex items-center justify-center w-10 h-10 font-medium bg-sky-400 rounded-full hover:bg-sky-500 group"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 8h4V4m12 4h-4V4M4 16h4v4m12-4h-4v4"
                      />
                    </svg>
                    <span className="sr-only">New item</span>
                  </button>
                </div>
                <div
                  id="tooltip-new"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Create new item
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button
                  data-tooltip-target="tooltip-settings"
                  type="button"
                  className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                  <svg
                    className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
                    />
                  </svg>
                  <span className="sr-only">Settings</span>
                </button>
                <div
                  id="tooltip-settings"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Settings
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button
                  data-tooltip-target="tooltip-profile"
                  type="button"
                  className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                  <span className="sr-only">Profile</span>
                </button>
                <div
                  id="tooltip-profile"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Profile
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default ScanCode;
