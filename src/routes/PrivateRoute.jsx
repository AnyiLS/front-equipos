import React from "react";
import PropTypes from "prop-types";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ isLoggedIn, component, path }) => {
    const Component = component;

    return (
        <Route
            path={path}
            element={() => {
                return (
                    <React.Fragment>
                        {isLoggedIn ? <Component /> : <Navigate to="/login" replace={true} />}
                    </React.Fragment>
                );
            }}
        />
    );
};

PrivateRoute.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.node.isRequired,
    path: PropTypes.string.isRequired
};

export default PrivateRoute;
