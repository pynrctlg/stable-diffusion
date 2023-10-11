export default function SubTitle({children,addClass}){
    return(
        <div className={`${addClass} sm:text-xl text-lg`}>
            {children}
        </div>
    )
}