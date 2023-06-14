export default function Message({ message, postion }) {
  return (
    <div
      className={`max-w-[400px] min-w-[60px] border p-2 flex items-center justify-center rounded-10 my-2 box-border mx-2 ${
        postion === 0 ? "ml-auto bg-slate-300 shadow-xl" : "mr-auto bg-white shadow-xl"
      }`}
    >
      <div className="flex justify-center items-center">
    <p className="text-xl font-normal text-slate-900 text-start px-1">{message}</p>
  </div>
    </div>
  );
}
