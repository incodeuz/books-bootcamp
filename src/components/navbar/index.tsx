import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Dropdown, Space } from "antd";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const items: MenuProps["items"] = [
    {
      label: <p>Account</p>,
      key: "0",
    },
    {
      label: <p>Settings</p>,
      key: "1",
    },
    {
      label: <p>Log out</p>,
      key: "2",
    },
  ];

  return (
    <div className="container-box flex items-center justify-between">
      <h1 className="text-[26px] font-semibold select-none font-rotterburg text-[#C9AC8C]">
        Badiiyat
      </h1>
      <div className="flex items-center gap-[43px]">
        <NavLink
          to={"/"}
          className="dark:text-white font-crimson font-semibold text-[19px] py-[28px] border-b-[3px] border-t-[3px] border-t-transparent border-b-transparent hover:border-b-[#C9AC8C] duration-150 cursor-pointer"
        >
          Bosh sahifa
        </NavLink>
        <NavLink
          to={"/authors"}
          className="dark:text-white font-crimson font-semibold text-[19px] py-[28px] border-b-[3px] border-t-[3px] border-t-transparent border-b-transparent hover:border-b-[#C9AC8C] duration-150 cursor-pointer"
        >
          Adiblar
        </NavLink>
        <NavLink
          to={"/books"}
          className="dark:text-white font-crimson font-semibold text-[19px] py-[28px] border-b-[3px] border-t-[3px] border-t-transparent border-b-transparent hover:border-b-[#C9AC8C] duration-150 cursor-pointer"
        >
          Barcha kitoblar
        </NavLink>
        <NavLink
          to={"/maqolalar"}
          className="dark:text-white font-crimson font-semibold text-[19px] py-[28px] border-b-[3px] border-t-[3px] border-t-transparent border-b-transparent hover:border-b-[#C9AC8C] duration-150 cursor-pointer"
        >
          Maqolalar
        </NavLink>
      </div>
      <div>
        <Dropdown
          menu={{ items }}
          trigger={["click"]}
          className="cursor-pointer"
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Avatar size="large" icon={"A"} />
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
