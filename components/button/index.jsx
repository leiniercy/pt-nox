import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import 'hover.css/css/hover-min.css'

function CustomButton ({ name, className, regular, add, cancel, action, IconLeft, IconRight, iconSize, textSize = 12 }) {
  return (
    <button
      className={classNames(
        'flex flex-row gap-[6px] h-[48px] p-[12px] items-center justify-center rounded-[8px] hvr-wobble-horizontal',
        'font-sans font-semibold leading-[24px] tracking-[.5px]',
        regular && 'bg-transparent text-white',
        add && 'bg-indigo-600 text-white border-[1px] border-solid border-indigo-500',
        cancel && 'bg-blue-gray-700 text-white border-[1px] border-solid border-blue-gray-600',
        className
      )}
      onClick={action}
    >
      {IconLeft && <IconLeft className='h-[16px] w-[16px]' height={16 || iconSize} width={16 || iconSize} color={cancel ? '#261E1B' : '#fff'} />}
      {name && <span className={`block truncate font-roboto font-semibold leading-6 tracking-[0.5px] text-[${textSize}px] sm:text-[13px] sm2:text-[16px] first-letter:md:text-[18px]`}>{name}</span>}
      {IconRight && <IconRight className='h-[16px] w-[16px]' height={16 || iconSize} width={16 || iconSize} color={cancel ? '#261E1B' : '#fff'} />}
    </button>
  )
}

CustomButton.propTypes = {
  /**
     * Label del boton (campo opcional)
     **/
  name: PropTypes.string,
  /**
     * Nueva informacion css para el boton (campo opcional)
     **/
  className: PropTypes.string,
  /**
     * variable q define si es un boton de añadir (campo opcional)
     **/
  add: PropTypes.bool,
  /**
     * variable q define si es un boton de añadir (campo opcional)
     **/
  cancel: PropTypes.bool,
  /**
     * Metodo que indica la accion que se va a ejecutar una vez pulsado el boton
     * **/
  action: PropTypes.func
}

export default CustomButton
