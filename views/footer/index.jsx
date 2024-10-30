'use client'
import {
  IconAppStore,
  IconFacebook,
  IconInstagram,
  IconLinkendIn,
  IconPlayStore,
  IconTwitter,
  IconYouTube
} from '@components/icons/custom-icons'
import { textsFooter } from '@config/text-footer'
import LayoutSeccion from '@layouts/layout-seccion'
import classNames from 'classnames'
import React from 'react'

const FooterCategories = ({ categories }) => {
  return (
    <div className='relative flex flex-col gap-8 items-start justify-start w-full md:grid md:grid-cols-3 lg:md:grid-cols-4 xl:grid-cols-6'>
      {categories?.map((category, index) => {
        return (
          <div
            key={index}
            className='realtive flex flex-col items-start justify-start md:col-span-1'
          >
            <div className='realtive py-[12px] w-full'>
              <label
                className={classNames(
                  'font-roboto font-medium text-white text-[16px] leading-[17.6px]'
                )}
              >
                {category?.title}
              </label>
            </div>
            {category?.info?.map((subCategorie, subIndex) => {
              const Icon = subCategorie?.icon
              return (
                <div
                  key={subIndex}
                  className='realtive py-[12px] w-full flex flex-start items-center gap-2'
                >
                  <label
                    className={classNames(
                      'font-roboto font-medium text-blue-gray-200 text-[16px] leading-[17.6px]'
                    )}
                  >
                    {subCategorie?.title}
                  </label>
                  {Icon && <Icon />}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

const CustomFooter = ({ className }) => {
  const date = new Date()
  const { texts, companie, others } = textsFooter
  const categories = [...texts]
  return (
    <LayoutSeccion className={className + ' bg-blue-gray-600 lg:px-12'}>
      <FooterCategories categories={categories ?? []} />
      <div className='relative w-full flex flex-row flex-wrap gap-[10px] lg:gap-[1rem] justify-between items-center'>
        <div className='relative flex flex-row flex-wrap gap-[10px] lg:gap-[1rem]'>
          <label className='block font-roboto font-normal text-[12px] sm:text-[13px] sm2:text-[14px] leading-[22.4px] text-blue-gray-200 text-nowrap'>{`${companie} @ ${date.getFullYear()}`}</label>
          <div className='relative flex flex-row flex-wrap gap-[8px] sm:gap-[10px]'>
            {others?.map((info, index) => {
              return (
                <label
                  key={index}
                  className='block font-roboto font-normal text-[12px] sm:text-[13px] sm2:text-[14px] leading-[22.4px] text-blue-gray-200 text-nowrap'
                >{`${info}`}</label>
              )
            })}
          </div>
        </div>
        <div className='relative flex flex-row flex-wrap gap-[10px] lg:gap-[1rem] justify-start items-center'>
          <div className='relative flex flex-row gap-[10px] lg:gap-[1rem]'>
            <IconYouTube />
            <IconFacebook />
            <IconTwitter />
            <IconInstagram />
            <IconLinkendIn />
          </div>
          <div className='relative flex flex-row gap-[10px] lg:gap-[1rem]'>
            <IconAppStore />
            <IconPlayStore />
          </div>
        </div>
      </div>
    </LayoutSeccion>
  )
}

export default CustomFooter
