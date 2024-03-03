import MobileNav from "@/components/MobileNav";
import Image from "next/image";
import code from "@/assets/qrcode.png";
import CustomerNav from "@/components/CustomerNav";

function CustomerPrescriptionDetails() {
  return (
    <div>
      <div className="relative min-h-[2000px] antialiased bg-gray-100">
        <CustomerNav />
        <div className="mt-20 p-4 md:py-8 xl:px-0 md:container text-gray-600 md:mx-w-6xl md:mx-auto rounded-xl bg-white">
          <div className=" p-8">
            <div className="border-2 border-sky-400 w-[50%] rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h1 className="text-lg font-bold">
                    Prescription médicale de transport
                  </h1>
                  <p className="text-sm">
                    (articles L. 162-4-2 et L. 321-1 et L. 322-5, L. 432-1, R.
                    322-2)
                  </p>
                </div>

                <div className="mt-5">
                  <Image
                    className="h-25 w-25 rounded-lg object-cover"
                    src={code}
                    alt="infamous"
                  />
                </div>
              </div>
              <div className="mb-4">
                <h2 className="font-bold underline">
                  {"Personne bénéficiaire du transport et l'assuré(e)"}
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-2">
                <p>
                  {" "}
                  <strong>Nom et prenom:</strong> Pierre Prevot
                </p>
              </div>
              <div className="mb-2">
                <p>
                  <strong>Date de naissance:</strong> 01/01/1980
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-2">
                <p>
                  <strong>N° de sécurité sociale:</strong> 18 01 01 198 000 000
                  34
                </p>
              </div>
              <p className="mb-2">
                <strong>Adresse:</strong> 123 Rue de la Paix, 75000 Paris
              </p>

              <div className="grid grid-cols-2 gap-4 mb-2">
                <div className="flex items-center">
                  <p className="mr-2">
                    <strong>Accident causé par un tiers: </strong> non
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h2 className="mt-10 font-bold underline">
                  Mode de transport et état du patient ?
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <p>
                    {" "}
                    <strong>Mode:</strong> Ambulance
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <p>
                    <strong>Etat:</strong> allongé
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <h2 className="mt-10 font-bold underline">Trajet</h2>
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <p>
                    {" "}
                    <strong>Départ:</strong> 23 Rue de la gare, 75000 Paris
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <p>
                    <strong>Arrivée:</strong> 23 impasse Ledru Rollin, 75000
                    Paris
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <h2 className="font-bold underline">Urgence :</h2>
                <div className="flex items-center">
                  <p className="text-sm mr-2">
                    <strong>Appel du SAMU-centre 15:</strong> Oui
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <h2 className="font-bold underline">
                  Identification du prescripteur
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <p>Dr. Dr.David Barbier</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <p>18 Avenue Montaigne 75008 Paris</p>
                </div>

                <div className="flex justify-between items-center mt-20">
                  <p>
                    <strong>Fait le:</strong>
                    {new Date().toDateString()}
                  </p>
                </div>
                <div className="mt-10 flex items-center">
                  <button className="mr-2 group relative w-[10%] flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-sky-400 hover:bg-sky-500">
                    Exporter
                  </button>
                  <button className="mr-2 group relative w-[10%] flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-amber-400 hover:bg-amber-500">
                    Imprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerPrescriptionDetails;
