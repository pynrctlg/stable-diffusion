export default function Paragraph({children,addClass}) {
    return (
        <div>
            <p className={`${addClass} md:text-base text-sm`}>{children}</p>
        </div>
    )
}