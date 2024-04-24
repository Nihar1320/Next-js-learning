import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <h2>Auth layout</h2>
            {children}
        </>
    )
};

export default AuthLayout;