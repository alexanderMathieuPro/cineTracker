import { Navigate } from "react-router-dom"
import Header from "./Header";
const ProtectedRoutes = ({children}) => {
    if(!localStorage.getItem('token')) { 
        return <Navigate to={"/login"} replace />
    }
    return(
            <>
                <Header />
                {children}
            </>
    )
}
export default ProtectedRoutes;