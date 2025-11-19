import React from 'react'

export default function Details() {
    return (
        <section className="max-w-6xl mx-auto py-16 flex items-center justify-center">
            <div className=' flex flex-col p-25 px-40 gap-20 '>
                <div className='flex flex-row gap-10'>
                    <div><img className='w-80' src="/3.details/illustration3.png" alt="" /></div>
                    <div className='flex flex-col  justify-center'>
                        <h2 className='text-2xl font-bold'>A creative team which builds stunning UI/UX</h2>
                        <p>Today .I'd like to ahow you some incredible Sing Up screen app UIideas and concepts that offer a modern user experience</p>
                        <button className='w-30 border text-purple-600 border-purple-400 p-1 rounded-2xl'>Read More</button>
                    </div>
                </div>
                <div className='flex flex-row gap-10'>
                    <div><h2 className='text-2xl font-bold'>A creative team which builds stunning UI/UX</h2>
                        <p>Today .I'd like to ahow you some incredible Sing Up screen app UIideas and concepts that offer a modern user experience</p>
                        <button className='w-30 border text-purple-600 border-purple-400 p-1 rounded-2xl'>Read More</button>
                    </div>
                    <div><img className='w-80' src="/3.details/illustration6.png" alt="" /></div>

                </div>
            </div>

        </section>
    )
}
