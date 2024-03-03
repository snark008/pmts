import CpamNav from "@/components/CpamNav";
import Image from "next/image";
import qrcode from "@/assets/qrcode.png";

function BusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 6v6" />
      <path d="M15 6v6" />
      <path d="M2 12h19.6" />
      <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
      <circle cx="7" cy="18" r="2" />
      <path d="M9 18h5" />
      <circle cx="16" cy="18" r="2" />
    </svg>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function OptionIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3h6l6 18h6" />
      <path d="M14 3h7" />
    </svg>
  );
}

function CpamDetails() {
  return (
    <>
      <div className="relative min-h-[2000px] antialiased bg-gray-100">
        <CpamNav />

        <div className="mt-20 p-4 md:py-8 xl:px-0 md:container text-gray-600 md:mx-w-6xl md:mx-auto rounded-xl bg-white">
          {/* details */}
          <div className="border border-sky-400  rounded-xl p-6 max-w-6xl mx-auto my-8">
            <div className="flex gap-8">
              <div className="flex-1">
                <div className=" rounded-lg p-4 mb-4">
                  <Image
                    className="mx-auto mt-12 h-20 w-20 rounded-lg border p-2 md:mt-0"
                    src={qrcode}
                    alt="step"
                  />
                  <div className="mb-20">
                    <h1 className="font-laonoto mt-4 text-center text-xl font-bold">
                      Pierre Prevot
                    </h1>
                    <p className="mt-1 text-center font-medium text-sky-400">
                      <strong>Date de naissance:</strong> 17/12/1993
                    </p>
                  </div>
                  <div className=" rounded-lg p-4 mb-4">
                    <h2 className="text-lg font-bold mb-2">Transporteur</h2>
                    <div className="mb-4">
                      <p>
                        <strong>Nom:</strong> Nicolas Bouvier
                      </p>
                      <p>
                        <strong>Raison sociale:</strong> Ambu94
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <CalendarIcon className="h-6 w-6 mr-2" />
                        <p>
                          <strong>Date:</strong> 24/12/2023
                        </p>
                        <p className="ml-5">
                          <strong>Tarif:</strong> 56€
                        </p>
                        <p className="ml-5">
                          <strong>Distance:</strong> 23 Km
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-10 mt-10">
                    <button
                      type="button"
                      className="text-white bg-emerald-400 hover:bg-emerald-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center m-2"
                    >
                      Valider
                    </button>
                    <button
                      type="button"
                      className="text-white bg-red-400 hover:bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center m-2"
                    >
                      Refuser
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="rounded-lg p-4 mb-4">
                  <h2 className="text-lg font-bold mb-2">
                    Médecin prescripteur
                  </h2>
                  <div className="mb-4">
                    <p>
                      <strong>Nom:</strong> Dr. David Barbier
                    </p>
                    <p>
                      <strong>Numéro RPPS:</strong> 119 989 010 01
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <CalendarIcon className="h-6 w-6 mr-2" />
                      <p>
                        <strong>Date de prescription:</strong> 21/12/2023
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg p-4">
                  <div className="mb-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d5251.644929305032!2d2.3670783991614224!3d48.84252499631071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x47e67218ee2bf393%3A0x53891c0293147ed1!2sQuai%20de%20la%20Gare%2C%2075013%20Paris!3m2!1d48.837222!2d2.373067!4m5!1s0x47e67207e06395a5%3A0x40905012e7788531!2sAv.%20Ledru%20Rollin%2C%2075012%20Paris!3m2!1d48.8486635!2d2.3725972!5e0!3m2!1sfr!2sfr!4v1708117944517!5m2!1sfr!2sfr"
                      width="400"
                      height="300"
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      <strong>Prise en charge:</strong>
                    </h3>
                    <p>23 Quai de la Gare75013 Paris</p>
                    <p>
                      <strong>Heure:</strong> 13h:54
                    </p>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-semibold mb-2">
                      <strong>Destination</strong>
                    </h3>
                    <p>24 Av. Ledru Rollin75012 Paris</p>
                    <p>
                      <strong>Heure:</strong> 14:44
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End details */}
        </div>
      </div>
    </>
  );
}

export default CpamDetails;
