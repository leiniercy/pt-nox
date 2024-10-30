import CustomButton from '@components/button'
import { IconCheck } from '@components/icons/custom-icons'
import CustomTitle from '@components/title'
import { textSeccion5 } from '@config/text-seccion5'
import LayoutSeccion from '@layouts/layout-seccion'
import Image from 'next/image'
import React from 'react'

const Seccion5Options = () => {
  const texts = textSeccion5
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

const Seccion5 = ({ className }) => {
  const texts = textSeccion5
  return (
    <LayoutSeccion className={className}>
      <div className='relative w-full flex flex-col gap-8 items-start justify-start md:flex-row md:items-center'>
        <div className='relative w-full flex flex-col gap-8 items-start justify-start md:flex-1 md:order-2'>
          <CustomTitle
            classNameTitle='text-left text-[22px] sm:text-[24px] md:text-[32px] lg:text-[48px]'
            classNameSubTitle='text-left text-[22px] sm:text-[24px] md:text-[32px] lg:text-[48px]'
            classNameParagraph='text-left'
            title={texts.title}
            subTitle={texts.subTitle}
            paragraph={texts.paragraph}
          />
          <div className='relative flex flex-col items-center justify-start w-full gap-2'>
            <Seccion5Options />
          </div>
          <CustomButton className='px-8' add name={texts.buttonName} textSize={20}/>
        </div>
        <div className='relative felx flex-col items-start justify-start w-full gap-2 md:flex-1 md:order-1 max-h-[600px]'>
          <div className='relative flex-1 w-full grid grid-cols-2 gap-2 sm:gap-3 sm2:gap-4 items-start'>
            <div className='realtive col-span-2 h-auto lg:h-[288px] w-full flex items-center justify-start'>
              <Image
                className='col-span-1 h-full w-full object-fill'
                src='/assets/images/seccion5/picture.svg'
                alt='picture-2'
                height={100}
                width={100}
                quality={100}
              />
            </div>
          </div>
          <div className='relative flex-1 w-full grid grid-cols-2 gap-2 sm:gap-3 sm2:gap-4 items-start'>
            <div className='realtive h-auto md:h-[288px] w-full flex items-center justify-start'>
              <Image
                className='col-span-1 h-full w-full object-fill'
                src='/assets/images/seccion5/picture-1.svg'
                alt='picture-2'
                height={100}
                width={100}
                quality={100}
              />
            </div>
            <div className='realtive h-auto md:h-[288px] w-full flex items-center justify-start'>
              <Image
                className='col-span-1 h-full w-full object-fill'
                src='/assets/images/seccion5/picture-2.svg'
                alt='picture-3'
                height={100}
                width={100}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </LayoutSeccion>
  )
}

export default Seccion5
