import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

function CustomButton ({ name, className, add, cancel, action, IconLeft, IconRight, iconSize }) {
  return (
    <button
      className={classNames(
        'flex flex-row gap-[6px] h-[48px] p-[12px] items-center justify-center rounded-[8px]',
        'font-sans font-semibold text-[12px] sm:text-[13px] sm2:text-[16px] leading-[24px] tracking-[.5px]',
        add && 'bg-indigo-600 text-white border-[1px] border-solid border-indigo-500',
        cancel && 'bg-blue-gray-700 text-white border-[1px] border-solid border-blue-gray-600',
        className
      )}
      onClick={action}
    >
      {IconLeft && <IconLeft className='h-[16px] w-[16px]' height={16 || iconSize} width={16 || iconSize} color={cancel ? '#261E1B' : '#fff'} />}
      {name && <span className='font-medium leading-6'>{name}</span>}
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