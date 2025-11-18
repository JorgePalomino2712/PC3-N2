import React from 'react'

export default function Contact() {
    return (
        <section className="max-w-6xl mx-auto py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">Klean — Beautifully simple landing</h1>
                    <p className="mt-4 text-lg text-slate-600">Sigue el diseño del Figma y reemplaza los textos y gráficos por los tuyos.</p>
                    <div className="mt-6 flex gap-3">
                        <a href="/projects" className="px-5 py-3 rounded-2xl font-semibold shadow hover:shadow-md transition">Get started</a>
                        <a href="/features" className="px-5 py-3 rounded-2xl border">Learn more</a>
                    </div>
                </div>


                <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8">
                    <div className="h-64 w-full rounded-lg bg-white/60 border-dashed border-2 border-red-100 flex items-center justify-center">Place hero image</div>
                </div>
            </div>
        </section>
    )
}
