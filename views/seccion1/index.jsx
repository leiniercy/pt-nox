import CustomButton from '@components/button'
import { textSeccion1 } from '@config/text-seccion-1'
import React from 'react'
import { Seccion1Figure } from './seccion1-figure'
import Seccion1Logos from './seccion1-logos'
import LayoutSeccion from '@layouts/layout-seccion'
import Seccion1Title from './seccion-1-title'

const Seccion1 = ({ className }) => {
  const texts = textSeccion1
  return (
    <LayoutSeccion className={className} >
      <Seccion1Title className='' title={texts.title} subTitle={texts.subTitle} />
      <p className='font-roboto font-normal text-[1rem] leading-[22.4px] text-center text-blue-gray-300'>
        {texts.paragraph}
      </p>
      <div className='relative flex flex-row w-full items-center justify-center gap-[1rem]'>
        <CustomButton
          className='flex-1 md:flex-none md:w-[256px]'
          add
          name={texts.botonStart}
          textSize={12}
        />
        <CustomButton
          className='flex-1 md:flex-none md:w-[256px]'
          cancel
          name={texts.botonRequest}
          textSize={12}
        />
      </div>
      <Seccion1Figure />
      <Seccion1Logos />
    </LayoutSeccion>
  )
}

export default Seccion1
