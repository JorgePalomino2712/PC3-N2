import React from 'react'

export default function Contact() {
    return (
        <section className="relative overflow-hidden flex flex-col gap-12 items-center justify-center max-w-6xl mx-auto py-16">
            <h2 className='text-2xl font-bold mt-6'>Contact Us</h2>

            <div className="absolute inset-0 -z-10 bg-[url('/7.contact/image1.png')] bg-cover bg-center"></div>


            <div className="relative z-20 flex flex-row gap-14 items-start">
                <form className="bg-transparent backdrop-blur-md p-6 flex flex-col w-[400px] rounded-xl shadow-xl">
                    <input placeholder='Write your name' type="text" className="border p-2 rounded-md mb-2 bg-white" />
                    <input placeholder='Write your email' type="text" className="border p-2 rounded-md mb-2 bg-white" />
                    <input placeholder='Write your message' type="text" className="border p-2 rounded-md mb-2 bg-white" />
                    <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl ">
                        Submit
                    </button>
                </form>

                <div className=" flex flex-col text-xl font-semibold text-white drop-shadow-lg">
                    <span className='text-gray-600'>📞 +955038229</span>
                    <span className='text-gray-600'>📪 jorgeps2712@gmail.com</span>
                    <span className='text-gray-600'>📍 Peru</span>
                </div>
            </div>
        </section>


    )
}
