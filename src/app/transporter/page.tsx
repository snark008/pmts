"use client";
import MobileNav from "@/components/MobileNav";
import ambl from "@/assets/ambl.svg";
import Image from "next/image";
import card from "@/assets/card.png";
import { useState } from "react";

enum DisplayPart {
  VEHICLE = "VEHICLE",
  CARD = "CARD",
  LICENSE = "LICENSE",
}

function TransporterPage() {
  const [displayPart, setDisplayPart] = useState<DisplayPart>(
    DisplayPart.VEHICLE
  );
  return (
    <div className="relative min-h-[2000px] antialiased bg-gray-100">
      <MobileNav />
      <div className="mt-20 text-gray-600 p-4 md:py-8 xl:px-0 md:container md:mx-w-6xl md:mx-auto bg-white rounded-xl">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <Image
                    alt="Avatar"
                    src={ambl}
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  />
                  <h1 className="text-xl font-bold">Nicolas Bouvier</h1>
                  <p className="text-gray-700">Actif depuis: 12/12/2023</p>
                </div>
                <div className="mt-10 flex flex-col">
                  <ul>
                    <li className="mb-2">
                      <strong>Date de naissance: </strong>17/12/1993
                    </li>
                    <li className="mb-2">
                      <strong>{"Adresse de l'entreprise:"} </strong>23 Rue Ledru
                      Rollin 94100 Saint-Maur-des-Fossés
                    </li>
                    <li className="mb-2">
                      <strong>Raison sociale </strong>Ambu94
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9 mt-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
                <div className="relative group h-48 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <button
                    className="block"
                    onClick={() => setDisplayPart(DisplayPart.VEHICLE)}
                  >
                    <div className="h-28">
                      <div className="absolute -top-20 lg:top-[-40%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-sky-400 rounded-xl justify-items-center align-middle">
                        <img
                          src="https://epicpadprinting.com/public/img/indus/Automotive.png"
                          className="w-36 h-36  mt-6 m-auto"
                          alt="Automotive"
                          title="Automotive"
                          loading="lazy"
                          width="200"
                          height="200"
                        />
                      </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                      <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                        Véhicule de transport sanitaire
                      </p>
                    </div>
                  </button>
                </div>

                <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <button
                    className="block"
                    onClick={() => setDisplayPart(DisplayPart.CARD)}
                  >
                    <div className="h-28">
                      <div className="absolute -top-20 lg:top-[-40%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-sky-400 rounded-xl justify-items-center align-middle">
                        <Image
                          src={card}
                          className="w-44 h-32  mt-6 m-auto"
                          alt="Medical"
                          title="Medical"
                          loading="lazy"
                          width="200"
                          height="200"
                        />
                      </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                      <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                        {" Carte professionnelle"}
                      </p>
                    </div>
                  </button>
                </div>

                <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <button
                    className="block"
                    onClick={() => setDisplayPart(DisplayPart.LICENSE)}
                  >
                    <div className="h-28">
                      <div className="absolute -top-20 lg:top-[-40%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-sky-400 rounded-xl justify-items-center align-middle">
                        <Image
                          src={card}
                          className="w-44 h-32  mt-6 m-auto"
                          alt="Medical"
                          title="Medical"
                          loading="lazy"
                          width="200"
                          height="200"
                        />
                      </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                      <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                        {" Permis de conduire"}
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              {displayPart === DisplayPart.VEHICLE && (
                <div className="bg-white mt-20 shadow rounded-lg p-6">
                  <div className="flex">
                    <h2 className="text-xl font-bold mb-4">Véhicule</h2>{" "}
                    <svg
                      className="w-8 h-8 ml-5 text-emerald-400"
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
                        d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"
                      />
                    </svg>
                  </div>
                  <ul>
                    <li className="mb-2">
                      <strong>{"Plaque d'immatriculation:"} </strong>435GB7
                    </li>
                    <li className="mb-2">
                      <strong>{"Type:"} </strong>Taxi
                    </li>
                    <li className="mb-2">
                      <strong>{"Marque:"} </strong>Peugeot
                    </li>
                    <li className="mb-2">
                      <strong>{"Model:"} </strong>5008
                    </li>
                  </ul>
                  <div className="flex flex-wrap ">
                    <button
                      type="button"
                      className="text-white bg-emerald-400 hover:bg-emerald-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center m-2"
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
                          d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1h-2m-1-5-4 5-4-5m9 8h0"
                        />
                      </svg>
                      Télécharger la carte grise
                    </button>
                    <button
                      type="button"
                      className="text-white bg-amber-400 hover:bg-amber-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center m-2"
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
                      Visualiser la carte
                    </button>
                  </div>
                </div>
              )}

              {displayPart === DisplayPart.CARD && (
                <div className="bg-white mt-20 shadow rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">
                    Carte professionelle
                  </h2>

                  <div className="flex flex-wrap ">
                    <button
                      type="button"
                      className="text-white bg-emerald-400 hover:bg-emerald-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center m-2"
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
                          d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1h-2m-1-5-4 5-4-5m9 8h0"
                        />
                      </svg>
                      Télécharger la carte
                    </button>
                    <button
                      type="button"
                      className="text-white bg-amber-400 hover:bg-amber-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center m-2"
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
                      Visualiser la carte
                    </button>
                  </div>
                </div>
              )}

              {displayPart === DisplayPart.LICENSE && (
                <div className="bg-white mt-20 shadow rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Permis de conduire</h2>

                  <div className="flex flex-wrap">
                    <button
                      type="button"
                      className="text-white bg-emerald-400 hover:bg-emerald-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center m-2"
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
                          d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1h-2m-1-5-4 5-4-5m9 8h0"
                        />
                      </svg>
                      Télécharger
                    </button>
                    <button
                      type="button"
                      className="text-white bg-amber-400 hover:bg-amber-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center m-2"
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
                          d="m10.8 17.8-6.4 2.1 2.1-6.4m4.3 4.3L19 9a3 3 0 0 0-4-4l-8.4 8.6m4.3 4.3-4.3-4.3m2.1 2.1L15 9.1m-2.1-2 4.2 4.2"
                        />
                      </svg>
                      Visualiser
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransporterPage;
