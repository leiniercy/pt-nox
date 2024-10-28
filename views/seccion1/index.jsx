import CustomButton from '@components/button'
import CustomTitle from '@components/title'
import { textSeccion1 } from '@config/text-seccion-1'
import classNames from 'classnames'
import React from 'react'
import { Seccion1Figure } from './seccion1-figure'
import Seccion1Logos from './seccion1-logos'

const Seccion1 = ({ className }) => {
  const texts = textSeccion1
  return (
    <div
      className={classNames(
        'relative flex flex-col items-center justify-start py-[48px] gap-[2rem] w-full',
        className
      )}
    >
      <CustomTitle className='' title={texts.title} subTitle={texts.subTitle} />
      <p className='font-roboto font-normal text-[1rem] leading-[22.4px] text-center text-blue-gray-300'>
        {textSeccion1.paragraph}
      </p>
      <div className='relative flex flex-row w-full items-center justify-center gap-[1rem]'>
        <CustomButton className='flex-1 md:flex-none md:w-[256px]' add name={texts.botonStart} />
        <CustomButton className='flex-1 md:flex-none md:w-[256px]' cancel name={texts.botonRequest} />
      </div>
      <Seccion1Figure />
      <Seccion1Logos />
    </div>
  )
}

export default Seccion1
