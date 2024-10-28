
import React from 'react'
import CustomTitle from '@components/title'
import LayoutSeccion from '@layouts/layout-seccion'
import { textSeccion3 } from '@config/text-seccion-3'


const Seccion3 = ({ className }) => {
    const texts = textSeccion3
  return <LayoutSeccion className={className} > 
    <CustomTitle title={texts.title} subTitle={textSeccion3.subTitle} paragraph={texts.paragraph} />
  </LayoutSeccion>
}

export default Seccion3
