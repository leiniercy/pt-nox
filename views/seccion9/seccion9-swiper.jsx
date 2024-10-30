'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { fetchJsonplaceholder } from '@services/service-jsonplaceholder'
import { companies } from '@views/seccion1/seccion1-logos'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import classNames from 'classnames'
import '@styles/swiper.css'
import Image from 'next/image'
import { IconArrowLeft, IconArrowRigth } from '@components/icons/custom-icons'

const Seccion9Swiper = () => {
  const isMount = useRef(false)
  const nombres = [
    { name: 'Ana', role: 'Manager' },
    { name: 'Luis', role: 'Developer' },
    { name: 'María', role: 'Designer' },
    { name: 'Javier', role: 'Tester' },
    { name: 'Sofía', role: 'Product Owner' },
    { name: 'Carlos', role: 'DevOps' },
    { name: 'Lucía', role: 'Business Analyst' },
    { name: 'Diego', role: 'System Administrator' },
    { name: 'Valentina', role: 'UX Researcher' },
    { name: 'Andrés', role: 'Data Scientist' }
  ]

  // Función para seleccionar una empresa aleatoria
  function selectCompanyRandom () {
    const indiceAleatorio = Math.floor(Math.random() * companies.length)
    return companies[indiceAleatorio]
  }

  const [info, setInfo] = useState([])

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true
      fetchJsonplaceholder().then(data => setInfo(data))
    }
  }, [isMount])

  const comments = useMemo(() => {
    return (
      info.map((comment, index) => {
        const companieAleatoria = selectCompanyRandom()
        return {
          userId: comment?.userId,
          texts: comment?.body,
          name: nombres[index].name,
          role: nombres[index].role,
          companie: companieAleatoria
        }
      }) ?? []
    )
  }, [info, nombres])

  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      centeredSlides={true}
      navigation={{
        nextEl: '.button-next',
        prevEl: '.button-prev',
        clickable: true
      }}
      modules={[Navigation, Pagination]}
      className='relative w-[100%] h-[100%]'
    >
      {comments.map((comment, index) => {
        const Icon = comment.companie.Icon
        return (
          <SwiperSlide key={index}>
            <div
              className={classNames(
                'realtive w-[288px] h-[355px] flex flex-col items-start justify-between gap-3 sm:gap-4 md:gap-5 p-8 bg-gray-700 border-[1px] border-gray-600',
                'rounded-[20px]'
              )}
            >
              <div className='relative flex flex-col gap-2 sm:gap-3 md:gap-4 items-start justify-start'>
                <div className='relative w-auto flex flex-row flex-wrap justify-center items center gap-2'>
                  <Icon />
                  <label className='font-roboto text-gray-300 font-bold text-[24px] leading-[26.4px]'>
                    {comment.companie.name}
                  </label>
                </div>
                <p className='relative w-full text-wrap font-roboto text-white'>
                  {comment.texts}
                </p>
              </div>
              <div className='relative w-full flex flex-row items-center justify-start gap-2 sm:gap-3 sm2:gap-4'>
                <Image
                  className='h-14 w-14 rounded-full'
                  src='/assets/images/avatar.png'
                  height={16}
                  width={16}
                  quality={100}
                />
                <div className='relative w-full flex flex-col items-start justify-start'>
                  <h1 className='text-white text-[16px] sm:text-[17px] sm2:text-[18px] font-roboto font-normal leading-[28.8px] text-left'>
                    {comment.name}
                  </h1>
                  <label className='text-blue-gray-600 text-[16px] sm:text-[17px] sm2:text-[18px] font-roboto font-normal leading-[22.4px] text-left'>
                    {comment.role}
                  </label>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
      {/* Paginacion */}
      <div className='slider-controller relative w-[100%] flex flex-row gap-[1rem] items-center justify-center'>
        <button className='button-prev relative h-[48px] flex items-center justify-center gap-[8px] rounded-[8px] z-[200] pt-[12px] px-[8px]'>
          <IconArrowLeft color='#fff' />
          <label className='font-roboto font-medium text-[16px] leading-[24px] tracking-[.5px] text-white'>
            Prev
          </label>
        </button>
        {/* <div className='swiper-pagination relative w-auto bottom-0 top-0 left-0 flex flex-row gap-[0.3rem] items-center justify-center'></div> */}
        <button className='button-next relative h-[48px] flex items-center justify-center gap-[8px] rounded-[8px] z-[200] pt-[12px] px-[8px]'>
          <label className='font-roboto font-medium text-[16px] leading-[24px] tracking-[.5px] text-white'>
            Next
          </label>
          <IconArrowRigth color='#fff' />
        </button>
      </div>
    </Swiper>
  )
}

export default Seccion9Swiper
