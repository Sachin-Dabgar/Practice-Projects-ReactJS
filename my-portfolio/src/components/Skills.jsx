import React from 'react'
import htmlImage from "../assets/html.png"
import cssImage from "../assets/css.png"
import javascriptImage from "../assets/javascript.png"
import reactImageImage from "../assets/react.png"
import nextImage from "../assets/nextjs.png"
import tailwindImage from "../assets/tailwind.png"
import githubImage from "../assets/github.png"
import graphqlImage from "../assets/graphql.png"

function Skills() {

    const techs = [
        {
            id: 1,
            src: htmlImage,
            title: 'html',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: cssImage,
            title: 'css',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascriptImage,
            title: 'javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImageImage,
            title: 'react',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwindImage,
            title: 'tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: nextImage,
            title: 'next js',
            style: 'shadow-white'
        },
        {
            id: 7,
            src: graphqlImage,
            title: 'graph ql',
            style: 'shadow-pink-400'
        },
        {
            id: 8,
            src: githubImage,
            title: 'github',
            style: 'shadow-gray-400'
        },
    ]

    return (
        <div name="skills" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                    <p className='py-6'>These are the technologies I've worked with.</p>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        techs.map(({ id, src, title, style }) => (

                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills