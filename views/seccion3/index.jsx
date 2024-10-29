'use client'
import React from 'react'
import CustomTitle from '@components/title'
import LayoutSeccion from '@layouts/layout-seccion'
import { textSeccion3 } from '@config/text-seccion-3'
import Image from 'next/image'
import useScreenWatcher from '@hooks/use-screen-observer'

const Seccion3 = ({ className }) => {
  const texts = textSeccion3
  const isDesktop = useScreenWatcher(1023)

  return (
    <LayoutSeccion className={className}>
      <div className='flex flex-row flex-wrap md:flex-nowrap gap-8 items-start justify-start md:items-center md:justify-center w-full'>
        <CustomTitle
          className='md:flex-1 md:text-[32px] md:leading-[100%] lg:text-[48px] lg:leading-[52.8px]'
          title={texts.title}
          subTitle={textSeccion3.subTitle}
          paragraph={!isDesktop.Bigger ? texts.paragraph : texts.paragraphBigger}
        />
        <div className='relative  sm2:max-h-[112px] md:max-h-[600px] md:flex-1 flex flex-col gap-4 items-start justify-start'>
          <div className='relative flex-1 w-full md:w-auto grid grid-cols-2 gap-2 sm:gap-3 sm2:gap-4 items-start'>
            <div className='realtive h-full w-full flex items-center justify-end'>
              <Image
                className='col-span-1 h-full w-full object-fill'
                src='/assets/images/seccion3/picture-0.svg'
                alt='picture-0'
                height={50}
                width={50}
                quality={100}
              />
            </div>
            <div className='realtive h-full w-full flex items-center justify-end'>
              <Image
                className='col-span-1 h-full w-full object-fill'
                src='/assets/images/seccion3/picture-1.svg'
                alt='picture-1'
                height={50}
                width={50}
                quality={100}
              />
            </div>
          </div>
          <div className='relative flex-1 w-full grid grid-cols-2 gap-2 sm:gap-3 sm2:gap-4 items-start'>
            <div className='realtive h-full w-full flex items-center justify-start'>
              <Image
                className='col-span-1 h-full w-full object-fill'
                src='/assets/images/seccion3/picture-2.svg'
                alt='picture-2'
                height={100}
                width={100}
                quality={100}
              />
            </div>
            <div className='realtive h-full w-full flex items-center justify-start'>
              <Image
                className='col-span-1 h-full w-full object-fill'
                src='/assets/images/seccion3/picture-3.svg'
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

export default Seccion3
