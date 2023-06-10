export default function Top({user}){
  return (
    <div className="w-full flex items-start px-10 flex-col bg-slate-400 py-1 sticky top-0 rounded-t-10">
        <h4 className="text-xl font-normal text-white">{user.name}</h4>
        <p className="text-sm text-slate-300">{user.time}</p>
    </div>
  )
}