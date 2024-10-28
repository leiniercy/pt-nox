import React from 'react'

const MenuItem = ({className, children}) => {
    return (
        <>
            <button className={`px-2 py-3 gap-2 font-roboto font-medium text-base text-white leading-6 tracking-[0.5px] ${className}`}>
                {children}
            </button>
        </>
    )
}

export default MenuItem