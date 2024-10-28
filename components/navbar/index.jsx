"use client";
import React from 'react';
import useNavbar from '@hooks/use-navbar/useNavbar';
import MenuItem from '@components/menu/menu-item';
import { textNavbar } from '@config/text-navbar';
import CustomButton from '@components/button';

const Navbar = ({ className }) => {
    const { isOpen, toggleMenu } = useNavbar();
    const texts = textNavbar;

    return (
        <>
            <header className={`w-full flex items-center justify-between p-4 lg:px-20 lg:py-6 ${className}`}>
                {/* Logo Section */}
                <section className='flex items-center justify-start md:w-[231px]'>
                    <h1 className='font-roboto font-bold text-[32px] leading-[32.5px] text-white'>
                        {texts.title}
                    </h1>
                </section>
                
                {/* Hamburguer Menu */}
                <section className='block lg:hidden'>
                    <button 
                        className='p-3 rounded-lg border-[1px] border-transparent bg-[#334155] w-[48px] h-[48px] flex flex-col items-center justify-center gap-[6px]' 
                        onClick={toggleMenu}
                    >
                        <div className={`w-6 h-[1px] bg-white rounded-full transition-transform duration-300 ease-in-out ${isOpen ? 'transform rotate-45 h-[2px]' : ''}`}></div>
                        <div className={`w-6 h-[1px] bg-white rounded-full transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                        <div className={`w-6 h-[1px] bg-white rounded-full transition-transform duration-300 ease-in-out ${isOpen ? 'transform -rotate-45 -mt-[15px] h-[2px]' : ''}`}></div>
                    </button>
                </section>

                {/* Links Section */}
                <section className='hidden lg:flex items-center justify-center md:w-[414px] gap-4 lg:ml-14'>
                    <MenuItem>{texts.firstLink}</MenuItem>
                    <MenuItem>{texts.secondLink}</MenuItem>
                    <MenuItem>{texts.thirdLink}</MenuItem>
                    <MenuItem>{texts.fourthLink}</MenuItem>
                </section>

                {/* Button Section */}
                <section className='hidden lg:flex items-center justify-center gap-3'>
                    <CustomButton
                        className='flex-1 lg:flex-none lg:w-[95px]'
                        regular                        
                        name={texts.buttonLogIn}
                    />
                    <CustomButton
                        className='flex-1 lg:flex-none lg:w-[196px]'
                        cancel
                        name={texts.buttonRequest}
                    />
                </section>
            </header>            
        </>
    );
}

export default Navbar;
