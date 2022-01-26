import React from "react";
import { Tag } from "antd";
function setTag(tab) {
  switch (tab) {
    case "top":
      return <Tag color="#87d068" className="topic_tag">置顶</Tag>;
    case "good":
      return <Tag color="#80bd01" className="topic_tag">精华</Tag>;
    case "share":
      return <Tag color="#f50" className="topic_tag">分享</Tag>;
    case "ask":
      return <Tag color="#f50" className="topic_tag">问答</Tag>;
    case "job":
      return <Tag color="#f50" className="topic_tag">招聘</Tag>;
    case "dev":
      return <Tag color="#f50" className="topic_tag">测试</Tag>;
    default:
      return null
  }
}

export default function TopicTag(props) {
  const { tab } = props;
  return setTag(tab);
}
