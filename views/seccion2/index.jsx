import CustomTitle from '@components/title'
import { textSeccion2 } from '@config/text-seccion-2'
import LayoutSeccion from '@layouts/layout-seccion'
import React from 'react'

const Seccion2 = ({ className }) => {
  const texts = textSeccion2
  return (
    <LayoutSeccion className={className}>
      <CustomTitle title={texts.title} subTitle={texts.subTitle} paragraph={texts.paragraph} />
    </LayoutSeccion>
  )
}

export default Seccion2
