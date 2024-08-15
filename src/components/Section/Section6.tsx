import React from 'react'
import map from "../icons/map.svg"
import shoes6 from "../icons/shoes6.svg"

const Section6 = () => {
    return (
        <div className='w-full h-[717px]  xs:h-screen bg-[#78350F] flex justify-center  mt-20 xs:mt-0 font-roboto'>
            <div className='relative w-full h-full   flex items-center justify-center'>
                <div className='absolute flex flex-col z-10 items-center justify-center gap-y-5 text-white '>
                    <p className='  text-8xl xs:text-5xl font-extrabold'>11,658,467</p>
                    <p className='text-4xl xs:text- font-extrabold font-roboto abs'>Shoes Collected</p>
                </div>
                <div className='flex flex-col absolute z-10 top-16 left-80 xs:left-16'>
                    <img className='xs:w-[256px] xs:h-[200px]' src={shoes6} alt="" />
                </div>
                <img src={map} alt="" className='absolute flex mx-auto  ' />
            </div>
        </div>
    )
}

export default Section6