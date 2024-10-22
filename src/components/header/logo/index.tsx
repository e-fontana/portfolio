import Link from "next/link"

export const Logo = () => {
    return (
        <Link href='/'>
            <h1 className="flex items-center justify-center text-2xl">
                <span className="text-green-600 font-extrabold">{'<'}</span>
                <span className="font-extrabold pr-2">{'Eduardo Fontana'}</span>
                <span className="text-green-600 font-extrabold">{'/>'}</span>
            </h1>
        </Link>
    )
}