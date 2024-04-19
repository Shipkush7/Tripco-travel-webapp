/* eslint-disable react/prop-types */
import { HiStar } from "react-icons/hi"


export default function Packages() {
    const Card =({image, text}) => {
        return (
            <div>
                <div className="overflow-hidden my-0 mx-auto rounded-2xl">
                    <img 
                    src={image} 
                    alt='' 
                    className="rounded-2xl w-[300px] h-[300px] hoverImg"
                    />
                </div>
                <h5 className="text-2xl py-4 font-semibold">{text}</h5>
                <span className="flex items-center justify-between">
                    <div className="bg-white text-gray shadow rounded-sm w-16 p-2 flex items-center gap-1">
                        <HiStar className="text-orange"/> 4.6
                    </div>
                    <p>(2.5k Review)</p>
                    <div className="bg-primary text-white text-lg text-center w-20 p-1 rounded-md transition-bg hover:bg-white hover:text-primary">$1200
                    </div>
                </span>
            </div>
        )
    }
  return (
    <div>
    <div className="bg-lightGray my-16 py-16 relative">
      <div className="max-w-[1400px] mx-auto px-3">
        <span className="flex flex-col items-center">
            <p className="text-primary font-bold capitalize tracking-[0.15em]">Popular Packages</p>
            <h2 className="text-4xl text-center font-bold capitalize my-4">Chekout our packages</h2>
        </span>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-12 relative z-10">
            <Card 
            image='/pic-p1.jpg' 
            text='Enjoy the beauty place in Paris city' 
            />
            <Card 
            image='/pic-p2.jpg' 
            text='Enjoy the beauty place in London city' 
            />
            <Card 
            image='/pic-p3.jpg' 
            text='Enjoy the beauty place in Beijing city'
            />
            <Card 
            image='/pic-p4.jpg' 
            text='Enjoy the beauty place in Seoul city' 
            />
        </div>
      </div>
      <img 
      src='/bg-star.png' 
      alt=''
      className="lg:block hidden absolute -top-16 left-0"
      />
      <img 
       src='/bg-tube.png' 
      alt='' 
     className="lg:block hidden absolute -bottom-16 left-0 w-[200px]"
      />
       <img 
       src='/surf-board.png'  
      alt='' 
     className="lg:block hidden absolute bottom-0 right-0"
      />
    </div>
    <section className="max-w-[1400px] mx-auto relative px-3 py-12">
        <div className="xl:text-[25rem] lg:text-[20rem] leading-[.5] absolute left-0 w-full h-full text-center z-[-1] text-gray font-semibold opacity-10">Travel</div>
        <div>
            <span className="flex flex-col items-center">
                <p className="text-primary font-bold capitalize tracking-[0.15em]">Inventore Veritaits</p>
                <h2 className="text-4xl text-center font-bold capitalize">Select Offers For Travelling</h2>
            </span>
            <div className="flex lg:flex-row flex-col gap-y-10 items-center justify-between my-12 mx-[200px] ">
                <span className="flex flex-col items-center">
                    <img src='/icon--1.png' alt=''
                    className="text-primary  w-[70px]" />
                    <p className="mt-3">Different Countries</p>
                </span>
                <span className="flex flex-col items-center">
                    <img src='/icon--2.png' alt=''
                    className="text-primary w-[70px]" />
                    <p className="mt-3">Bus Tours</p>
                </span>
                <span className="flex flex-col items-center">
                    <img src='/icon--3.png' alt=''
                    className="text-primary w-[70px]" />
                    <p className="mt-3">Food Tours</p>
                </span>
                <span className="flex flex-col items-center">
                    <img src='/icon--4.png' alt=''
                    className="text-primary  w-[70px]" />
                    <p className="mt-3">Summer Rest</p>
                </span>
                <span className="flex flex-col items-center">
                    <img src='/icon--5.png' alt=''
                    className="text-primary  w-[70px]" />
                    <p className="mt-3">Ship Cruises</p>
                </span>
                <span className="flex flex-col items-center">
                    <img src='/icon--6.png' alt=''
                    className="text-primary  w-[70px]" />
                    <p className="mt-3">Mountain Tours</p>
                </span>

            </div>
        </div>
    </section>
    </div>
  )
}
