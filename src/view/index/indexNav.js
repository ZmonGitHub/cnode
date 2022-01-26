import React from "react";
import { indexNav, types } from "../../router";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";

function IndexNav(props) {
  const { search } = useLocation();
  const { tab } = qs.parse(search.slice(1));


  const activeIndex = tab === undefined ? 0 : types.indexOf(tab);

  return (
    <Menu className="index_nav" mode="horizontal" selectedKeys={[activeIndex+'']}>
      {indexNav.map((item, index) => {
        return (
          <Menu.Item key={index}>
            <Link to={item.to}>{item.txt}</Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
}
export default IndexNav;
