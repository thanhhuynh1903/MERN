import React from 'react'
import { Link } from 'react-router-dom'
export default function Logo() {
  return (
    <div>
      <Link to={'/home'}>
        <h1 className='text-[40px] flex'>
           <strong>Clara</strong><p className='text-gray-300'>Shop</p>
        </h1>
        </Link>
    </div>
  )
}
