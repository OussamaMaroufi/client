import React from 'react'

const Button = ({
    text="button",
    loading=false,
    size = '',
    children,
    className = '',
    iconName = '',
}) => {
  return (
    <button
    disabled={loading}
    className={className}
    >
    {loading ? (
        <div className="button--spinner"></div>
      ) : (
        <>
          {text} {children}
        </>
      )}

    </button>
  )
}

export default Button
