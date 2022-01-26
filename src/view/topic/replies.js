import React from "react";
import { Card, List, Comment, Avatar, Pagination } from "antd";
import { UserOutlined } from "@ant-design/icons";
import FormNow from "../../component/formnow";
import {Link} from "react-router-dom"
export default function Replies(props) {
  const { data, loading } = props;
  return (
    <Card title="评论列表" loading={loading} type="inner">
      <List
        dataSource={data}
        renderItem={(itemData) => {
          let { author, content, create_at } = itemData;
          return (
            <List.Item>
              <Comment
                author={author.loginname}
                avatar={
                  <Link to={`/user/${author.loginname}`}>
                    <Avatar
                      shape="square"
                      src={author.avatar_url}
                      icon={<UserOutlined />}
                    />
                  </Link>
                }
                content={
                  <div dangerouslySetInnerHTML={{ __html: content }}></div>
                }
                // datetime={FormNow(create_at)}
                datetime={<time>发布于：{FormNow(create_at)}</time>}
              ></Comment>
            </List.Item>
          );
        }}
        pagination={true}
      ></List>
    </Card>
  );
}
