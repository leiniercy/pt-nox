import React from 'react'

const MenuItem = ({className, children}) => {
    return (
        <>
            <button className={`px-2 py-3 gap-2 font-roboto font-medium text-base text-white leading-6 tracking-[0.5px] transition-colors duration-300 ease-in-out hover:text-[#4f46e5] ${className}`}>
                {children}
            </button>
        </>
    )
}

export default MenuItem