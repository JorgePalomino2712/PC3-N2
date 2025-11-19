import React from 'react'

export default function Projects() {
    return (
        <section className="max-w-6xl mx-auto py-16 flex flex-col items-center justify-center gap-4 p-4">
            <div><h2 className='text-2xl font-bold'>Our Projects</h2></div>
            <div className='flex px-60'><p className='text-center'>A projects is a single or team activity, combining research and design with best effort. Here are some of our team's projects</p></div>
            <div className='grid grid-cols-3 grid-rows-3 my-4 mx-20 gap-3 p-2 bg-white'>
                <div className='h-48'><img className="w-full h-full object-cover rounded-xl" src="/5.projects/image1.png" alt="" /></div>
                <div className='row-span-2 h-[400px]'><img className="w-full h-full object-cover rounded-xl" src="/5.projects/image3.png" alt="" /></div>
                <div className='h-48'><img className="w-full h-full object-cover rounded-xl" src="/5.projects/image5.png" alt="" /></div>
                <div className='row-span-2 h-[400px]'><img className="w-full h-full object-cover rounded-xl" src="/5.projects/image2.png" alt="" /></div>
                <div className='row-span-2 h-[400px]'><img className="w-full h-full object-cover rounded-xl" src="/5.projects/image6.png" alt="" /></div>
                <div className='h-48'><img className="w-full h-full object-cover rounded-xl" src="/5.projects/image4.png" alt="" /></div>
            </div>

            <button className='border border-purple-500 text-purple-400 rounded-2xl p-2'>View More</button>
        </section>
    )
}
