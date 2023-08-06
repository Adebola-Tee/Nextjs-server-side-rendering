import Link from 'next/link';
export default function Navbar(){
    return (
        <div>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/about/someone'>Someone</Link>
            <Link href='/about/us'>Us</Link>
            <Link href='/listofposts'>Posts</Link>
        </div>
    )
}