/* eslint-disable react/prop-types */
import { FaComments, FaRegEye } from "react-icons/fa"

export default function Blog() {
    const Card =({image, text}) =>{
        return (
            <div className="hover:shadow">
                <div className="overflow-hidden my-0 mx-auto rounded-t-2xl">
                    <img 
                    src={image} 
                    alt='' 
                    className="rounded-t-2xl w-[300px] h-[300px] box-border hoverImg"
                    />
                </div>
                <div className="bg-white p-3 rounded-b-2xl">
                    <p className="text-gray text-lg">Travel</p>
                    <h5 className="text-xl py-2 font-semibold">{text}</h5>
                    <div className="flex items-center justify-between pb-3">
                        <span>
                            <FaComments size={20} />
                            <p className="text-gray text-xl">45</p>
                        </span>
                        <span className="flex items-center gap-2">
                            <FaRegEye size={20} />
                            <p className="text-xl">23k+ Views </p>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
  return (
    <div>
      <section className="bg-lightGray my-16 py-16 relative">
        <div className="max-w-[1400px] mx-auto px-3">
            <span className="flex flex-col items-center">
                <p className="text-primary font-bold capitalize tracking-[0.15em]">Blog Post</p>
                <h2 className="text-3xl font-bold">Our Latest Blog</h2>
            </span>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-12 relative z-10">
                <Card 
                image='image-1.jpg'
                text='Beauty Place in Maldives'
                />
                  <Card 
                image='image-2.jpg'
                text='Beauty Place in Japan'
                />
                  <Card 
                image='image-3.jpg'
                text='Beauty Place in India'
                />
                  <Card 
                image='image-4.jpg'
                text='Beauty Place in Canada'
                />

            </div>
        </div>
      </section>
      <section className="flex justify-between max-w-[1400px] mx-auto lg:py-16 my-16 px-3 gap-4 overflow-hidden">
        <img src='travel-1.png' alt='' className="w-[100px]"/>
        <img src='travel-2.png' alt='' className="w-[100px]"/>
        <img src='travel-3.png' alt='' className="w-[100px]"/>
        <img src='travel-4.png' alt='' className="w-[100px]"/>
        <img src='travel-5.png' alt='' className="w-[100px]"/>
      </section>
      <section className="bg-[url('/background.png')] bg-no-repeat bg-cover bg-center relative z-10 lg:py-32 py-16">
         <div className="flex flex-col justify-center items-center lg:w-1/2 mx-auto px-3">
            <h2 className="font-bold text-2xl text-center mb-8">
                Sign Up For Our Newsletter
            </h2>
            <div className="flex lg:flex-row flex-col items-center w-full gap-x-[.1rem] gap-y-4 lg:bg-black rounded-md">
                <input
                type='email'
                placeholder="Enter your email here"
                className="bg-[#2f3342] text-white rounded-1-md w-full h-16 px-4"
                />
                <button className='bg-primary rounded-r-md hover:shadow h-16 px-8  outline-none text-white hover:bg-white
                 hover:text-primary cursor-pointer text-base transition-bg hover:border hover:border-primary'>
                Subscribe Now
                 </button>
            </div>
         </div>
      </section>
    </div>
  )
}
