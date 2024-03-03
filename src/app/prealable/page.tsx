"use client";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import cerfa from "@/assets/cerfa.png";
import { useRouter } from "next/navigation";

function Create() {
  const router = useRouter();

  return (
    <>
      <div className="relative min-h-[200px] antialiased bg-gray-100">
        <NavBar />

        <div className="mt-20 p-4 md:py-8 xl:px-0  w-[50%] md:mx-w-6xl md:mx-auto bg-white rounded-xl">
          <div className="text-gray-400 p-8">
            <h4 className="text-center mx-auto font-bold italic underline">
              (articles L. 162-4-1 2°, L. 321-1 2°, L. 322-5, L. 432-1, R.
              322-2)
            </h4>
            <h1 className="text-xl mt-10 font-bold mb-4">
              Prescription médicale de transport
            </h1>
            <div className="flex">
              <button className="mr-2 group relative w-[20%] flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-sky-400 hover:bg-sky-500">
                Numérique
              </button>
              <button className="ml-2 group relative w-[20%] flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-green-400 hover:bg-green-500">
                Version Cerfa
              </button>
            </div>
          </div>
          <Image alt="Logo" className="mx-auto mb-20" src={cerfa} />
          <div className="mx-auto p-10">
            <button
              className=" group relative w-[10%] flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-sky-400 hover:bg-sky-500"
              onClick={(e) => {
                e.preventDefault();
                router.push("/infos");
              }}
            >
              Signer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
