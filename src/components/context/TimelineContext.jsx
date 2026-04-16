import { createContext, useContext, useState } from "react"

const TimelineContext = createContext(null)

export function TimelineProvider({ children }) {
    const [entries, setEntries] = useState(() =>
        JSON.parse(localStorage.getItem('timeline') || '[]')
    )

    function addEntry(type, friendName) {
        const newEntry = {
            id: crypto.randomUUID(),
            type,
            friendName,
            title: `${type} with ${friendName}`,
            date: new Date().toISOString(),
        }
        const updated = [newEntry, ...entries]
        localStorage.setItem('timeline', JSON.stringify(updated))
        setEntries(updated)
    }

    return (
        <TimelineContext.Provider value={{ entries, addEntry }}>
            {children}
        </TimelineContext.Provider>
    )
}

export function useTimeline() {
    return useContext(TimelineContext)
}