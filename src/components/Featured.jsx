/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
import {FaCar, FaHotel, FaPlaneDeparture, FaShip} from 'react-icons/fa'


export default function Featured() {
    const [active, setActive] =useState('Hotel');

    const Card =({ packages , image, country, amount, row }) => {
        const [divColor, setDivColor] = useState({
            bgColor: '',
            textColor: '',
        });

        return (
            <div className="relative overflow-hidden my-0 mx-auto rounded-2xl "
            style={{ gridRow: `span${row} / sapn${row}`}}  
            onMouseEnter={() => 
            setDivColor(  { bgColor:'#6347F9',textColor:'white'})
            }
            onMouseLeave={() => 
            setDivColor({bgColor: 'white', textColor:'#6347F9'})
            }>
              <div className="bg-white text-primary h-12 px-4 rounded-md absolute top-4 right-4 z-10 
              font-bold flex flex-col items-center justify-center text-lg"
              style={{
                backgroundColor: `${divColor.bgColor}`,
                color: `${divColor.textColor}`,
                }} >
                {packages} Packages
                </div>
                <img src={image} 
                alt='' 
                className="h-full w-full rounded-2xl hoverImg"
                />
                <div className="absolute bottom-4 left-4">
                    <h2 className="text-white text-4xl font-bold">{country}</h2>
                    <p className="text-white">Starting from ${amount}</p>
                </div>
            </div>
            
          )
    }

  return (
   <div className="max-w-[1400px] mx-auto relative">
      <div className="w-full h-full">
        <p className="xl:text-[25rem] lg:text-[20rem] absolute top-0 left-0 w-full text-center z-[-1] text-gray font-semiboid opacity-10">Travel</p>
      </div>
      <div className="px-3 lg:mt-0 mt-12">
        <div className="bg-white shadow-xl py-10 relative -top-16 z-10">
            <div className="flex lg:gap-x-4 gap-x-2 absolute -top-14 ">
                <button onClick={() => setActive('Hotel')} 
                className={` rounded-sm flex gap-x-2 items-center justify-center focus:outline-none border-none h-14 lg:w-40 px-4 text-base cursor-pointer 
                 ${active==='Hotel' ? 'bg-primary text-white' : 'bg-white'}
                `}>
                <FaHotel size={20} className="lg:block hidden" />
                Hotel
                </button>

                <button onClick={() => setActive('Flight')}
                 className={` rounded-sm flex gap-x-2 items-center justify-center focus:outline-none border-none h-14 lg:w-40 px-4 text-base cursor-pointer 
                 ${active==='Flight' ? 'bg-primary text-white' : 'bg-white'}
                `}>
                <FaPlaneDeparture size={20} className="lg:block hidden"/>
                Flight
                </button>
                <button onClick={() => setActive('Car')}
                 className={` rounded-sm flex gap-x-2 items-center justify-center focus:outline-none border-none h-14 lg:w-40 px-4 text-base cursor-pointer 
                 ${active==='Car' ? 'bg-primary text-white' : 'bg-white'}
                `}>
                <FaCar size={20} className="lg:block hidden"/>
                Car
                </button>
                <button onClick={() => setActive('Ship')}
                 className={` rounded-sm flex gap-x-2 items-center justify-center focus:outline-none border-none h-14 lg:w-40 px-4 text-base cursor-pointer 
                 ${active==='Ship' ? 'bg-primary text-white' : 'bg-white'}
                `}>
                <FaShip size={20} className="lg:block hidden" />
                Ship
                </button>
                </div>
                <div className="flex flex-wrap items-end justify-between px-8 gap-4">
                  <span className="flex flex-col gap-4">
                    <p className="font-semibold text-lg">Your Destination</p>
                    <input type='text' placeholder="Thailand" 
                    className="bg-light text-gray shadow border-none outline-none h-14 w-40 px-4 text-left text-base"
                    />
                  </span>
                  <span className="flex flex-col gap-4">
                    <p className="font-semibold text-lg">Check In</p>
                    <input type='text' placeholder="03/10/2024"
                     className="bg-light text-gray shadow border-none outline-none h-14 w-40 px-4 text-left text-base" />
                  </span>
                  <span className="flex flex-col gap-4">
                    <p className="font-semibold text-lg">Check Out</p>
                    <input type='text' placeholder="05/12/2024"
                     className="bg-light text-gray shadow border-none outline-none h-14 w-40 px-4 text-left text-base" />
                  </span>
                  <span className="flex flex-col gap-4">
                    <p className="font-semibold text-lg">Child</p>
                    <input type='text' placeholder="2"
                     className="bg-light text-gray shadow border-none outline-none h-14 w-40 px-4 text-left text-base" />
                  </span>
                  <span className="flex flex-col gap-4">
                    <p className="font-semibold text-lg">Adult</p>
                    <input type='text' placeholder="2"
                     className="bg-light text-gray shadow border-none outline-none h-14 w-40 px-4 text-left text-base" />
                  </span>
                   <span className="flex flex-col gap-4">
                    <button className="bg-primary rounded transition-bg shadow h-14 px-10 lg:w-auto w-full outline-none text-white hover:bg-white
                 hover:text-primary cursor-pointer text-base hover:border hover:border-primary">Book Now</button>
                   </span>
                </div>
            </div>
            <div>
                <span className="flex flex-col items-center">
                    <p className="text-primary font-bold capitalize tracking-[0.15em]">Featured Tours</p>
                    <h2 className="text-4xl text-center font-bold capitalize my-4">Beautiful PLaces Around The World</h2>
                </span>
                <div className="flex lg:flex-1 lg:flex-row flex-col gap-8 my-12 h-full">
                    <Card 
                    amount='2200' 
                    country='Greece' 
                    image='/pic-1.jpg' 
                    packages='3' 
                    row='2' 
                    />
                    <div className="flex flex-col gap-8 lg:max-w-[435px]">
                    <Card 
                    amount='1600'
                    country='Paris' 
                    image='/pic-8.jpg'
                    packages='2'
                    row='2'
                    />
                    <Card 
                    amount='1400' 
                    country='London' 
                    image='/pic-7.jpg' 
                    packages='3' 
                    row='2' 
                    />
                    </div>
                    <Card 
                    amount='1200' 
                    country='Maldives' 
                    image='/pic-4.jpg' 
                    packages='1' 
                    row='2'
                    />

                </div>
            </div>
        </div>
      </div>
   
  )
}
