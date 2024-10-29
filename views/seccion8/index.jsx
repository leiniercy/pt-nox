import React from 'react'
import Image from 'next/image'
import CustomButton from '@components/button'
import { textSeccion8 } from '@config/text-seccion8'

const Seccion8 = ({ className }) => {
    const texts = textSeccion8;
    return (
        <>
            <main className={`w-full flex flex-col md:flex-row items-center justify-center gap-8 pt-6 px-4 bg-[#1E293B] md:pt-24 md:pl-24 + ${className}`}>
                <div className='w-full md:w-1/2 flex flex-col items-start justify-center gap-8 px-4'>
                    <header className='w-full flex flex-col items-start justify-center gap-2'>
                        <h1 className='font-roboto font-bold text-[24px] leading-[26.4px] md:text-[48px] md:font-extrabold md:leading-[52.8px] text-white'>
                            {texts.header}
                        </h1>
                        <h2 className='font-roboto font-bold text-[24px] leading-[26.4px] md:text-[48px] md:font-extrabold md:leading-[52.8px] md:leading-[35.2px] text-indigo-400'>
                            {texts.subheader}
                        </h2>
                    </header>

                    <p className='font-roboto font-normal text-base leading-[22.4px] md:text-[18px] md:leading-[28.8px] text-white'>
                        {texts.paragraph}
                    </p>
                    <CustomButton
                        className='flex-1 p-4 md:flex-none w-[186px] md:w-[237px]'
                        add
                        name={texts.botonStart}
                        textSize={20} />
                </div>
                <div className='w-full md:w-1/2 flex items-center justify-end -mr-8 md:-mr-4'>
                    <Image
                        src="/assets/images/seccion8/picture-0.jfif"
                        width={680}
                        height={480}
                        alt="graph-img w-[280px] h-[266px] md:w-[680px] md:h-[480px]"
                    />
                </div>

            </main >
        </>
    )
}


export default Seccion8