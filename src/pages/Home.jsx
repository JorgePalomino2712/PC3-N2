import React from 'react'

export default function Home() {
    return (
        <section className=" ">
            <div className='flex flex-col md:flex-row w-full items-center px-6 mt-10 mb-14'>
                <div className="grid grid-cols-1 gap-8 items-center p-6 rounded-xl md:w-1/2">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-purple-700 leading-tight">
                            Bootstrap 5 theme
                        </h1>
                        <p className='text-2xl'>crafted by <span className='font-bold'>ThemeWagon</span></p>
                        <p className="mt-4 text-lg text-slate-600">
                            ThemeWagon offers an wide array of category-oriented
                            Free and Premiun Boostrap HTML.Template and Themes
                        </p>

                        <div className="mt-6 flex gap-3">
                            <a
                                href="/projects"
                                className="px-5 py-3 rounded-2xl font-semibold shadow hover:shadow-md transition bg-gradient-to-br from-purple-300 to-purple-800 text-white"
                            >
                                Check Demo
                            </a>
                        </div>
                    </div>
                </div>

                <img
                    className="w-full md:w-[50%] mt-0"
                    src="/1.home/illustration1.png"
                    alt=""
                />
            </div>
            <div className='flex flex-row gap-16 py-3 px-20 border-b border-t border-neutral-400'>
                <div><img src="/1.home/google.png" alt="" /></div>
                <div><img src="/1.home/netflix.png" alt="" /></div>
                <div><img src="/1.home/microsoft.png" alt="" /></div>
                <div><img src="/1.home/mailbuster.png" alt="" /></div>
                <div><img src="/1.home/themewagon.png" alt="" /></div>
            </div>


        </section>

    )
}
