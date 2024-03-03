"use client";
import CpamNav from "@/components/CpamNav";
import Image from "next/image";
import code from "@/assets/qrcode.png";
import { useRouter } from "next/navigation";

function CpamTransporterPage() {
  const router = useRouter();
  return (
    <>
      <div className="relative min-h-[2000px] antialiased bg-gray-100">
        <CpamNav />

        <div className="mt-20 p-4 md:py-8 xl:px-0 md:container text-gray-600 md:mx-w-6xl md:mx-auto rounded-xl bg-white">
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
                  2
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
                  En attente de paiement
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
                  Payé
                </p>
                <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                  1
                </h4>
              </div>
            </div>
          </div>

          {/* search */}
          <div className="p-20">
            <div className="mt-1 mb-4 flex items-center justify-between">
              <div className="flex items-center select-none">
                <span className="hover:text-pink-500 cursor-pointer mr-3">
                  <svg viewBox="0 0 512 512" className="h-5 w-5 fill-current">
                    <path
                      d="M505 442.7L405.3
								343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7
								44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1
								208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4
								2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9
								0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7
								0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0
								128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    ></path>
                  </svg>
                </span>

                <input
                  className="bg-transparent focus:outline-none"
                  placeholder="Région..."
                />
                <input
                  className="bg-transparent focus:outline-none"
                  placeholder="Département..."
                />
                <input
                  className="bg-transparent focus:outline-none"
                  placeholder="Date..."
                />
                <input
                  className="bg-transparent focus:outline-none"
                  placeholder="Transporteur..."
                />
              </div>

              <div className="flex items-center select-none">
                <span>Filtrer</span>
                <button
                  className="ml-3 bg-gray-400 dark:bg-gray-600
						dark:text-gray-400 rounded-full p-2 focus:outline-none
						hover:text-white hover:bg-sky-400 transition
						duration-500 ease-in-out"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0
								01-1.41 0l-2.01-2.01a.989.989 0
								01-.29-.83V12h-.03L4.21 4.62a1 1 0
								01.17-1.4c.19-.14.4-.22.62-.22h14c.22 0
								.43.08.62.22a1 1 0 01.17 1.4L14.03 12H14z"
                    ></path>
                  </svg>
                </button>
                <button
                  className="ml-3 bg-gray-400 dark:bg-gray-600
                    dark:text-gray-400 rounded-full p-2 focus:outline-none
                    hover:text-white hover:bg-sky-400 transition
                    duration-500 ease-in-out"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2
								19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2z"
                    ></path>
                  </svg>
                </button>
                <button
                  className="ml-3 bg-gray-400 dark:bg-gray-600
                    dark:text-gray-400 rounded-full p-2 focus:outline-none
                    hover:text-white hover:bg-sky-400 transition
                    duration-500 ease-in-out"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path
                      d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4
								4 0 014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21
								3.58-4 8-4z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* end search */}

          {/* Table */}
          <div className="p-20">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Code</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Societe de transport
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Numéro de sécurité sociale
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Nombre de Km
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Tarif</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Date</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Heure</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Statut</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  <tr
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/cpam-details");
                    }}
                  >
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <Image
                            className="rounded-lg"
                            src={code}
                            width="70"
                            height="70"
                            alt="Code"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">Ambu94</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">1 809 987 5643 1234 45</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-green-500">
                        23
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium ">56€</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium ">24/12/2023</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium ">18h35</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <span className="rounded rounded-lg p-1 bg-emerald-400 font-bold text-xs text-white">
                        Payé
                      </span>
                    </td>
                  </tr>
                  <tr
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/cpam-details");
                    }}
                  >
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <Image
                            className="rounded-lg"
                            src={code}
                            width="70"
                            height="70"
                            alt="Code"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">Ambu94</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">1 567 987 5643 1234 45</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-green-500">
                        23
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium ">56€</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium ">24/12/2023</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium ">18h35</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <span className="rounded rounded-lg p-1 bg-amber-500 font-bold text-xs text-white">
                        En attente de paiement
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}

export default CpamTransporterPage;
