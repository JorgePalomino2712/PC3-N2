import React from 'react'

export default function Team() {
    return (
        <section className="max-w-6xl mx-auto py-16 flex flex-col items-center justify-center gap-8">
            <h2 className='text-2xl font-bold'>Our Team</h2>
            <p>People from various origins, cultures, and personalities make up our team.
                This blend makes it a powerful team
            </p>
            <div className='grid grid-cols-4 p-5'>
                <div className='flex flex-col items-center justify-center'>
                    <img className='w-40' src="/6.team/image1.png" alt="" />
                    <span className='font-bold'>John Adams</span>
                    <p className='text-purple-300'>CEO</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img className='w-40' src="/6.team/image2.png" alt="" />
                    <span className='font-bold'>Carrey Johnson</span>
                    <p className='text-purple-300'>Senior Developer</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img className='w-40' src="/6.team/image3.png" alt="" />
                    <span className='font-bold'>Ray Marie</span>
                    <p className='text-purple-300'>Developer</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <img className='w-40' src="/6.team/image4.png" alt="" />
                    <span className='font-bold'>Austin Min</span>
                    <p className='text-purple-300'>Designer</p>
                </div>
            </div>
            <button className='border border-purple-500 text-purple-400 rounded-2xl p-2'>View Full Team</button>
        </section>
    )
}
