
export default function Title({children, addClass}){
  return (
    <div className={`font-bold font-dancing ${addClass}`}>{children}</div>
  )
};