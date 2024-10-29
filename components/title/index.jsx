import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CustomTitle = ({
  className,
  title,
  classNameTitle,
  subTitle,
  classNameSubTitle,
  paragraph
}) => {
  return (
    <div
      className={classNames(
        'relative flex flex-col items-center justify-start gap-[2rem] w-full',
        'font-roboto font-semibold text-[22px] sm:text-[24px] md:text-[40px] lg:text-[56px] leading-[100%] lg:leading-[61.6px] text-center',
        className
      )}
    >
      <div
        className={classNames(
          'relative w-full flex flex-col gap-[8px] items-center justify-center'
        )}
      >
        <h1 className={classNames('block text-white', classNameTitle)}>
          {title}
        </h1>
        <h2 className={classNames('block text-indigo-400', classNameSubTitle)}>
          {subTitle}
        </h2>
      </div>
      {paragraph && (
        <p className='font-roboto font-normal text-[1rem] leading-[22.4px] text-center text-blue-gray-300'>
          {paragraph}
        </p>
      )}
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
   * Label del parrafo de la descripcion del titulo (campo opcional)
   **/
  paragraph: PropTypes.string,
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
