import MobileNav from "@/components/MobileNav";
import Image from "next/image";
import qrcode from "@/assets/qrcode.png";

function ScanInfo() {
  return (
    <div>
      <div className="relative min-h-[1000px] antialiased bg-gray-100">
        <MobileNav />
        <div className="mt-20 text-gray-600 p-4 w-[30%] md:py-8 xl:px-0 mx-auto bg-white rounded-xl">
          <div className="mx-auto flex max-w-3xl flex-wrap justify-center rounded-lg bg-white px-5 ">
            <div className="border rounded-xl p-4 flex-wrap md:flex">
              <div className="mx-auto">
                <Image
                  className="mx-auto mt-12 h-52 w-52 rounded-lg border p-2 md:mt-0"
                  src={qrcode}
                  alt="step"
                />
                <div>
                  <h1 className="font-laonoto mt-4 text-center text-xl font-bold">
                    Pierre Prevot
                  </h1>
                  <p className="mt-1 text-center font-medium text-sky-400">
                    <strong>Date de naissance:</strong> 01/01/1990
                  </p>
                </div>
              </div>

              <div className="mt-8 max-w-sm md:mt-0 md:ml-10 md:w-2/3">
                <div className="relative flex pb-12">
                  <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                    <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                  </div>
                  <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-400 text-white"></div>
                  <div className="flex-grow pl-4">
                    <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                      Départ
                    </h2>
                    <p className="font-laonoto leading-relaxed">
                      23 Rue de la gare 75000 Paris
                    </p>
                  </div>
                </div>
                <div className="relative flex pb-12">
                  <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                    <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                  </div>
                  <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-400 text-white"></div>
                  <div className="flex-grow pl-4">
                    <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                      Temps Trajet (Km)
                    </h2>
                    <p className="font-laonoto leading-relaxed">
                      20 minutes, 33 Km
                    </p>
                  </div>
                </div>
                <div className="relative flex pb-12">
                  <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-400 text-white"></div>
                  <div className="flex-grow pl-4">
                    <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                      Arrivée
                    </h2>
                    <p className="font-laonoto leading-relaxed">
                      23 impasse Ledru Rollin 75000 Paris{" "}
                      <span>
                        {" "}
                        <b className="text-white">.....................</b>
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Infos widget */}
            <div className="mt-5 col-span-12 sm:col-span-6 md:col-span-3">
              <div className="flex flex-row bg-white shadow-sm border border-4 rounded-lg border-amber-400 rounded p-4">
                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl ">
                  <svg
                    className="w-6 h-6 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-gray-500">
                    <strong>Detection Transport partagé</strong>
                  </div>
                  <div className="font-bold text-lg">
                    <strong>Nombre de passagers:</strong> 2
                  </div>
                </div>
              </div>
            </div>
            {/* end */}
            <div className="border p-4 mx-auto mt-10 flex max-w-3xl flex-wrap justify-center rounded-xl bg-white px-5 ">
              <div className="flex-wrap md:flex">
                <div className="mx-auto">
                  <Image
                    className="mx-auto mt-12 h-52 w-52 rounded-lg border p-2 md:mt-0"
                    src={qrcode}
                    alt="step"
                  />
                  <div>
                    <h1 className="font-laonoto mt-4 text-center text-xl font-bold">
                      Sylvie Leroux
                    </h1>
                    <p className="mt-1 text-center font-medium text-sky-400">
                      <strong>Date de naissance:</strong> 13/07/1965
                    </p>
                  </div>
                </div>

                <div className="mt-8 max-w-sm md:mt-0 md:ml-10 md:w-2/3">
                  <div className="relative flex pb-12">
                    <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                      <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                    </div>
                    <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-400 text-white"></div>
                    <div className="flex-grow pl-4">
                      <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                        Départ
                      </h2>
                      <p className="font-laonoto leading-relaxed">
                        23 Rue de la gare 75000 Paris
                      </p>
                    </div>
                  </div>
                  <div className="relative flex pb-12">
                    <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                      <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                    </div>
                    <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-400 text-white"></div>
                    <div className="flex-grow pl-4">
                      <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                        Temps Trajet (Km)
                      </h2>
                      <p className="font-laonoto leading-relaxed">
                        20 minutes, 33 Km
                      </p>
                    </div>
                  </div>
                  <div className="relative flex pb-12">
                    <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-400 text-white"></div>
                    <div className="flex-grow pl-4">
                      <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">
                        Arrivée
                      </h2>
                      <p className="font-laonoto leading-relaxed">
                        68 Rue Salvador Allende 94550 Chevilly-Larues{" "}
                        <span>
                          {" "}
                          <b className="text-white">.....................</b>
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScanInfo;
