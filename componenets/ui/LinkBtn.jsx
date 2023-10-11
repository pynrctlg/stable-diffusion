import Link from "next/link"
export default function LinkBtn({children,addClass,addLink}) {

    return (
        <div>
            <Link href={`${addLink}`} className={`${addClass} btn-primary inline-block ml-0 mr-auto text-xs sm:text-base`}>{children}</Link>
        </div>
    )
}