import React from 'react'
import { Button } from './button'

const Header = () => {
    return (
        <div>
            <header className="fixed top-0 w-full z-50 bg-transparent">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-xl font-bold">bvyte.</div>
                    <nav className="hidden md:flex space-x-7    bg-white-700 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10  px-8 py-4 ">
                        <a href="#" className="hover:text-gray-300">Home</a><pre> |</pre>
                        <a href="#" className="hover:text-gray-300">About</a><pre> |</pre>
                        <a href="#" className="hover:text-gray-300">Services</a><pre> |</pre>
                        <a href="#" className="hover:text-gray-300">Our Work</a>
                    </nav>
                    <Button variant="outline" className="text-white border bg-white-700 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10 px-6 py-4">
                        Connect
                    </Button>
                </div>
            </header>
        </div>
    )
}

export default Header