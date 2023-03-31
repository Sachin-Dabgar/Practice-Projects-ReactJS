import React from 'react'
import { AiFillCaretRight } from 'react-icons/ai'
import heroImage from "../assets/myProfile.png"
import { Link } from 'react-scroll'

function Home() {
    return (
        <div name="home" className='select-none h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a front end developer</h2>
                    <p className='text-gray-300 py-4 max-w-md'>
                        A developer who loves to create web applications and bring ideas to reality.
                    </p>
                    <div>
                        <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 rounded-md bg-gradient-to-r from-[#87918e] to-[#667371] cursor-pointer flex items-center justify-center'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <AiFillCaretRight size={20} className="ml-2" />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img
                        className='rounded-2xl mx-auto w-2/3 md:w-full'
                        src={heroImage} alt="my profile" />
                </div>
            </div>
        </div>
    )
}

export default Home