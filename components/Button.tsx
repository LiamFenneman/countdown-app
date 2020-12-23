import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  className?: string
  onClick?: () => void
}

const Button = ({ children, className, onClick }: Props) => {
  return (
    <button
      className={`ring px-8 py-4 rounded font-mono uppercase ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
