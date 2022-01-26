import React from "react";
import { List, Col, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import TopicTag from "./topicTag";
import FormNow from "./formnow"


function TopicsList(props) {
  const { loading, dataSource } = props;

  return (
    <List
      className="topics_list"
      loading={loading}
      dataSource={dataSource}
      renderItem={(data, index) => {
        const {
          author: { avatar_url, loginname },
          last_reply_at,
          good,
          top,
          tab,
          title,
          id,
        } = data;
        return (
          <List.Item>
            {/* List.item可以直接用col */}
            <Col xs={2} md={1}>
              <Link to={`/user/${loginname}`}>
                <Avatar
                  shape="square"
                  src={avatar_url}
                  icon={<UserOutlined />}
                />
              </Link>
            </Col>
            <Col xs={22} md={19}>
              <TopicTag tab={top ? "top" : good ? "good" : tab}></TopicTag>
              <Link to={`/topic/${id}`}>{title}</Link>
            </Col>
            <Col xs={0} md={4}>
              {FormNow(last_reply_at)}
              {/* {dayjs(last_reply_at).format("YYYY年MM月DD日")} */}
            </Col>
          </List.Item>
        );
      }}
    ></List>
  );
}
export default TopicsList;
