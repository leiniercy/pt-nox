import React from 'react'
import LayoutSeccion from '@layouts/layout-seccion'
import { textSeccion4 } from '@config/text-seccion-4'
import Image from 'next/image'

const Seccion4 = ({ className }) => {
    const texts = textSeccion4;

    return (
        <>
            <LayoutSeccion className={className} >
                <div className='w-full h-[479px] md:h-[1189px]'>
                    <section className='w-full bg-indigo-600 flex flex-col items-center justify-start text-center pt-12 px-4 pb-24 md:py-24 md:h-[578px]'>
                        <div className='flex flex-col items-center justify-center w-full md:max-w-[1280px]'>
                            <h1 className='font-roboto font-extrabold text-2xl leading-[26.4px] md:text-5xl md:leading-[52.8px] text-white'>
                                {texts.title}
                            </h1>
                            <span className='font-roboto font-extrabold text-2xl leading-[26.4px] md:text-5xl md:leading-[52.8px] text-white'>{texts.span}</span>
                        </div>
                    </section>
                    <section className='relative w-full flex flex-col items-center justify-start text-center py-24 px-12'>
                        <Image
                            src="/assets/images/seccion4/picture-0.svg"
                            width={600}
                            height={400}
                            alt="App Desktop"
                            className="absolute -top-16 md:-top-60 w-full md:h-[840px]"
                        />
                    </section>
                </div>
            </LayoutSeccion>
        </>
    )
}

export default Seccion4