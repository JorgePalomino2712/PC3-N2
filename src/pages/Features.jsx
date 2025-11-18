import React from 'react'

export default function Features() {
    return (
        <section className="max-w-6xl mx-auto py-16 flex flex-col items-center justify-center gap-9">
            <div className='mt-10'><h1 className='text-2xl font-bold'>Features</h1></div>
            <div className='w-[50%]'><p>We a number of excellent features that will undoubtedly improve the user experience. We also provide a better support system</p></div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 gap-3'>
                <div className=' flex flex-col  items-center justify-center '>
                    <img className='h-20' src="./4.features/icon1.png" alt="" />
                    <h3 className='font-bold'>Encrypted Mail</h3>
                    <p className='text-center'>A process of encrypting email communications</p>
                </div>
                <div className=' flex flex-col  items-center justify-center '>
                    <img className='h-20' src="./4.features/icon2.png" alt="" />
                    <h3 className='font-bold'>Encrypted Mail</h3>
                    <p className='text-center'>A process of encrypting email communications</p>
                </div>
                <div className=' flex flex-col  items-center justify-center '>
                    <img className='h-20' src="./4.features/icon3.png" alt="" />
                    <h3 className='font-bold'>Encrypted Mail</h3>
                    <p className='text-center'>A process of encrypting email communications</p>
                </div>
                <div className=' flex flex-col  items-center justify-center '>
                    <img className='h-20' src="./4.features/icon4.png" alt="" />
                    <h3 className='font-bold'>Encrypted Mail</h3>
                    <p className='text-center'>A process of encrypting email communications</p>
                </div>
                <div className=' flex flex-col  items-center justify-center '>
                    <img className='h-20' src="./4.features/icon5.png" alt="" />
                    <h3 className='font-bold'>Encrypted Mail</h3>
                    <p className='text-center'>A process of encrypting email communications</p>
                </div>
                <div className=' flex flex-col  items-center justify-center '>
                    <img className='h-20' src="./4.features/icon6.png" alt="" />
                    <h3 className='font-bold'>Encrypted Mail</h3>
                    <p className='text-center'>A process of encrypting email communications</p>
                </div>

            </div>
        </section>
    )
}
