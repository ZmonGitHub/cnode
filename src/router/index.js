import React from "react";
import IndexPage from "../view/index/index";
import TopicPage from "../view/topic";
import UserPage from "../view/user";
import GetStartPage from "../view/getstart";
import AboutPage from "../view/about";
import Page404 from "../view/404";
import qs from "qs"; // 解决search格式化问题，可以把字符串转对象，或者对象转字符串，parse转对象，stringify转字符串

const types = ["all", "good", "share", "ask", "job", "dev"];

const route = [
  {
    path: "/",
    exact: true,
    render(props) {
  
      const {
        location: { search },
      } = props;
      // const {search} = location
      // console.log(qs.parse(search.slice(1)))
      const { tab, page } = qs.parse(search.slice(1));
      if (
        (tab === undefined && page === undefined) ||
        (types.includes(tab) && (page === undefined || page > 0))
      ) {
        return <IndexPage {...props}></IndexPage>;
      } else {
        return <Page404 {...props}></Page404>;
      }
    },
  },
  {
    path: "/topic/:id",
    exact: true,
    render(props) {
      return <TopicPage {...props}></TopicPage>;
    },
  },
  {
    path: "/about",
    exact: true,
    render(props) {
      return <AboutPage {...props}></AboutPage>;
    },
  },
  {
    path: "/user/:loginname",
    exact: true,
    render(props) {
      return <UserPage {...props}></UserPage>;
    },
  },
  {
    path: "/getstart/:id",
    exact: true,
    render(props) {
      return <GetStartPage {...props}></GetStartPage>;
    },
  },
  {
    path: "*",
    exact: false,
    render(props) {
      return <Page404 {...props}></Page404>;
    },
  },
];
const nav = [
  {
    txt: "首页",
    to: "/",
  },
  {
    txt: "新手入门",
    to: "/getstart",
  },
  {
    txt: "关于",
    to: "/about",
  },
];

const indexNav = [
  {
    txt: "全部",
    to: "/?tab=all",
  },
  {
    txt: "精华",
    to: "/?tab=good",
  },
  {
    txt: "分享",
    to: "/?tab=share",
  },
  {
    txt: "问答",
    to: "/?tab=ask",
  },
  {
    txt: "招聘",
    to: "/?tab=job",
  },
  {
    txt: "客户端测试",
    to: "/?tab=dev",
  },
];
export { route, nav, indexNav,types };
