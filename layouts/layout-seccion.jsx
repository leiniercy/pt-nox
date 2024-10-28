import classNames from 'classnames'
import React from 'react'

const LayoutSeccion = ({ className, children }) => {
  return (
    <div
      className={classNames(
        'relative flex flex-col items-center justify-start py-[48px] gap-[2rem] w-full',
        className
      )}
    >
      {children}
    </div>
  )
}

export default LayoutSeccion
