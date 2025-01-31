import React from 'react'

function Button({text}) {
  return (
    <button className="relative px-5 py-2.5 rounded-lg border border-blue-500 text-sm  font-semibold tracking-wider bg-transparent text-white overflow-hidden transition-all duration-200 hover:bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg active:scale-95">
 {text}
</button>
  )
}

export default Button