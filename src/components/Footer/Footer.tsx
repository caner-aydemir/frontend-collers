import React from 'react'
import appstore from "../icons/appstore.svg"
import googleplay from "../icons/googleplay.svg"
import facebook from "../icons/facebook.svg"
import youtube from "../icons/youtube.svg"
import twitter from "../icons/twitter.svg"
import instagram from "../icons/instagram.svg"
import linkedın from "../icons/linkedın.svg"
import network from "../icons/network.svg"
const Footer = () => {
    return (
        <div className='bg-[#0F172A] w-full h-auto  flex flex-col gap-y-10  font-roboto text-[#E2E8F0] p-20 xs:px-5 xs:py-20'>
            <div className='flex xs:flex-col justify-between xs:justify-center  xs:items-center xs:text-center w-full h-full xs:gap-y-20'>
                <div className=' flex flex-col gap-y-5 text-base font-medium w-1/2  '>
                    <a href="" className='font-semibold text-white'>Products</a>
                    <a href="">Pricing</a>
                    <a href="">Overview</a>
                    <a href="">Browse</a>
                    <a href="">Accessibility</a>
                    <a >Five</a>
                </div>
                <div className=' flex flex-col gap-y-5 text-base font-medium w-1/2'>
                    <a href="" className='font-semibold text-white'>Solution</a>
                    <a href="">Brainstorming</a>
                    <a href="">Ideation</a>
                    <a href="">Wireframing</a>
                    <a href="">Research</a>
                    <a href="">Design</a>
                </div>
                <div className=' flex flex-col gap-y-5 text-base font-medium w-1/2'>
                    <a href="" className='font-semibold text-white'>Support</a>
                    <a href="">Contact Us</a>
                    <a href="">Developers</a>
                    <a href="">Documentation</a>
                    <a href="">Integrations</a>
                    <a href="">Reports</a>
                </div>
                <div className=' flex flex-col gap-y-5 text-base font-medium  xs:justify-center xs:items-center  w-1/2 '>
                    <p className='font-semibold text-white my-5'>Get the App</p>
                    <button>  <img className='w-32 h-10' src={appstore} alt="" /></button>
                    <button><img className='w-36 h-10' src={googleplay} alt="" /></button>
                    <p>Fallow Us</p>
                    <div className=' flex gap-x-3'>
                        <button><img src={youtube} alt="" /></button>
                        <button> <img src={facebook} alt="" /></button>
                        <button> <img src={twitter} alt="" /></button>
                        <button><img src={instagram} alt="" /></button>
                        <button><img src={linkedın} alt="" /></button>

                    </div>
                </div>
            </div>
            <div className='border-t-2 w-full py-5 xs:flex-col xs:gap-y-10 xs:justify-center border-gray-700 flex justify-between items-center text-base font-normal text-[#E2E8F0]'>
                <p className=''>
                    Collers @ 2023. All rights reserved.
                </p>
                <div className='flex gap-x-7 '>
                    <a href="">Terms</a>
                    <a href="">Privacy</a>
                    <a href="">Contact</a>
                    <a href="" className='flex gap-x-1'><img src={network} alt="" /> EN</a>
                </div>
            </div>
        </div>
    )
}

export default Footer