import { useState } from "react"
import { PhoneCall, MessageSquare, Video, ChevronDown } from "lucide-react"

const typeConfig = {
    Call: {
        icon: PhoneCall,
        iconBg: 'bg-gray-100',
        iconColor: 'text-gray-600',
    },
    Text: {
        icon: MessageSquare,
        iconBg: 'bg-gray-100',
        iconColor: 'text-gray-600',
    },
    Video: {
        icon: Video,
        iconBg: 'bg-gray-100',
        iconColor: 'text-gray-600',
    },
}

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', {
        month: 'long', day: 'numeric', year: 'numeric'
    })
}

export default function Timeline() {
    const [entries] = useState(() =>
        JSON.parse(localStorage.getItem('timeline') || '[]')
    )
    const [filter, setFilter] = useState('All')
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const filterOptions = ['All', 'Call', 'Text', 'Video']

    const filtered = filter === 'All'
        ? entries
        : entries.filter(e => e.type === filter)

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">

            <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Timeline</h1>

            {/* Filter Dropdown */}
            <div className="relative w-52 mb-6">
                <button
                    onClick={() => setDropdownOpen(o => !o)}
                    className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 hover:border-gray-300 transition-colors"
                >
                    {filter === 'All' ? 'Filter timeline' : `Filter: ${filter}`}
                    <ChevronDown
                        size={15}
                        className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                    />
                </button>

                {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-md z-10 overflow-hidden">
                        {filterOptions.map(opt => (
                            <button
                                key={opt}
                                onClick={() => {
                                    setFilter(opt)
                                    setDropdownOpen(false)
                                }}
                                className={`w-full text-left px-4 py-2.5 text-sm transition-colors
                                    ${filter === opt
                                        ? 'bg-[#2D4A3E] text-white'
                                        : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Timeline Entries */}
            {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 gap-3">
                    <p className="text-gray-400 text-sm">No timeline entries yet.</p>
                    <p className="text-gray-300 text-xs">
                        Go to a friend's page and log a Call, Text, or Video.
                    </p>
                </div>
            ) : (
                <div className="flex flex-col gap-3">
                    {filtered.map(entry => {
                        const config = typeConfig[entry.type] ?? typeConfig['Call']
                        const EntryIcon = config.icon
                        return (
                            <div
                                key={entry.id}
                                className="bg-white rounded-xl px-5 py-4 border border-gray-100 flex items-center gap-4"
                            >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${config.iconBg}`}>
                                    <EntryIcon size={18} className={config.iconColor} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-900">
                                        <span className="font-bold">{entry.type}</span>
                                        {' '}
                                        <span className="text-gray-500">with {entry.friendName}</span>
                                    </p>
                                    <p className="text-xs text-gray-400 mt-0.5">
                                        {formatDate(entry.date)}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}