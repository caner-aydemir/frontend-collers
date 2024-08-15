import React from 'react'
import waves from "../icons/waves.svg"
import rocket from "../icons/rocket.svg"
import Carousel from "react-multi-carousel";

import go from "../icons/go.svg"

import desktop from "../icons/desktop.svg"

import filter from "../icons/filter.svg"

import finger from "../icons/finger.svg"

import security from "../icons/security.svg"
import searchIcon from "../icons/searchIcon.svg"
import groupPhoto from "../icons/groupPhoto.svg"

const responsive = {
    xs: {
        breakpoint: { max: 897, min: 0 },
        items: 2,
        slidesToSlide: 1
    }
};

const section5Items = [
    { icon: searchIcon, title: "Bibendum tellus", icon2: go },
    { icon: security, title: "Cras eget" },
    { icon: rocket, title: "Dolor pharetra" },
    { icon: desktop, title: "Amet, fringilla" },
    { icon: finger, title: "Amet nibh" },
    { icon: filter, title: "Sed velit" }
]
const Section5 = () => {
    const mediaQuery = window.matchMedia("(max-width: 897px)");

    return (
        <div className='relative flex flex-col   w-full bg-[#FFFBEB] font-roboto '>
            <img className="absolute  w-full  mt-72 xs:bottom-0  bg-transparent z-10" src={waves} alt="" />

            <div className=' bg-[#FFFBEB]'>
                <div className='  flex flex-col px-20 py-40 xs:py-20 text-[#0F172A] gap-y-10 xs:px-5 xs:justify-center xs:w-full xs:text-center '>
                    <p className='  text-6xl xs:text-3xl xs:font-bold font-extrabold'>Grow your collection</p>
                    <p className='text-lg xs:text-base font-normal'>Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                        Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.</p>
                </div>
                <div className=' w-full flex xs:flex-col  px-20 xs:px-5 '>
                    {mediaQuery.matches ?
                        <Carousel
                            responsive={responsive}
                            autoPlay={true}
                            swipeable={true}
                            draggable={true}
                            autoPlaySpeed={2000}
                            infinite={true}
                            partialVisible={false}
                            renderButtonGroupOutside={true}
                            renderArrowsWhenDisabled={false}
                            arrows={false}
                            className=' w-full flex items-center py-10 '
                        >
                            {section5Items.map((item, index) => (
                                <button key={index} className={` ${index === 0 && " bg-white   rounded-2xl "} xs:w-full xs:items-center xs:justify-center hover:cursor-pointer w-1/2 font-medium flex gap-x-3 items-center text-base text-[#0F172A]`}>
                                    <img src={item.icon} alt="" />
                                    {item.title}
                                    <img src="" alt="" />
                                </button>
                            ))}
                        </Carousel>
                        :
                        <div className='flex w-1/3 xs:w-full flex-col xs:flex-row xs:relative  gap-y-4'>
                            {section5Items.map((item, index) => (
                                <button key={index} className={` ${index === 0 && " bg-white p-3 rounded-lg shadow-2xl"} hover:cursor-pointer w-1/2 font-medium flex gap-x-3 items-center text-xl text-[#0F172A]`}>
                                    <img src={item.icon} alt="" />
                                    {item.title}
                                    {item.icon2 && <img src={item.icon2} />}
                                    <img src="" alt="" />
                                </button>
                            ))}
                        </div>
                    }


                    <div className=' w-2/3 xs:w-full xs:mx-auto border-red-700 z-20'>
                        <img className='w-5/6 h-auto xs:w-full xs:h-full' src={groupPhoto} alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Section5