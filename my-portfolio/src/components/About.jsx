import React from 'react'

function About() {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum rem, placeat aut nisi atque est accusamus blanditiis vero architecto numquam, unde ullam rerum mollitia, quos quisquam hic at quia libero deleniti doloribus cumque nostrum labore! Quasi, quaerat nemo ut odio nihil voluptate vitae tenetur id, consectetur excepturi dolorem laudantium sequi?</p>
                <br />

                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at provident blanditiis distinctio cumque earum tenetur, sit voluptatum assumenda error. Voluptates soluta error facere iusto eos, iste velit deserunt culpa enim ad reprehenderit voluptatem accusamus id possimus ipsa totam corporis fugit deleniti itaque repellat a ratione quo dolores. Dignissimos, vel?</p>
            </div>
        </div>
    )
}

export default About