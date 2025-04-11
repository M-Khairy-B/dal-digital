import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { getCookie, CookieEnum } from '../../utilities/cookie';

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const isLoggedIn = getCookie(CookieEnum.token) !== undefined;

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};

export default PrivateRoute;
