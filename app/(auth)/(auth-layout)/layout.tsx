"use client"

import Link from "next/link";
import { ReactNode, useState } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
    const [inputVal, setInputVal] = useState("");
    return (
        <>
            <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
            <h2>Auth layout</h2>
            <Link href={`/login`}>Login</Link>
            <Link href={`/register`}>Register</Link>
            {children}
        </>
    )
};

export default AuthLayout;