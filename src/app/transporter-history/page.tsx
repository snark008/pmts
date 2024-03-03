import MobileNav from "@/components/MobileNav";
import qrcode from "@/assets/qrcode.png";
import Image from "next/image";

function TransporterHistory() {
  return (
    <div className="relative min-h-[2000px] antialiased bg-gray-100">
      <MobileNav />
      <div className="mt-20 text-gray-600 p-4 md:py-8 xl:px-0 md:container md:mx-w-6xl md:mx-auto bg-white rounded-xl">
        <div className=" mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6 p-6">
          <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                <span className="flex items-center text-sky-400 ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <p className="font-dm text-sm font-medium text-gray-600">
                Nombre Total
              </p>
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                3
              </h4>
            </div>
          </div>

          <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                <span className="flex items-center text-emerald-500">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <p className="font-dm text-sm font-medium text-gray-600">
                Facturation en cours
              </p>
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                1
              </h4>
            </div>
          </div>

          <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                <span className="flex items-center text-brand-500 dark:text-white">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <p className="font-dm text-sm font-medium text-gray-600">
                Facturés
              </p>
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                2
              </h4>
            </div>
          </div>
        </div>

        <ul
          role="list"
          className="p-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow ">
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-sm font-medium text-gray-900">
                    Pierre prevot
                  </h3>
                  <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-blue-600 ring-1 ring-inset ring-green-600/20">
                    21/12/2023-18h25
                  </span>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">
                  Transport simple
                </p>
              </div>
              <Image
                className="h-20 w-20 flex-shrink-0 rounded-lg bg-gray-300"
                src={qrcode}
                alt="code"
              />
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <div className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                    <span className="text-amber-500">26Km</span> -{" "}
                    <span className="text-sky-400 font-bold">56€</span>
                  </div>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href="tel:+1-202-555-0170"
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    Statut:{" "}
                    <span className="bg-emerald-400 font-bold text-white rounded rounded-3xl p-2">
                      Facturé
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-sm font-medium text-gray-900">
                    Sylvie Leroux
                  </h3>
                  <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-blue-600 ring-1 ring-inset ring-green-600/20">
                    21/01/2024-14h23
                  </span>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">
                  Transport partagé
                </p>
              </div>
              <Image
                className="h-20 w-20 flex-shrink-0 rounded-lg bg-gray-300"
                src={qrcode}
                alt="code"
              />
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <div className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                    <span className="text-amber-500">22Km</span> -{" "}
                    <span className="text-sky-400 font-bold">48€</span>
                  </div>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href="tel:+1-202-555-0170"
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    Statut:{" "}
                    <span className="bg-amber-500 font-bold text-white rounded rounded-3xl p-2">
                      En attente
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-sm font-medium text-gray-900">
                    Rachid Ben Ouali
                  </h3>
                  <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-blue-600 ring-1 ring-inset ring-green-600/20">
                    21/01/2024-14h23
                  </span>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">
                  Transport partagé
                </p>
              </div>
              <Image
                className="h-20 w-20 flex-shrink-0 rounded-lg bg-gray-300"
                src={qrcode}
                alt="code"
              />
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <div className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                    <span className="text-amber-500">22Km</span> -{" "}
                    <span className="text-sky-400 font-bold">48€</span>
                  </div>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href="tel:+1-202-555-0170"
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    Statut:{" "}
                    <span className="bg-amber-500 font-bold text-white rounded rounded-3xl p-2">
                      En attente
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TransporterHistory;
