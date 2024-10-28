import React from 'react'
import {
  IconArtVenue,
  IconShells,
  IconSmartFinder,
  IconWaves,
  IconZoomerr
} from './seccion1-figure'
import { textSeccion1 } from '@config/text-seccion-1'

const Seccion1Logos = () => {
  const companies = [
    {
      name: 'SmarFinder',
      Icon: IconSmartFinder
    },
    {
      name: 'Zoomerr',
      Icon: IconZoomerr
    },
    {
      name: 'SHELLS',
      Icon: IconShells
    },
    {
        name: 'WAVES',
        Icon: IconWaves
      },
    {
      name: 'ArtVenue',
      Icon: IconArtVenue
    }
  ]
  const texts = textSeccion1
  return (
    <div className='relative w-full flex flex-col justify-center items center gap-8 py-16 px-4'>
      <label className='relative w-full font-roboto font-medium text-[14px] sm:text-[15px] sm2:text-[18px] text-center text-blue-gray-300'>
        {texts?.titleCompanies}
      </label>
      <div className='relative w-full flex flex-row flex-wrap justify-center items center gap-6'>
        {companies?.map(({ name, Icon }, index) => {
          return (
            <div
              key={index}
              className='relative w-auto flex flex-row flex-wrap justify-center items center gap-2'
            >
              <Icon />
              <label className='font-roboto text-gray-300 font-bold text-[24px] leading-[26.4px]'>
                {name}
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Seccion1Logos
