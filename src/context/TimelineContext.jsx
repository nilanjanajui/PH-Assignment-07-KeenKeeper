import { createContext, useState, useContext } from "react"

const TimelineContext = createContext(null)

export function TimelineProvider({ children }) {
    const [entries, setEntries] = useState([])  // ← empty, no storage

    function addEntry(type, friendName) {
        const newEntry = {
            id: crypto.randomUUID(),
            type,
            friendName,
            title: `${type} with ${friendName}`,
            date: new Date().toISOString(),
        }
        setEntries(prev => [newEntry, ...prev])  // ← only in memory
    }

    return (
        <TimelineContext.Provider value={{ entries, addEntry }}>
            {children}
        </TimelineContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTimeline() {
    return useContext(TimelineContext)
}