import { eye, edit, chat, user, fileIcon, deleteIcon, smallCalendar, times, dots } from "@/assets";
import { Popover } from 'antd';
import { Link } from "react-router-dom";

export default function Files({ file, type }) {
  const { id, title = 'Student name' } = file;

  const editFile = (id) => {
    console.log(id);
  };

  const deleteFile = (id) => {
    console.log(id);
  };

  const seeFile = (file) => {
    console.log(file);
  };

  const links = (
    <div className="py-1 px-2">
      <Link to='#' className="flex items-center gap-[5px]" >
        <img src={user} alt="user" />
        <span className="text-base items-center">View profile</span>
      </Link>
      <Link to='#' className="flex items-center mt-4 gap-[5px]" >
        <img src={chat} alt="chat" />
        <span className="text-base items-center">View profile</span>
      </Link>
    </div>
  );

  return (
    <div className="flex-between px-7 h-[70px] bg-gray-50 border border-gray-100 rounded-10">
      <div className="flex-center gap-x-4">
        {type !== 'history' && <img src={fileIcon} alt="File" />}
        <p className="font-medium text-base leading-5 text-black">{title}</p>
      </div>

      {type === 'history' ?
        <div className="flex items-center gap-32">
          <div className="flex items-center gap-[10px]">
            <img className="mb-1" src={smallCalendar} alt="calendar" />
            <p className="font-medium leading-[19px]">Aug 19, 2022 09:00 AM</p>
          </div>

          <div className="flex items-center gap-[10px]">
            <img className="mb-1" src={times} alt="times" />
            <p className="font-medium leading-[19px]">24 minutes</p>
          </div>

          <Popover arrow={false} placement="bottomRight" content={links} trigger="click">
            <img className="cursor-pointer" src={dots} alt="dots" />
          </Popover>
        </div>
        :
        <div className="flex-center gap-x-8">
          <button onClick={seeFile}>
            <img src={eye} alt="Eye" />
          </button>

          <button onClick={() => editFile(id)}>
            <img src={edit} alt="Edit" />
          </button>

          <button onClick={() => deleteFile(id)}>
            <img src={deleteIcon} alt="Delete" />
          </button>
        </div>
      }
    </div>
  );
}
