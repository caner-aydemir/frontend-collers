import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, Link, NavbarMenu, NavbarMenuItem, Button, image } from "@nextui-org/react";
import mobileHeaderIcon from "../icons/mobileHeaderItem.svg"
import { idText } from 'typescript';
type Props = {
    headerItem: string[]
}

const MobileHeader: React.FC<Props> = ({ headerItem }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <Navbar isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className=" bg-[#FFFBEB] text-[#78350F] font-roboto">
            <NavbarContent>

                <NavbarBrand className={" "}>

                    <p className='  text-[32px] font-bold'> Collers</p>
                </NavbarBrand>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden "
                    icon={<img src={mobileHeaderIcon} alt="" />}
                />
            </NavbarContent>
            <NavbarMenu >
                <NavbarMenuItem className=" flex flex-col text-2xl text-start justify-center items-center gap-y-5 text-[#78350F]">
                    {headerItem.map((item, index) => (
                        <p key={index} onClick={() => setIsMenuOpen(!isMenuOpen)}>{item}</p>

                    ))}


                </NavbarMenuItem>

            </NavbarMenu>
        </Navbar >
    )
}

export default MobileHeader