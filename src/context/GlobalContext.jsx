import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
    //state
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState("");

    //LOGIN
    const login = async (email, password) =>  {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password})
    });

    const data = await response.json();
    console.log(data);
    if(!response.ok) {
        throw new Error(data.error || "Login failed");
    }

    setToken(data.token);
    setEmail(data.email);

    return data;
    };

    // Register
    const register = async (email, password) => {
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        });

        const data = await response.json();
        if(!response.ok) {
            throw new Error(data.error || "Registration failed");
        }
        setToken(data.token);
        setEmail(data.email);

        return data;
    };

    // LOGOUT
    const logout  =  () => {
        setToken(null);
        setEmail("");
    };

    // GET PROFILLE
    const getProfile = async () => {
        const response = await fetch("http://localhost:5000/api/auth/me", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data = await response.json();
        if(!response.ok) {
            throw new Error(data.error || "Could not get profile");
        }

        if (data.email) {
            setEmail(data.email);
        }
        return data;
    };

    return(
        <GlobalContext.Provider value={{token, setToken, email, setEmail, login, register, logout, getProfile}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider;