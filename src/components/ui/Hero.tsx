import React from 'react'
import { Button } from './button'


const Hero = () => {
  return (
    <section className="relative h-screen bg-haha ">

      <div className="absolute inset-0 bg-haha">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-light max-w-2xl">
            Absolute Tech-Building With Lightning Speed
          </h1>
          <h4 className='text-xl md:text-xl mt-1 font-light max-w-2xl font-raleway'>
            High-performance websites, brand strategy, digital solutions, and seamless product experiences—delivered fast.            </h4>
          <div className="mt-6 flex gap-4">
            <Button variant="default" className="text-white border-white">
              Book A Call            </Button>
            <Button variant="default" className="text-white border-white">
              View Portfolio            </Button>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero