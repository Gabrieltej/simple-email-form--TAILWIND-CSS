import React from 'react'

export function Details() {
  return (
    <div>
      <h1 className='text-white text-lg font-bold'>
        Get diet and fitness tip in your inbox
      </h1>
      <p className='text-white text-xs w-[84%]'>
        Eat better and exercise better, sign up for the Diet and fitness
        newsletter{' '}
      </p>
      <input
        className='bg-transparent mt-4 p-2  border-[0.2px] border-white  '
        type='text'
        name=''
        id=''
        placeholder='Enter your email'
      />
      <button className='p-2 ml-2 rounded-lg bg-[#78C415]'>Subscribe</button>
    </div>
  )
}

export default Details