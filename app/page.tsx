import Link from "next/link";

const Home = () => {
    return (
        <>
            <h2>Home page</h2>
            <Link href={`/about`}>About</Link>
            <Link href={`/contact`}>Contact</Link>
            <Link href={`/advanceDashBoard`}>Advanced dashboard</Link>
        </>
    )
};

export default Home;