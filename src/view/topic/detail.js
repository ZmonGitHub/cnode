import React, { Fragment } from "react";
import { Card } from "antd";
import TopicTag from "../../component/topicTag";
import {Link} from "react-router-dom"
import FormNow from "../../component/formnow"
export default function TopicDetail(props) {
  const { data, loading } = props;
  const { author, content, create_at, good, top, tab, title, visit_count } =
    data;

  return (
    <Card
      
      bordered
      type="inner"
      loading={loading}
      title={
        <Fragment>
          <h1>
            {" "}
            <TopicTag tab={top ? "top" : good ? "good" : tab}></TopicTag>
            {title}
          </h1>
            <p>- 作者:<Link to={`/user/${author.loginmane}`}></Link>
               - 创建时间: {FormNow(create_at)}-浏览人数:{visit_count}
            </p>
        </Fragment>
      }
    >
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
    </Card>
  );
}
