import { HiStar } from "react-icons/hi";


export default function Discover() {
  return (
    <div>
      <section className="bg-lightGray relative">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center py-8 px-3 relative">
            <div className="lg:-ml-52 lg:block hidden">
                <img src='girlll.png' alt=''
                 className="2xl:w-[700px] w-[600px] 2xl:ml-[100px] ml-[220px]"
                 />
            </div>
            <div className="flex flex-col items-center lg:w-1/2 relative z-10">
                <img src='dis-bg.png' alt='' />
               
                <p className="text-gray text-lg lg:w-4/5 pb-10">
                    Conveniently customize proactive web services for leveraged 
                    without continually services aggregate frictional ou wllies richard and very aggregate frictional ou wellies customize
                    continually
                </p>
                <div className="flex flex-1 gap-5 w-full lg:ml-[220px] ml-[150px]">
                <button className='bg-primary rounded shadow h-16 lg:px-10 px-4 lg:w-auto w-full whitespace-pre outline-none text-white hover:bg-white
                 hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary'>
                 Get Exploration
                 </button>
                 <button className='bg-white rounded shadow h-16 lg:px-10 px-6 outline-none text-primary hover:bg-primary
                 hover:text-white cursor-pointer text-base transition-bg hover:border hover:border-primary'>
                Read More
                 </button>
                </div>
            </div>
            {/* <img 
            src='bg-star.png' 
            alt='' 
            className="lg:block hidden absolute bottom-0 right-16"
            />
            <img 
            src='bg-star.png'  
            alt='' 
            className="lg:block hidden absolute top-0 left-0"
            /> */}
            {/* <img 
            src='surf-board.png' 
            alt='' 
            className="lg:block hidden absolute bottom-0 right-0"
            /> */}
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="lg:flex justify-between max-w-[1400px] mx-auto px-3">
            <div className="lg:w-1/2">
                <span className="flex flex-col">
                    <p className="text-primary font-bold capitalize tracking-[0.15em]">
                        Testimonial
                    </p>
                    <h2 className="text-2xl font-bold capitalize my-4 lg:w-4/5">
                        What Our Customers Say About Us
                    </h2>
                </span>
                <p className="text-gray text-lg lg:w-4/5">Conveniently customize proactive web services for leveraged 
                    without continually services aggregate frictional ou wllies richard and very aggregate frictional ou wellies customize
                    continually
                </p>
                <span className="flex gap-1 items-baseline py-4">
                    <p className="font-bold">Sahjahan Sagor.</p>
                    <p className="text-sm">Photographer</p>
                </span>
                <div className="flex items-center">
                    {[...Array(5)].map((_, item) => (
                        <HiStar size={24} key={item} className="text-orange"/>
                    ))}
                </div>
            </div>
            <div>
                <img 
                src='map-bg.png' 
                alt='' 
                className="w-[600px]"
                />
            </div>
        </div>
      </section>
    </div>
  )
}
