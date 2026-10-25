import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
    const [token, setToken] = useState(false);

    return(
        <GlobalContext.Provider value={{token, setToken}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider;