import React from 'react'
import Image from 'next/image'
import CustomButton from '@components/button'
import { textSeccion7 } from '@config/text-seccion7'

const Seccion7 = ({ className }) => {
    const texts = textSeccion7;
    return (
        <>
            <main className={`w-full flex items-center justify-center py-6 px-4 md:p-24 + ${className}`}>
                <section className='w-full lg:w-[85%] flex flex-col lg:flex-row items-center justify-center border rounded-[20px] py-6 md:py-12 md:pl-8 lg:py-16 lg:pl-16 border-[#475569]'>
                    <div className='w-full lg:w-1/2 flex flex-col items-start justify-center gap-8 px-4'>
                        <h1 className='font-roboto font-medium text-[18px] leading-[19.8px] md:font-bold md:text-[32px] md:leading-[35.2px] text-white'>
                            {texts.title}
                        </h1>
                        <p className='font-roboto font-normal text-base leading-[22.4px] md:text-[18px] md:leading-[28.8px] text-[#CBD5E1]'>
                            {texts.paragraph}
                        </p>
                        <CustomButton
                            className='flex-1 p-4 lg:flex-none w-[245px] lg:w-[237px]'
                            cancel
                            name={texts.botonRequest} 
                            textSize={20}/>
                    </div>
                    <div className='lg:w-1/2 flex items-center justify-center'>
                        <Image
                            src="/assets/images/seccion7/picture-0.svg"
                            width={608}
                            height={277}
                            alt="graph-img"
                            className='w-[320px] h-[228px] sm:w-[608px] sm:h-[277px]'
                        />
                    </div>
                </section>
            </main >
        </>
    )
}


export default Seccion7