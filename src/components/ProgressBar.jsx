import React, { useEffect, useState } from 'react'

export const ProgressBar = ({value}) => {
    const [width , setWidth] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setWidth(value)
        }, 200);
    })
  return (
    <div className='w-full h-3 bg-transparent rounded-2xl ring-gray-500 ring-1 flex items-center'>
        <div className='h-3 bg-white rounded-2xl transition-all duration-1000' style={{width : `${width}%`}}></div>
    </div>
  )
}
