const Menu = ({ label, key, img, change }) => {
  return (
    <div onClick={change(1)} className="chat-menu-item" key={key}>
      <img className="w-[45px] h-[45px] rounded-full" src={img} alt="user-img" />
      <div className="mr-auto ml-2">
        <p className="text-xl text-gray-500 font-medium">{label}</p>
      </div>
      <div className="flex flex-col items-end justify-between h-11/12">
        <span className="right-5 text-sm text-gray-500">08:10 PM</span>
        <span className="w-[25px] h-[20px] bg-red-700 rounded-full text-sm text-white flex justify-center items-center">
          1
        </span>
      </div>
    </div>
  )
}

export default Menu
