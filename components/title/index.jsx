import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CustomTitle = ({
  classNameSubContainer,
  className,
  title,
  classNameTitle,
  subTitle,
  classNameSubTitle,
  paragraph,
  classNameParagraph = 'text-center'
}) => {
  return (
    <div
      data-aos='fade-up'
      data-aos-easing='linear'
      data-aos-duration='1000'
      className={classNames(
        'relative flex flex-col items-center justify-start gap-[2rem] w-[100%]',
        'font-roboto font-semibold text-[22px] sm:text-[24px] md:text-[40px] lg:text-[56px] leading-[100%] lg:leading-[61.6px] text-center',
        className
      )}
    >
      <div
        className={classNames(
          'relative w-full flex flex-col gap-[8px] items-center justify-center',
          classNameSubContainer
        )}
      >
        <h1 className={classNames('blockw w-full text-white', classNameTitle)}>
          {title}
        </h1>
        <h2
          className={classNames(
            'block w-full text-indigo-400',
            classNameSubTitle
          )}
        >
          {subTitle}
        </h2>
      </div>
      {paragraph && (
        <p
          className={classNames(
            'block font-roboto w-full font-normal text-[1rem] leading-[22.4px] text-blue-gray-300',
            classNameParagraph
          )}
        >
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
