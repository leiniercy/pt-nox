import CustomTitle from '@components/title'
import { textSeccion9 } from '@config/text-seccion9'
import LayoutSeccion from '@layouts/layout-seccion'
import React from 'react'
import Seccion9Swiper from './seccion9-swiper'

const Seccion9 = ({ className }) => {
  const texts = textSeccion9
  return (
    <LayoutSeccion className={className}>
      <CustomTitle
        className='px-4 md:text-[32px] md:leading-[100%] lg:text-[48px] lg:leading-[52.8px]'
        title={texts.title}
        subTitle={texts.subTitle}
        paragraph={texts.paragraph}
      />
      <Seccion9Swiper />
    </LayoutSeccion>
  )
}

export default Seccion9
