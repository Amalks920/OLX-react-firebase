import React from 'react'
import Header from './Header'

const Loader = () => {
  return (
    <div className='h-[100vh]'>
    <Header/>
      <h1 className='text-center mt-[500px] text-5xl font-bold'>Loading...</h1>
  </div>
  )
}

export default Loader