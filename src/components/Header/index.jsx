import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { logo, bar, account, crown, heart, help, feedback, logout } from "@/assets";
import { ModalContext } from "@/context";
import { MobileNavbar } from "@/components";
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Select } from "antd";
import { question, calendar, notifications } from "@/assets";

export default function Header({ links, status }) {

  const { barShow, barClose } = useContext(ModalContext);

  const items = [
    {
      key: '1',
      label: (
        <NavLink to="settings"  className="ml-1" >
          Account settings
        </NavLink>
      ),
      icon: <img src={account} alt="menu_icon"/>,
    },
    {
      key: '2',
      label: (
        <NavLink to="subscriptions" className="ml-1">
          Subscriptions
        </NavLink>
      ),
      icon: <img src={crown} alt="menu_icon"/>,
    },
    {
      key: '3',
      label: (
        <NavLink to="favorites" className="ml-1">
          Favorites
        </NavLink>
      ),
      icon: <img src={heart} alt="menu_icon"/>,
    },
    {
      key: '4',
      label: (
        <NavLink to="help" className="ml-1">
          Help
        </NavLink>
      ),
      icon: <img src={help} alt="menu_icon"/>,
    },
    {
      key: '5',
      label: (
        <NavLink to="feedback" className="ml-1">
          Feedback
        </NavLink>
      ),
      icon: <img src={feedback} alt="menu_icon"/>,
    },
    {
      key: '6',
      label: (
        <NavLink to="/" className="ml-1">
          Logout
        </NavLink>
      ),
      icon: <img src={logout} alt="menu_icon"/>,
    },
  ]


  return (
    <header className="flex-between">
      <Link to="/" className="xl:w-[20%] w-[40%]">
        <img className="" src={logo} alt="Logo" />
      </Link>

      <div className="w-[75%] xl:flex-between lg:flex-between hidden">
        <ul className="flex-center sm:gap-x-7 md:gap-x-10 text-sm">
          {links.map(({ key, label }) => (
            <li key={key}>
              <NavLink
                to={`/${label}`}
                className={({ isActive }) => `${isActive && `underline`}`}
              >
                {key}
              </NavLink>
            </li>
          ))}
        </ul>
        {status === "student" ? (
          <div className="flex-center gap-x-12 ml-auto">
            <img src={question} alt="Question" />
            <img src={calendar} alt="Calendar" />
            <img src={notifications} alt="Notifications" />
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomLeft"
              trigger={['click']}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-x-2">
                <img
                  className="dash-card-thumb w-8 h-8"
                  src={"https://picsum.photos/id/237/200/300"}
                  alt="Person"
                />
                <h3>Saidalixon</h3>
                <DownOutlined />
              </div>
            </Dropdown>
          </div>

        ) : status === "user" ? (
          <div className="flex-center sm:gap-x-7 md:gap-x-5 text-sm">
            <Select
              defaultValue="english"
              style={{
                width: 145
              }}
              bordered={false}
              options={[{
                value: 'english',
                label: 'English-USD $',
              },]}
            />
            <NavLink to={`/sign-in`}>
              <Button shape="round" size="large">Log in</Button>
            </NavLink>
            <NavLink to={`/sign-up/student`}>
              <Button shape="round" size="large">Sign up</Button>
            </NavLink>
          </div>
        ) : (
          <div className="flex-center gap-x-12 ml-auto">
            <img src={question} alt="Question" />
            <img src={calendar} alt="Calendar" />
            <img src={notifications} alt="Notifications" />
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomLeft"
              trigger={['click']}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-x-2">
                <img
                  className="dash-card-thumb w-8 h-8"
                  src={"https://picsum.photos/id/237/200/300"}
                  alt="Person"
                />
                <h3>Tutor Alex</h3>
                <DownOutlined />
              </div>
            </Dropdown>
          </div>
        )}
      </div>

      {/* btn icon that appear in mobile and tablet */}
      <img onClick={() => barShow()} src={bar} alt="bar" className="xl:hidden lg:hidden md:block" />
      
      {/* drawer navbar that appear when click the bar btn in mobile and tablet */}
      <MobileNavbar links={links} close={barClose} status={status} items={items}/>
    </header>
  );
}
