/* eslint-disable react/no-unescaped-entities */


export default function Hero() {
  return (
    <div className="bg-[#e8e3f0] bg-no-repeat bg-cover bg-center relative z-10 pb-32 overflow-x-hidden">
      <div className="lg:flex max-w-[1400px] mx-auto justify-between items-center px-3 pt-20 lg:pt-0">
        <div className="lg:w-2/5">
                <h2 className="xl:text-[4rem] lg:text-5xl text-4xl lg:text-left text-center font-bold lg:leading-snug mb-5"> It's A Big World Out There, Go Explore </h2>
                <p className="text-gray text-lg leading-normal mb-8 lg:text-left text-center">
                Embark on an unforgettable journey with our travel platform, 
                where every destination is a gateway to new adventures.
                </p>
                <div className="flex flex-1 gap-5">
                    <button className="bg-primary rounded transition-bg shadow h-16 lg:px-10 lg:w-auto w-full outline-none text-white hover:bg-white
                 hover:text-primary cursor-pointer text-base hover:border hover:border-primary">
                  Get Exlporation
                    </button>
                    <button className="bg-white rounded transition-bg shadow h-16 lg:px-10 lg:w-auto w-full outline-none text-primary hover:bg-primary
                      hover:text-white cursor-pointer text-base hover:border hover:border-primary">Ream More</button>
                </div>
            </div>
            <div className="lg:w-3/5 flex items-center justify-end lg:pt-0 pt-10 lg:-mr-28">
                <img src="/frnd-bg.png" alt="" className="md:w-[40rem] w-[600px] h-full" />
            </div>
        </div>
    </div>
  )
}
