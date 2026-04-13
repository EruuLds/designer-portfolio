import { GlobalStateContext } from "../contexts/GlobalStateContext"
import { useContext } from "react"

export function useGlobalStateContext() {
    const context = useContext(GlobalStateContext);
    
    if (!context) {
        throw new Error('useDataContext must be used within a DataContextProvider');
    }
    
    return context;
}
