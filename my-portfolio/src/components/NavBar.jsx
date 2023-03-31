import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

function NavBar() {

    // state to handle the hamburger icon
    const [nav, setnav] = useState(false)

    // array for links to show in the list format
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'skills'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]

    return (
        // main navigation bar
        <div className='flex justify-between items-center w-full h-20 text-white fixed px-4 select-none'>

            {/* Logo or Main text */}

            <h1 className='text-5xl font-signature pl-4'>Sachin</h1>


            {/* list of items for navigation */}
            <ul className='hidden md:flex'>
                {/* mapping list based on links array */}
                {
                    links.map(({ id, link }) => (
                        <li key={id} className='px-4 font-medium text-gray-500 hover:scale-105 duration-200 cursor-pointer capitalize' >
                            <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))
                }

            </ul>

            {/* showing icon based on the user click and changing state */}
            <div onClick={() => (setnav(!nav))} className='text-gray-500 cursor-pointer pr-4 z-10 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {/* Showing the icons for smaller screen in full screen based on hamburger icon clicks */}
            {nav && (
                <ul className="flex flex-col absolute top-0 left-0 w-full h-screen items-center justify-center bg-gradient-to-b from-black to-gray-800 md:hidden">
                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 py-6 cursor-pointer text-4xl hover:scale-105 text-gray-500'>
                            <Link onClick={() => (setnav(!nav))} to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))}
                </ul>
            )
            }



        </div >
    )
}

export default NavBar