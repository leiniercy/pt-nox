import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CustomTitle = ({
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

CustomTitle.propTypes = {
  /**
   * Label del titulo
   **/
  title: PropTypes.string.isRequired,
  /**
   * Label del sub titulo (campo opcional)
   **/
  subTitle: PropTypes.string,
  /**
   * Nueva informacion css para el contenedor del titulo (campo opcional)
   **/
  className: PropTypes.string,
  /**
   * Nueva informacion css para el titulo (campo opcional)
   **/
  classNameTitle: PropTypes.string,
  /**
   * Nueva informacion css para el subtitulo (campo opcional)
   **/
  classNameSubTitle: PropTypes.string
}

export default CustomTitle
