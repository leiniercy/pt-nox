import CustomButton from '@components/button'
import CustomTitle from '@components/title'
import { textSeccion1 } from '@config/text-seccion-1'
import classNames from 'classnames'
import React from 'react'
import { Seccion1Figure } from './seccion1-figure'

const Seccion1 = ({ className }) => {
  const texts = textSeccion1
  return (
    <div
      className={classNames(
        'relative flex flex-col items-center justify-start border-b-[1px] py-[48px] gap-[2rem]',
        className
      )}
    >
      <CustomTitle className='' title={texts.title} subTitle={texts.subTitle} />
      <p className='font-roboto font-normal text-[1rem] leading-[22.4px] text-center text-blue-gray-300'>
        {textSeccion1.paragraph}
      </p>
      <div className='relative flex flex-row w-full items-start justify-start gap-[1rem]'>
        <CustomButton className='flex-1' add name={texts.botonStart} />
        <CustomButton className='flex-1' cancel name={texts.botonRequest} />
      </div>
      <Seccion1Figure />
    </div>
  )
}

export default Seccion1
