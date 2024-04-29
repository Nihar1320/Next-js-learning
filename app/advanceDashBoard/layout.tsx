import { ReactNode } from "react";

const AdvanceDashboardLayout = ({
    children,
    notifications,
    revenue,
    user,
    login
}: {
    children: ReactNode;
    notifications: ReactNode;
    revenue: ReactNode;
    user: ReactNode;
    login: ReactNode
}) => {
    const isLoggedIn = true;
    return (
        <>
            {
                isLoggedIn ? (
                    <>
                        {children}
                        {notifications}
                        {revenue}
                        {user}
                    </>
                ) : (
                    <>
                        {login}
                    </>
                )
            }
        </>
    );
};

export default AdvanceDashboardLayout;
