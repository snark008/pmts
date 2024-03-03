import CustomerNav from "@/components/CustomerNav";
import qrcode from "@/assets/qrcode.png";
import Image from "next/image";

function CustomerPrescription() {
  return (
    <div>
      <div className="relative min-h-[2000px] antialiased bg-gray-100">
        <CustomerNav />
        <div className="mt-20 text-gray-600 p-4 md:py-8 xl:px-0 md:container md:mx-w-6xl md:mx-auto bg-white rounded-xl">
          <ul
            role="list"
            className="p-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow ">
              <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    <h4 className="truncate text-xs font-medium text-gray-900">
                      Prescription médicale de transport
                    </h4>
                    <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-blue-600 ring-1 ring-inset ring-green-600/20">
                      21/12/2023-18h25
                    </span>
                  </div>
                  <p className="mt-1 truncate text-sm text-gray-500">
                    Nicolas Prevot
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
                      <a href="/customer-prescription-details">
                        <button
                          type="button"
                          className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-emerald-300 rounded-lg hover:bg-emerald-500"
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
                              strokeWidth="2"
                              d="M21 12c0 1.2-4 6-9 6s-9-4.8-9-6c0-1.2 4-6 9-6s9 4.8 9 6Z"
                            />
                            <path
                              stroke="currentColor"
                              strokeWidth="2"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                          Afficher
                        </button>
                      </a>
                      <button
                        type="button"
                        className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-amber-300 rounded-lg hover:bg-amber-500"
                      >
                        <svg
                          className="w-6 h-6text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16.4 18H19c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v5c0 .6.4 1 1 1h2.6m9.4-7V5c0-.6-.4-1-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4c0 .6-.4 1-1 1H8a1 1 0 0 1-1-1v-4Z"
                          />
                        </svg>
                        Imprimer
                      </button>
                    </div>
                  </div>
                  <div className="-ml-px flex w-0 flex-1">
                    <div className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                      {" "}
                      <button
                        type="button"
                        className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-sky-300 rounded-lg hover:bg-sky-500"
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
                            d="M19 10V4c0-.6-.4-1-1-1h-8a1 1 0 0 0-.8.3l-4 4a1 1 0 0 0-.2.6V20c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-2M10 3v4c0 .6-.4 1-1 1H5m5 6h9m0 0-2-2m2 2-2 2"
                          />
                        </svg>
                        Exporter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow ">
              <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    <h4 className="truncate text-xs font-medium text-gray-900">
                      {"Demande d'accord préalable"}
                    </h4>
                    <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-blue-600 ring-1 ring-inset ring-green-600/20">
                      27/12/2023-11h55
                    </span>
                  </div>
                  <p className="mt-1 truncate text-sm text-gray-500">
                    Nicolas Prevot
                  </p>
                  <p className="mt-1 truncate text-sm text-gray-500">
                    <strong>Statut:</strong>
                    <span className="bg-amber-400 rounded rounded-full p-2 font-xs font-bold text-white ml-3">
                      En cours
                    </span>
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
                      <a href="/customer-prescription-details">
                        <button
                          type="button"
                          className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-emerald-300 rounded-lg hover:bg-emerald-500"
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
                              strokeWidth="2"
                              d="M21 12c0 1.2-4 6-9 6s-9-4.8-9-6c0-1.2 4-6 9-6s9 4.8 9 6Z"
                            />
                            <path
                              stroke="currentColor"
                              strokeWidth="2"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                          Afficher
                        </button>
                      </a>

                      <button
                        type="button"
                        className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-amber-300 rounded-lg hover:bg-amber-500"
                      >
                        <svg
                          className="w-6 h-6text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16.4 18H19c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v5c0 .6.4 1 1 1h2.6m9.4-7V5c0-.6-.4-1-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4c0 .6-.4 1-1 1H8a1 1 0 0 1-1-1v-4Z"
                          />
                        </svg>
                        Imprimer
                      </button>
                    </div>
                  </div>
                  <div className="-ml-px flex w-0 flex-1">
                    <div className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                      {" "}
                      <button
                        type="button"
                        className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-sky-300 rounded-lg hover:bg-sky-500"
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
                            d="M19 10V4c0-.6-.4-1-1-1h-8a1 1 0 0 0-.8.3l-4 4a1 1 0 0 0-.2.6V20c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-2M10 3v4c0 .6-.4 1-1 1H5m5 6h9m0 0-2-2m2 2-2 2"
                          />
                        </svg>
                        Exporter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CustomerPrescription;
