import React from 'react'
import Form from '../Form'
import Slider from './Components/Slider'

const SliderAndForm = () => {
  return (
    <section className="flex md:flex-row flex-col w-[100%] ">
        <div className='w-[100%] md:w-[60%] md:px-10 '>
            <Slider/>
        </div>
        <div className='md:w-[40%] w-[100%]  px-12 py-3 md:px-3 '>
            <Form/>
        </div>
    </section>
  )
}

export default SliderAndForm