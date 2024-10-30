'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { fetchJsonplaceholder } from '@services/service-jsonplaceholder'
import { companies } from '@views/seccion1/seccion1-logos'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Image from 'next/image'
import { IconArrowLeft, IconArrowRigth } from '@components/icons/custom-icons'

const Seccion9Swiper = () => {
  const [activeButton, setActiveButton] = useState(null)
  const [info, setInfo] = useState([])

  const nombres = [
    { name: 'Ana', role: 'Manager', img: 'assets/images/seccion9/ana.svg' },
    { name: 'Luis', role: 'Developer', img: 'assets/images/seccion9/carlos.svg' },
    { name: 'María', role: 'Designer', img: 'assets/images/seccion9/ana.svg' },
    { name: 'Javier', role: 'Tester', img: 'assets/images/seccion9/carlos.svg' },
    { name: 'Sofía', role: 'Product Owner', img: 'assets/images/seccion9/sofia.svg' },
    { name: 'Carlos', role: 'DevOps', img: 'assets/images/seccion9/carlos.svg' },
    { name: 'Lucía', role: 'Business Analyst', img: 'assets/images/seccion9/sofia.svg' },
    { name: 'Diego', role: 'Administrator', img: 'assets/images/seccion9/carlos.svg' },
    { name: 'Valentina', role: 'UX Researcher', img: 'assets/images/seccion9/ana.svg' },
    { name: 'Andrés', role: 'Data Scientist', img: 'assets/images/seccion9/carlos.svg' }
  ]

  const selectCompanyRandom = () => {
    return companies[Math.floor(Math.random() * companies.length)]
  }

  useEffect(() => {
    fetchJsonplaceholder().then(data => setInfo(data))
  }, [])

  const comments = useMemo(() => {
    return info.map((comment, index) => ({
      userId: comment?.userId,
      texts: comment?.body,
      name: nombres[index].name,
      role: nombres[index].role,
      image: nombres[index].img,
      companie: selectCompanyRandom()
    }))
  }, [info])

  const handleSlideChange = (swiper) => {
    setActiveButton(null)
  }

  return (
    <div className="relative w-screen">
      <Swiper
        loop={true}
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={20}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev'
        }}
        modules={[Navigation, Pagination]}
        onSlideChange={handleSlideChange}
        className="px-4 py-8 h-[450px]"
        breakpoints={{
          320: {
            slidesPerView: 1.1,
            spaceBetween: 10
          },  
          360: {
            slidesPerView: 1.21,
            spaceBetween: 10
          },       
          640: {
            slidesPerView: 2.5,
            spaceBetween: 15
          },
          1024: {
            slidesPerView: 3.3,
            spaceBetween: 15
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 15
          },
          1440: {
            slidesPerView: 5.1,
            spaceBetween: 20
          },
          1720: {
            slidesPerView: 5.5,
            spaceBetween: 20
          }
        }}
      >
        {comments.map((comment, index) => {
          const Icon = comment.companie.Icon
          return (
            <SwiperSlide key={index} className="w-[288px] mt-8">
              {({ isActive }) => (
                <div
                  className={`
                    transition-all duration-300 ease-in-out
                    flex flex-col items-start justify-between gap-3 sm:gap-4 md:gap-5 p-8 
                    bg-gray-700 border-[1px] border-gray-600 rounded-[20px]
                    w-[288px]
                    ${isActive ? 
                      'h-[400px] scale-105 shadow-lg' : 
                      'h-[355px] opacity-70'
                    }
                  `}
                >
                  <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 items-start justify-start">
                    <div className="flex flex-row flex-wrap items-center gap-2">
                      <Icon />
                      <label className="font-roboto text-gray-300 font-bold text-[24px] leading-[26.4px]">
                        {comment.companie.name}
                      </label>
                    </div>
                    <p className="font-roboto text-white line-clamp-6">
                      {comment.texts}
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <Image
                      className="h-14 w-14 rounded-full"
                      src={comment.image}
                      height={56}
                      width={56}
                      quality={100}
                      alt={`${comment.name}-avatar`}
                    />
                    <div className="flex flex-col">
                      <h1 className="text-white text-lg font-roboto leading-tight">
                        {comment.name}
                      </h1>
                      <span className="text-blue-gray-400 text-base font-roboto">
                        {comment.role}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>

      <div className="absolute left-1/2 -translate-x-1/2 z-10 flex gap-4 py-4">
        <button
          className="button-prev flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200"
          onClick={() => setActiveButton('prev')}
        >
          <IconArrowLeft color={activeButton === 'prev' ? '#4F46E5' : '#fff'} />
          <span className={`font-medium ${
            activeButton === 'prev' ? 'text-indigo-600' : 'text-white'
          }`}>
            Prev
          </span>
        </button>
        <button
          className="button-next flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200"
          onClick={() => setActiveButton('next')}
        >
          <span className={`font-medium ${
            activeButton === 'next' ? 'text-indigo-600' : 'text-white'
          }`}>
            Next
          </span>
          <IconArrowRigth color={activeButton === 'next' ? '#4F46E5' : '#fff'} />
        </button>
      </div>
    </div>
  )
}

export default Seccion9Swiper