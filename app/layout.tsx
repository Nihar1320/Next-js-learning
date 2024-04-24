import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Nihar's next app",
    description: "This is about learning NEXT js"
}

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <div style={{ background: "cyan", padding: "1rem" }}>
                    Header
                </div>
                {children}
                <div style={{ background: "cyan", padding: "1rem" }}>
                    Footer
                </div>
            </body>
        </html>
    )
};

export default RootLayout;