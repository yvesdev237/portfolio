import React, { useEffect, useState } from 'react'

export const ProgressBar = ({ value }) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = window.setTimeout(() => setWidth(value), 120)
    return () => window.clearTimeout(timer)
  }, [value])

  return (
    <div className="flex h-3 w-full items-center rounded-full border border-white/10 bg-slate-900/80">
      <div className="h-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 transition-all duration-700" style={{ width: `${width}%` }} />
    </div>
  )
}
