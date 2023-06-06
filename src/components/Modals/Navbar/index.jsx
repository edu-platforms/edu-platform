import React, { useContext } from "react";
import { ModalContext } from "@/context";
import { Drawer, Button, Dropdown } from "antd";
import { Primary } from "@/UI";
import { arrowRight } from "@/assets"
import { NavLink } from "react-router-dom";

export default function MobileNavbar({ links, close, status, items }) {
    const { bar } = useContext(ModalContext);

    return (
        <Drawer className="w-full" open={bar} onClose={close} footer={null}>
            {status === "student" ? (
                <Dropdown
                    menu={{
                        items,
                        onClick:close,
                    }}
                    placement="bottomLeft"
                    trigger={['click']}
                    className="cursor-pointer"
                >
                    <Button
                        block
                        type="primary"
                        htmlType="submit"
                        className="bg-green flex items-center my-3 h-[50px]"
                    >
                        <img
                            className="dash-card-thumb w-8 h-8 mr-3"
                            src={"https://picsum.photos/id/237/200/300"}
                            alt="Person"
                        />
                        <h3>Saidalixon</h3>
                    </Button>
                </Dropdown>
            ) : status === "user" ? (
                <>
                    <NavLink to={`/sign-in`}>
                        <Button
                            block
                            size="large"
                            shape="round"
                            type="primary"
                            ghost
                            htmlType="button"
                        >
                            Login
                        </Button>
                    </NavLink>
                    <NavLink to={`/sign-up/student`}>
                        <Primary rounded htmlType="button" className="w-full my-3">Sign Up</Primary>
                    </NavLink>
                </>
            ) : (
                <Dropdown
                    menu={{
                        items,
                        onClick:close,
                    }}
                    placement="bottomLeft"
                    trigger={['click']}
                    className="cursor-pointer"
                >
                    <Button
                        block
                        type="primary"
                        htmlType="submit"
                        className="bg-green flex items-center my-3 h-[50px]"
                    >
                        <img
                            className="dash-card-thumb w-8 h-8 mr-3"
                            src={"https://picsum.photos/id/237/200/300"}
                            alt="Person"
                        />
                        <h3>Tutor Alex</h3>
                    </Button>
                </Dropdown>
            )}
            <>
                {links.map(({ key, label }) => (
                    <NavLink to={`/${label}`} key={key}>
                        <Button
                            block
                            size="large"
                            type="primary"
                            htmlType="submit"
                            className="bg-[#E4E6E8] text-black my-3 flex justify-between items-center"
                            onClick={() => close()}
                        >

                            <h3>{key}</h3>
                            <img src={arrowRight} alt="arrow right" />

                        </Button>
                    </NavLink>
                ))}
            </>
        </Drawer>
    );
}
