import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
//     const { loading, isAuthenticated, user } = useSelector((state) => state.user);

//     return (
//         <Fragment>
//             {loading === false && (
//                 <Route
//                     {...rest}
//                     render={(props) => {
//                         if (isAuthenticated === false) {
//                             return (<Navigate to="/login" replace={true} />);
//                         }

//                         if (isAdmin === true && user.role !== "admin") {
//                             return (<Navigate to="/login" replace={true} />);
//                         }

//                         return <Component {...props} />;
//                     }}
//                 />
//             )}
//         </Fragment>
//     );
// };
const ProtectedRoute = ({ isAdmin, element: Element, ...rest }) => {

    const { loading, isAuthenticated, user } = useSelector(state => state.user);
    // console.log(isAdmin)
    // return (
    //     <Fragment>
    //         {loading === false && (isAuthenticated) ? <Dashboard /> : <Navigate to="/login" />}
    //     </Fragment>
    // )
    return (!loading && isAuthenticated && (isAdmin === false || (isAdmin && user.role === 'admin'))) ? <Outlet /> : <Navigate to="/login" />

}

export default ProtectedRoute;