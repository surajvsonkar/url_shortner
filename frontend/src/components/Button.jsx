import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onclick} className='w-full bg-blue-500 text-white py-2 px-4 rounded-md' type={props.type}>
    {props.text}
    </button>
  )
}

export default Button