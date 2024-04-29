"use client";

import { useRouter } from "next/navigation";

const Contact = () => {
    const router = useRouter();
    const handleHomeNavigation = () => {
        router.push('/');
    }
    return (
        <>
            <h2>Contact Page</h2>
            <button onClick={handleHomeNavigation}>Home</button>
        </>
    )
};

export default Contact;