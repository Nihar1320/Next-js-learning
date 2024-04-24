import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Nihar's about page",
    description: "This is the about page of my app"
}

const About = () => {
    return (
        <>
            <h2>About page</h2>
            <Link href={`/`}>Home</Link>
        </>
    )
};

export default About;