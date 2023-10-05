import { createContext, useState } from 'react'


export const ResultContext = createContext(null)

export default function ResultContextProvider({ children }) {
    const [responses, setResponses] = useState(null)

    const value = {
        responses,
        setResponses
    }
    return (
        <div>
            <ResultContext.Provider value={value}>
                {children}
            </ResultContext.Provider>
        </div>
    )
}
