import React from 'react';
import MenuItem from '@components/menu/menu-item';
import CustomButton from '@components/button';
import { textNavbar } from '@config/text-navbar';

const MobileSidebar = ({ isOpen }) => {
  const texts = textNavbar;

  return (
    <>
      {/* Sidebar */}
      <div 
        className={`absolute z-30 top-[80px] right-0 h-[calc(100vh-180px)] w-[300px] bg-[#0f172a]
          transform transition-transform duration-300 ease-in-out lg:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Navigation Links */}
          <nav className="space-y-6 mb-8">
            <MenuItem className="w-full justify-start text-lg">{texts.firstLink}</MenuItem>
            <MenuItem className="w-full justify-start text-lg">{texts.secondLink}</MenuItem>
            <MenuItem className="w-full justify-start text-lg">{texts.thirdLink}</MenuItem>
            <MenuItem className="w-full justify-start text-lg">{texts.fourthLink}</MenuItem>
          </nav>

          {/* Buttons */}
          <div className="mt-auto space-y-4">
            <CustomButton
              className="w-full"
              regular
              name={texts.buttonLogIn}
              textSize={16}
            />
            <CustomButton
              className="w-full"
              cancel
              name={texts.buttonRequest}
              textSize={16}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;