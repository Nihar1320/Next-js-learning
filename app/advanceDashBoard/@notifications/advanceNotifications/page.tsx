"use client"

import { useRouter } from "next/navigation";

const AdvanceNotifications = () => {
    const router = useRouter();
    return (
        <>
            <h2>Advance notifications</h2>
            <button onClick={() => router.back()}>Back</button>
        </>
    )
};

export default AdvanceNotifications;