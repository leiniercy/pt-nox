import classNames from 'classnames'
import React from 'react'

const Seccion1Title = ({
  className,
  title,
  classNameTitle,
  subTitle,
  classNameSubTitle
}) => {
  return (
    <div
      className={classNames(
        'relative w-full flex flex-col gap-[8px] items-center justify-center',
        className
      )}
    >
      <h1
        className={classNames(
          'block font-roboto font-semibold text-[16px] sm:text-[18px] sm2:text-[20px] leading-[22px] text-center text-indigo-400',
          classNameTitle
        )}
      >
        {title}
      </h1>
      <h2
        className={classNames(
          'block font-roboto font-bold text-[40px] sm:text-[46px] sm2:text-[48px] leading-[52.8px] text-center text-white',
          classNameSubTitle
        )}
      >
        {subTitle}
      </h2>
    </div>
  )
}

export default Seccion1Title
