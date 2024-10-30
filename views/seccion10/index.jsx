import React from 'react'
import CustomButton from '@components/button'
import { textSeccion10 } from '@config/text-seccion10'
import LayoutSeccion from '@layouts/layout-seccion'

const Seccion10 = ({ className }) => {
    const texts = textSeccion10
    return (
        <>
         <LayoutSeccion className={className}>
                <section className='w-full flex flex-col items-center justify-center gap-8 text-center'>
                    <header className='w-full flex flex-col items-center justify-center gap-2'>
                        <h1 className='font-roboto font-bold text-[24px] leading-[26.4px] md:text-[48px] md:font-extrabold md:leading-[52.8px] text-white'>
                            {texts.header}
                        </h1>
                        <h2 className='font-roboto font-bold text-[24px] leading-[26.4px] md:text-[48px] md:font-extrabold  md:leading-[35.2px] text-indigo-400'>
                            {texts.subheader}
                        </h2>
                    </header>
                    <p className='font-roboto font-normal text-base leading-[22.4px] md:text-[18px] md:leading-[28.8px] text-[#CBD5E1]'>{texts.paragraph}</p>
                    <div className='w-full flex items-center justify-center gap-4'>
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
                </section>
            </LayoutSeccion>
        </>
    )

}

export default Seccion10;
