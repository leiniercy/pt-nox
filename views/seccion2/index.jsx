import CustomTitle from '@components/title'
import { textSeccion2 } from '@config/text-seccion-2'
import LayoutSeccion from '@layouts/layout-seccion'
import classNames from 'classnames'
import React from 'react'

const Seccion2 = ({ className }) => {
  const texts = textSeccion2
  return (
    <LayoutSeccion className={className}>
      <CustomTitle title={texts.title} subTitle={texts.subTitle} />
      <p className='font-roboto font-normal text-[1rem] leading-[22.4px] text-center text-blue-gray-300'>
        {texts.paragraph}
      </p>
    </LayoutSeccion>
  )
}

export default Seccion2
