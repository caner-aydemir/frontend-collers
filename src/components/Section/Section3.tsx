import React from 'react'
import sectionImage from "../icons/section3.svg"
import video from "../icons/video.svg"
import checkIcon from "../icons/check.svg"
import Button from '../Button/Button'

const Section3 = () => {
    return (
        <div className="w-full h-auto   bg-[#FFFBEB]  justify-between items-center py-[160px] px-[80px] xs:px-5 xs:py-5 font-roboto" >
            <div className='w-full h-[496px]  xs:h-screen rounded-[30px] shadow-lg bg-white justify-between flex xs:flex-col '>
                <div className='flex flex-col gap-6 px-20 py-32 xs:px-5 xs:py-10 xs:justify-center xs:items-center '>
                    <p className='text-[#0F172A] text-6xl font-extrabold xs:text-3xl xs:font-bold'>Why join us</p>
                    <div className='flex flex-col text-[20px] xs:text-base'>
                        <p className='flex xs:justify-center xs:items-center gap-x-2'><img src={checkIcon} alt="" /> Est et in pharetra magna adipiscing ornare aliquam. </p>
                        <p className='flex xs:justify-center xs:items-center gap-x-2'><img src={checkIcon} alt="" /> Tellus arcu sed consequat ac velit ut eu blandit. </p>
                        <p className='flex xs:justify-center xs:items-center gap-x-2'><img src={checkIcon} alt="" /> Ullamcorper ornare in et egestas dolor orci. </p>
                    </div>
                    <div>
                        <Button />
                    </div>
                </div>
                <div className="relative  w-1/2  xs:w-full  xs:h-full  flex justify-center -top-24">
                    <div className="">
                        <img src={video} alt="shoes" className="absolute w-[713px] h-[625px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section3