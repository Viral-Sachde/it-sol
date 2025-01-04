import React from 'react'
import { Button } from './button'
import { ChevronRight } from 'lucide-react'


const Footer = () => {
    return (
        <div className=' bg-haha2 '>

            {/* Contact Section */}
            <section className="py-10 ">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end">
                        <div>
                            <h2 className="text-sm uppercase tracking-wider">Contact Us</h2>
                            <h3 className="text-3xl font-light mt-4">
                                Let's <span className="text-white font-medium">march</span> towards
                                absolute results, <span className="text-white font-medium"><br /> at lightning speed.</span>
                            </h3>
                        </div>
                        <div className="text-right">
                            <p className="text-white">bvyte@gmail.com</p>
                            <p className="text-white">+91 2323232323</p>
                            <p className="text-white">+91 2323232323</p>

                            <p className="text-white">Trust, We Good at this</p>

                        </div>
                    </div>
                    <Button variant="default" className="text-white border-white mt-4">
                        Call Now <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>


                <footer className="pt-14    ">
                    <div className="container mx-auto px-4 flex justify-between items-center">
                        <div className="text-xl font-bold">bvyte.</div>
                        <div className="flex gap-6 text-sm text-white">
                            <a href="#" className="text-white">About Us</a>
                            <a href="#" className="text-white">Portfolio</a>
                            <a href="#" className="text-white">Services</a>
                            <a href="#" className="text-white">FAQs</a>
                            <a href="#" className="text-white">Terms & Conditions</a>
                        </div>
                        <div className="text-sm text-white">©2024 bvyte. All Rights Reserved.</div>
                    </div>
                </footer>
            </section>

        </div>
    )
}

export default Footer