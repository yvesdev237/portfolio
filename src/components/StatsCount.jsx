import React, { useEffect, useState } from 'react'

export const StatsCount = ({end , duration , label}) => {
    const [count , setCount] = useState(0)

    useEffect(() => {
        let start = 0;
        const countSpeed = 20 ;
        const step = end/(duration/countSpeed)

        const timer = setInterval(() => {
            start += step ;
            setCount(Math.floor(start));

            if (start >= end) {
                setCount(end)
                clearInterval(timer)
            }
        }, countSpeed);

        return () => clearInterval(timer)
    } , [end , duration])

  return (
    <div className='flex flex-col justify-around items-center'>
        <span className='text-3xl font-bold font-serif text-gray-300'>{count > 2 ? (count  + "+") : (count)}</span>
        <p className='capitalize font-medium text-lg text-gray-400'>{label}</p>
    </div>
  )
}