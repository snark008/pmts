"use client";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/navigation";

function Create() {
  const router = useRouter();

  return (
    <>
      <div className="relative min-h-[2000px] antialiased bg-gray-100">
        <NavBar />

        <div className="mt-20 p-4 md:py-8 xl:px-0 md:container md:mx-w-6xl md:mx-auto bg-white rounded-xl">
          <div className="text-gray-400 p-8">
            <h4 className="text-center mx-auto font-bold italic underline">
              (articles L. 162-4-1 2°, L. 321-1 2°, L. 322-5, L. 432-1, R.
              322-2)
            </h4>
            <h1 className="text-xl font-bold mb-4">
              Prescription médicale de transport
            </h1>
            <div className="flex mb-10">
              <button className="mr-2 group relative w-[10%] flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-sky-400 hover:bg-sky-500">
                Numérique
              </button>
              <button className="ml-2 group relative w-[10%] flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-green-400 hover:bg-green-500">
                Version Cerfa
              </button>
            </div>
            <form className="space-y-4">
              <section>
                <h2 className="font-semibold mb-2">
                  {"Personne bénéficiaire du transport et l'assuré(e)"}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    placeholder="Nom et prénom"
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md"
                    type="text"
                  />
                  <input
                    placeholder="Nom de famille (de naissance) suivi du nom d'usage (facultatif et s'il y a lieu)"
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md"
                    type="text"
                  />
                  <input
                    placeholder="Numéro d'immatriculation"
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md"
                    type="text"
                  />
                  <input
                    placeholder="Date de naissance"
                    type="text"
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md"
                  />
                  <input
                    placeholder="Adresse"
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md"
                    type="text"
                  />
                </div>
              </section>
              <section>
                <h2 className="font-semibold mb-2">
                  {
                    "Assuré(e) à remplir si la personne qui bénéficie du transport n'est pas l'assuré(e)"
                  }
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    placeholder="Nom et prénom"
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md"
                    type="text"
                  />
                  <input
                    placeholder="Nom de famille (de naissance) suivi du nom d'usage (facultatif et s'il y a lieu)"
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md"
                    type="text"
                  />
                  <input
                    placeholder="Numéro d'immatriculation"
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md"
                    type="text"
                  />
                </div>
              </section>
              <section>
                <h2 className="font-semibold mb-2">
                  Dans quelle situation médicale la prise en charge du transport
                  se trouve votre patient ?
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <label>
                    <input className="mr-2" type="checkbox" />
                    Entrée ou sortie d hospitalisation (complète, partielle ou
                    ambulatoire), y compris séances de chimiothérapie,
                    radiothérapie et hémodialyse{"\n                  "}
                  </label>
                  <label>
                    <input className="mr-2" type="checkbox" />
                    Transport lié à une affection de longue durée avec
                    déficience ou incapacité - ALD exonérante
                    {"\n                  "}
                  </label>
                  <label>
                    <input className="mr-2" type="checkbox" />
                    ALD non exonérante{"\n                  "}
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <label>
                    <input className="mr-2" type="checkbox" />
                    Transport lié à un accident de travail
                  </label>
                  <label>
                    <input className="mr-2" type="checkbox" />
                    Transport lié à une maladie professionnelle
                    {"\n                  "}
                  </label>
                  <label>
                    <input className="mr-2" type="checkbox" />
                    Transport en rapport avec un accident causé par un tiers
                    {"\n                  "}
                  </label>
                  <input
                    placeholder="Date"
                    type="text"
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md"
                  />
                </div>
              </section>
              <section>
                <h2 className="font-semibold mb-2">
                  Quel mode de transport prescrivez-vous au regard de l état de
                  santé et d autonomie de votre patient ?
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <label>
                    <input className="mr-2" type="checkbox" />
                    Transport en ambulance justifié par la nécessité (cochez les
                    cases) correspondante(s)
                    {"\n                  "}
                  </label>
                  <select
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md"
                    multiple
                  >
                    <option value="0">Position allongée ou demi assise</option>
                    <option value="1">
                      Surveillance par une personne qualifiée
                    </option>
                    <option value="2">{"Administration d'Oxigène"}</option>
                    <option value="3">{"Brancardage ou portage"}</option>
                    <option value="4">{"Aseptie rigoureuse"}</option>
                  </select>
                  <label>
                    <input className="mr-2" type="checkbox" />
                    Transport assis professionnalisé (VSL, taxi conventionné)
                    {"\n                  "}
                  </label>
                  <label>
                    <input className="mr-2" type="checkbox" />
                    Moyen de transport individuel{"\n                  "}
                  </label>
                  <label>
                    <input className="mr-2" type="checkbox" />
                    Moyen de transport partagée{"\n                  "}
                  </label>
                  <label>
                    <input className="mr-2" type="checkbox" />
                    Transport en commun terrestre{"\n                  "}
                  </label>
                  <label>
                    <input className="mr-2" type="checkbox" />
                    Personne accompagnante{"\n                  "}
                  </label>
                </div>
              </section>
              <section>
                <h2 className="font-semibold mb-2">
                  Quel trajet doit effectuer le patient ?
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    placeholder="Précisez le lieu de départ"
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md"
                    type="text"
                  />
                  <input
                    placeholder="Précisez le lieu de destination"
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md"
                    type="text"
                  />
                  <input
                    placeholder="Indications"
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md"
                    type="text"
                  />
                  <input
                    placeholder="Service ou professionnel adressé"
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md"
                    type="text"
                  />

                  <textarea
                    placeholder="Élements d'ordre médical"
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md"
                  />
                  <label>
                    <input className="mr-2" type="checkbox" />
                    Transport aller et retour{"\n                  "}
                  </label>
                  <input
                    type="number"
                    placeholder="Nombre de transports itératifs"
                    min={1}
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md"
                  />
                  <label>
                    <input className="mr-2" type="checkbox" />
                    Transport vers un centre de référence dedié à la prise en
                    charge des maladies rares{"\n "}
                  </label>
                </div>
              </section>
              <section className="border border-red-400 p-4 rounded-lg">
                <h2 className="font-semibold mb-2">Urgence</h2>
                <div className="grid grid-cols-2 gap-4">
                  <label>
                    <input className="mr-2" type="checkbox" />
                    Appel du SAMU{"\n                  "}
                  </label>
                  <label>
                    <input className="mr-2" type="checkbox" />
                    Autre{"\n                  "}
                  </label>
                  <input
                    placeholder="Précisez"
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md"
                    type="text"
                  />
                </div>
              </section>
              <section className="border border-green-400 p-4 rounded-lg">
                <h2 className="font-semibold mb-2">
                  Exonération du ticket modérateur
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <label>
                    <input className="mr-2" type="checkbox" />
                    Oui{"\n                  "}
                  </label>
                  <label>
                    <input className="mr-2" type="checkbox" />
                    Non{"\n                  "}
                  </label>
                  <label>
                    <input className="mr-2" type="checkbox" />
                    {
                      "Transport lié à des soins dispensés au titre d'une pension militaire d'invalidité"
                    }
                    {"\n                  "}
                  </label>
                </div>
              </section>
              <section>
                <h2 className="font-semibold mb-2">
                  Identification du prescripteur et de la structure dans
                  laquelle il exerce
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    placeholder="Nom et prénom"
                    value={"Dr. Dr.David Barbier"}
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md cursor-not-allowed bg-gray-100"
                    type="text"
                  />
                  <input
                    placeholder="Raison sociale"
                    value={"PulseCare Center"}
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md cursor-not-allowed bg-gray-100"
                    type="text"
                  />
                  <input
                    placeholder="Adresse"
                    value={"18 Avenue Montaigne 75008 Paris"}
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md cursor-not-allowed bg-gray-100"
                    type="text"
                  />
                  <input
                    placeholder="N° structure"
                    value={"234 876 909 3425 45"}
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md cursor-not-allowed bg-gray-100"
                    type="text"
                  />
                  <input
                    placeholder="Identifiant"
                    value={"119 980 010 01"}
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md cursor-not-allowed bg-gray-100"
                    type="text"
                  />
                  <input
                    placeholder="Date"
                    value={new Date().toLocaleDateString()}
                    className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300 ease-in-out hover:shadow-md cursor-not-allowed bg-gray-100"
                    type="text"
                    disabled
                  />
                </div>
              </section>
              <div className="flex">
                <button
                  className="mr-2 group relative w-[10%] mt-5 ml-[45%] flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-sky-400 hover:bg-sky-500"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/infos");
                  }}
                >
                  Signer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
