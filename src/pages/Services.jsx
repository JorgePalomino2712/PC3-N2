import React from 'react'

export default function Services() {
    return (
        <section className="max-w-6xl mx-auto py-16 flex flex-col items-center justify-center">
            <div><h2 className='text-2xl font-bold'>Service</h2></div>
            <div className='w-[50%]'><p className='text-gray-700 text-center'>We offer youth with for career development in their practice. We also support a wide range of services to ensure client satisfaction</p></div>
            <div className='flex flex-row p-14  gap-4'>
                <div className='border-2 border-white bg-white rounded-2xl items-center'>
                    <img className='w-35 flex p-6' src="/2.services/icon1.png" alt="" />
                    <span className='font-bold'>Send Texts Instantly</span>
                    <p>Financial planning, forecasting and adjusting rapidly with customer demands and budgets</p>
                    <button className='text-blue-500'> Learn More--</button>
                </div>
                <div className='border-2 border-white bg-white rounded-2xl'>
                    <img className='w-35 flex p-6' src="/2.services/icon2.png" alt="" />
                    <span className='font-bold'>Send Texts Instantly</span>
                    <p>Financial planning, forecasting and adjusting rapidly with customer demands and budgets</p>
                    <button className='text-blue-500'> Learn More--</button>
                </div>
                <div className='border-2 border-white bg-white rounded-2xl'>
                    <img className='w-35 flex p-6' src="/2.services/icon3.png" alt="" />
                    <span className='font-bold'>Send Texts Instantly</span>
                    <p>Financial planning, forecasting and adjusting rapidly with customer demands and budgets</p>
                    <button className='text-blue-500'> Learn More--</button>
                </div>
            </div>
        </section>
    )
}
