import React from 'react'
import watchIcon from "../icons/watch.svg"
import shoes from "../icons/section1_shoes.svg"
import test from "../icons/test.svg"
import svg1 from "../icons/section1svg1.svg"
import svg2 from "../icons/section1svg2.svg"
import svg3 from "../icons/section1svg3.svg"


const secionItem = [
    { icon: svg1, title: "Nibh viverra", description: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. " },
    { icon: svg2, title: "Cursus amet", description: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. " },
    { icon: svg3, title: "Ipsum fermentum", description: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. " },

]

const Section1 = () => {
    return (
        /*<div className='border-4 h-[calc(100vh-96px)] bg-[#FEF3C7] rotate-30	'>

        </div>*/
        <div className="triangle-container flex flex-col text-black text-2xl xs:w-full xs:h-auto font-roboto ">
            <div className='z-10  flex xs:flex-col xs:h-full xs:justify-center xs:items-center  xs:p-5  w-full h-fit items-stretch justify-arround p-20'>
                <div className='   w-2/3 flex flex-col  xs:py-5 xs:justify-center xs:items-center xs:text-center gap-y-12 xs:w-full '>
                    <p className='text-[#0F172A] text-7xl xs:text-5xl xs:w-screen w-full    font-[800]'>Collectible Sneakers</p>
                    <p className='font-roboto text-lg font-[400]'>Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
                    <div className='flex gap-x-5 text-lg text-[#78350F]'>
                        <button className='border-2 border-[#78350F] rounded-xl p-2 font-semibold'>Sign up now</button>
                        <button className='text-base flex gap-x-2 items-center'> <img src={watchIcon} alt="watchIcon" />Watch Demo</button>
                    </div>
                </div>
                <div className="relative xs:w-full w-1/2  xs:py-10 flex justify-center">
                    <div className="bg-[#FBBF24] w-[300px] h-[300px] xs:w-[250px] xs:h-[250px]  rounded-3xl ">
                        <img src={shoes} alt="shoes" className="absolute w-[400px] h-[340px] xs:w-[300px] xs:h-[400px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
                    </div>
                </div>
            </div>
            <div className='z-10 flex w-full h-full xs:flex-col xs:justify-center xs:py-10  items-center justify-arround px-20 xs:px-5 xs:gap-y-5 text-sm'>
                {secionItem.map((item, index) => (
                    <div key={index} className=' flex flex-col w-full items-start justify-start xs:items-center xs:justify-center xs:text-center h-full gap-y-5'>
                        <img src={item.icon} alt="" />
                        <p className='text-[#0F172A] text-xl xs:text-lg'>{item.title}</p>
                        <p className='text-[#0F172A] text-lg xs:text-base'>{item.description}</p>

                    </div>
                ))}

            </div>
        </div>

    )
}

export default Section1