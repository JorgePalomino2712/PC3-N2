import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/details', label: 'Details' },
    { to: '/features', label: 'Features' },
    { to: '/projects', label: 'Projects' },
    { to: '/team', label: 'Team' },
    { to: '/contact', label: 'Contact' },
]


export default function Navbar() {
    return (
        <header className="fixed inset-x-0 top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-16 gap-4">

                    <div className="flex items-center">
                        <div className="text-xl font-extrabold tracking-tight text-red-600">Klean</div>
                    </div>

                    <nav className="hidden sm:flex items-center space-x-1">
                        <Link
                            to="/"
                            className="px-3 py-2 rounded-md text-sm font-medium transition-transform transform hover:-translate-y-0.5 hover:scale-105 text-slate-700 hover:text-red-600"
                        >
                            Home
                        </Link>

                        <Link
                            to="/services"
                            className="px-3 py-2 rounded-md text-sm font-medium transition-transform transform hover:-translate-y-0.5 hover:scale-105 text-slate-700 hover:text-red-600"
                        >
                            Services
                        </Link>

                        <Link
                            to="/details"
                            className="px-3 py-2 rounded-md text-sm font-medium transition-transform transform hover:-translate-y-0.5 hover:scale-105 text-slate-700 hover:text-red-600"
                        >
                            Details
                        </Link>

                        <Link
                            to="/features"
                            className="px-3 py-2 rounded-md text-sm font-medium transition-transform transform hover:-translate-y-0.5 hover:scale-105 text-slate-700 hover:text-red-600"
                        >
                            Features
                        </Link>

                        <Link
                            to="/projects"
                            className="px-3 py-2 rounded-md text-sm font-medium transition-transform transform hover:-translate-y-0.5 hover:scale-105 text-slate-700 hover:text-red-600"
                        >
                            Projects
                        </Link>

                        <Link
                            to="/team"
                            className="px-3 py-2 rounded-md text-sm font-medium transition-transform transform hover:-translate-y-0.5 hover:scale-105 text-slate-700 hover:text-red-600"
                        >
                            Team
                        </Link>

                        <Link
                            to="/contact"
                            className="px-3 py-2 rounded-md text-sm font-medium transition-transform transform hover:-translate-y-0.5 hover:scale-105 text-slate-700 hover:text-red-600"
                        >
                            Contact
                        </Link>
                    </nav>


                    {/* Mobile menu (simple) */}
                    <div className="sm:hidden">
                        <MobileMenu links={links} />
                    </div>
                </div>
            </div>
        </header>
    )
}


function MobileMenu({ links }) {
    const [open, setOpen] = React.useState(false)
    return (
        <div className="relative">
            <button
                onClick={() => setOpen(v => !v)}
                className="p-2 rounded-md border shadow-sm bg-white"
                aria-label="menu"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                </svg>
            </button>


            {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                    {links.map(l => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) => `block px-4 py-2 text-sm ${isActive ? 'text-red-600' : 'text-slate-700'}`}
                        >
                            {l.label}
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    )
}