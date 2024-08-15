import React, { useState } from 'react'
import mobileHeaderIcon from "../icons/mobileHeaderItem.svg"
import MobileHeader from './MobileHeader';
import WebHeader from './WebHeader';

const headerItem = ["Products", "Solutions", "Pricing", "Resources", "Log In", "Sign up Now"]

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className='flex xs:hidden w-full '>
                <WebHeader headerItem={headerItem} />
            </div>
            <div className='flex lg:hidden md:hidden w-full '>
                <MobileHeader headerItem={headerItem} />
            </div>

        </>

    )
}

export default Header