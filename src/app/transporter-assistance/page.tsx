import MobileNav from "@/components/MobileNav";

function TransporterAssistance() {
  return (
    <div>
      <div className="relative min-h-[2000px] antialiased bg-gray-100">
        <MobileNav />
        <div className="mt-20 text-gray-600 p-4 md:py-8 xl:px-0 md:container md:mx-w-6xl md:mx-auto bg-white rounded-xl">
          <h2 className="pl-10 text-4xl text-gray-500 font-medium capitalize">
            Assistance
          </h2>
          <section className="mt-10 bg-white  py-24 px-4 lg:px-16">
            <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
                <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                  <a href="#" className="block">
                    <div className="h-28">
                      <div className="absolute -top-20 lg:top-[-40%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 bg-sky-400 rounded-xl justify-items-center align-middle">
                        <img
                          src="https://epicpadprinting.com/public/img/indus/Mobile.png"
                          className="w-36 h-36  mt-6 m-auto"
                          alt="Consumer Electronics"
                          title="Consumer Electronics"
                          loading="lazy"
                          width="200"
                          height="200"
                        />
                      </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                      <p className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                        Robot assistant virtuel
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TransporterAssistance;
