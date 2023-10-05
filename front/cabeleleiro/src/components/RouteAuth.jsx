import { Route, Navigate, useNavigate } from "react-router-dom";


const PrivateRoute = ({component: element, isAuthenticated, ...rest}) => {

    return (
        <Route
            {...rest}
            render={(props) => 
                isAuthenticated ? (
                    <element {...props} />
                ) : (
                    <Navigate to="/login" />
                )
            }
        />  
    )
    
}


export default PrivateRoute


