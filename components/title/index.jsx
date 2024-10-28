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
        'font-roboto font-semibold text-[22px] sm:text-[24px] md:text-[40px] lg:text-[56px] leading-[26.5px] lg:leading-[61.6px] text-center',
        className
      )}
    >
      <h1 className={classNames('block text-white', classNameTitle)}>
        {title}
      </h1>
      <h2
        className={classNames(
          'block text-indigo-400',
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
