import React from "react";
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

const SideMenu = () => {
  return (
    <div className="flex ">
      <div className="w-64 !bg-blue-500 text-black hidden md:block test-bar">
        <Sidebar aria-label="Default sidebar example ">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                Home
              </Sidebar.Item>

              <Sidebar.Item href="#" icon={HiShoppingBag}>
                Countries
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                About
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable}>
                Contact
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
};

export default SideMenu;
