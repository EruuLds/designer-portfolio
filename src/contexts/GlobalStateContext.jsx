import { createContext } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

export const GlobalStateContext = createContext();

export function GlobalStateContextProvider({ children }) {
    const isMobile = useMediaQuery('639px');

    return (
        <GlobalStateContext.Provider
            value={{
                isMobile
            }}
        >
            {children}
        </GlobalStateContext.Provider>
  )
}
