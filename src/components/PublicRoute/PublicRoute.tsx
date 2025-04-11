import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { getCookie, CookieEnum } from '../../utilities/cookie';

interface PublicRouteProps {
    children: ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
    const isLoggedIn = getCookie(CookieEnum.token) !== undefined;

    if (isLoggedIn) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

export default PublicRoute;