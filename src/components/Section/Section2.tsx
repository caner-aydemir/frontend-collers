import React from 'react'
import background from "../icons/section2backlights.svg"
import cardImage1 from "../icons/cardImage1.svg"
import cardImage2 from "../icons/cardImage2.svg"
import cardImage3 from "../icons/cardImage3.svg"
import basket from "../icons/basket.svg"


const cardItem = [
    { icon: cardImage1, title: "Title", description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." },
    { icon: cardImage2, title: "Title", description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." },
    { icon: cardImage3, title: "Title", description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." },
]
const Section2 = () => {
    return (
        <div className='flex flex-col w-full h-auto bg-[#0F172A] p-20  xs:px-5 xs:py-10 xs:gap-y-10 gap-y-12 font-roboto text-white'>
            <div className='w-full  flex xs:flex-col xs:justify-center justify-between xs:text-center xs:gap-y-5'>
                <p className='text-5xl font-[600] xs:text-3xl'>The best of the best</p>
                <div>
                    <button className='w-full xs:w-1/2 h-full border-2 py-2 px-6 font-bold rounded-md'>
                        Sign up Now
                    </button>
                </div>
            </div>
            <div className=' relative w-full h-[472px] xs:h-[1900px]  xs:flex xs:overflow-hidden   '>
                <img src={background} className='absolute w-full h-full mx-auto object-cover' alt="" />
                <div className='absolute w-full h-[472px] xs:h-full  px-32 xs:px-0 gap-x-20 xs:gap-y-5 rounded-xl    mx-auto  flex xs:flex-col  justify-around font-roboto'>
                    {cardItem.map((item, index) => (
                        <div key={index} className=' w-full h-full flex flex-col hover:scale-105 xs:hover:scale-100 xs:shadow-none xs:bg-gray-800 xs:p-1   hover:shadow-none duration-500  hover:cursor-pointer  rounded-xl shadow-xl shadow-gray-700'>
                            <div className='w-full  h-1/2  xs:h-2/3 '>
                                <img src={item.icon} alt="" className='rounded-t-2xl xs:h-full object-cover' />
                            </div>
                            <div className='w-full  gap-y-5 flex flex-col h-2/3 p-10 xs:p-5 bg-[#0F172A] rounded-b-2xl'>
                                <p className='text-2xl'>{item.title}</p>
                                <p className='text-lg'>{item.description}</p>
                                <button className='flex justify-center text-xl items-center gap-x-3 border-2 py-3 rounded-lg'><img src={basket} alt="" />Buy Now</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default Section2