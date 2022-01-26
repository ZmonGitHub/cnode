import React, { useEffect } from "react";
import { Card } from "antd";
import { useParams } from "react-router-dom";
import { useUser } from "../../store/action";
import { useSelector } from "react-redux";
import TopicsList from "../../component/topicslist";
import { Avatar, Breadcrumb } from "antd";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import FormNow from "../../component/formnow";

function UserPage() {
  const { loginname } = useParams();
  const getData = useUser();
  const { loading, data } = useSelector((state) => {
    return state.user;
  });
  const {
    recent_replies = [],
    recent_topics = [],
    avatar_url,
    create_at,
    githubUsername,
    score,
  } = data;
  useEffect(() => {
    //   函数组件中没有this
    getData(loginname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginname]);
  //   console.log(loading,data);
  //   console.log(loginname);
  return (
    <div className="user_page">
      {/* 用户详情 */}
      <Card
        loading={loading}
        type="inner"
        title={
          <Breadcrumb>
            <Breadcrumb.Item href="/">
              <HomeOutlined /> 主页
            </Breadcrumb.Item>
          </Breadcrumb>
        }
      >
        <Avatar size={64} icon={<UserOutlined />} src={avatar_url} />{" "}
        <span>{githubUsername} </span>
        <p>{score}积分</p>
        <p>注册时间{FormNow(create_at)}</p>
      </Card>
      <Card loading={loading} type="inner" title="最近创建的话题">
        <TopicsList dataSource={recent_topics} loading={loading}></TopicsList>
      </Card>
      <Card loading={loading} type="inner" title="最近参与的话题">
        <TopicsList dataSource={recent_replies} loading={loading}></TopicsList>
      </Card>
    </div>
  );
}

export default UserPage;
