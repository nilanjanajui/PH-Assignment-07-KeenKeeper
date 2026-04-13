import { Link, useLocation } from 'react-router-dom'
import { Home, Clock, BarChart2 } from 'lucide-react'

const navLinks = [
    { path: '/', label: 'Home', Icon: Home },
    { path: '/timeline', label: 'Timeline', Icon: Clock },
    { path: '/stats', label: 'Stats', Icon: BarChart2 },
]

export default function Navbar() {
    const { pathname } = useLocation()

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">

                    {/* Logo */}
                    <Link to="/" className="text-xl font-bold text-gray-900 tracking-tight">
                        Keen<span className="font-extrabold">Keeper</span>
                    </Link>

                    {/* Nav Links */}
                    <div className="flex items-center gap-1">
                        {navLinks.map(({ path, label }) => {
                            const isActive = pathname === path
                            return (
                                <Link
                                    key={path}
                                    to={path}
                                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors
                    ${isActive
                                            ? 'bg-[#2D4A3E] text-white'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                        }`}
                                >
                                    <Icon size={15} />
                                    {label}
                                </Link>
                            )
                        })}
                    </div>

                </div>
            </div>
        </nav>
    )
}