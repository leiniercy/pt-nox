import CustomButton from '@components/button'
import { IconCheck } from '@components/icons/custom-icons'
import CustomTitle from '@components/title'
import { textSeccion6 } from '@config/text-seccion6'
import LayoutSeccion from '@layouts/layout-seccion'
import Image from 'next/image'
import React from 'react'

const Seccion6Options = () => {
    const texts = textSeccion6
    return texts.options.map((info, index) => {
      return (
        <div
          key={index}
          className='relative flex flex-row items-center justify-start w-full gap-2'
        >
          <IconCheck />
          <label className='text-white font-roboto font-normal leading-[22.4px]'>
            {info}
          </label>
        </div>
      )
    })
  }

const Seccion6 = ({ className }) => {
  const texts = textSeccion6
  return (
    <LayoutSeccion className={className}>
      <div className='relative w-full flex flex-col gap-8 items-start justify-start md:flex-row md:items-center'>
        <div className='relative w-full flex flex-col gap-8 items-start justify-start md:flex-1'>
          <CustomTitle
            classNameTitle='text-left text-[22px] sm:text-[24px] md:text-[32px] lg:text-[48px]'
            classNameSubTitle='text-left text-[22px] sm:text-[24px] md:text-[32px] lg:text-[48px]'
            classNameParagraph='text-left'
            title={texts.title}
            subTitle={texts.subTitle}
            paragraph={texts.paragraph}
          />
          <div className='relative flex flex-col items-center justify-start w-full gap-2'>
            <Seccion6Options />
          </div>
          <CustomButton className='px-8' add name={texts.buttonName} textSize={20} />
        </div>
        <div className='relative inline-block w-full md:flex-1'>
          <Image
            className='aspect-square min-w-full max-h-[555px]'
            src='/assets/images/seccion6/picture.svg'
            height={'100'}
            width={'100'}
            alt='picture'
          />
        </div>
      </div>
    </LayoutSeccion>
  )
}

export default Seccion6
