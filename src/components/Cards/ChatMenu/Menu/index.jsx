

const Menu = ({ label, key, img , change}) => {
  return (
    <div
      onChange={change}
      className="w-full cursor-pointer flex items-center justify-between px-10 h-[60px] bg-white hover:bg-slate-400 transition-all" 
      key={key}
    >
      <img
        className="w-[45px] h-[45px] rounded-full"
        src={img}
        alt="user-img"
      />
      <p className="text-xl text-green-300 font-medium">{label}</p>
    </div>
  );
};

export default Menu;
