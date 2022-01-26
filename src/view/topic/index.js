import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTopicsDetails } from "../../store/action";
import { message } from "antd";
import TopicDetail from "./detail";
import Replies from "./replies";
function TopicPage() {
  console.log("aaaaaaaa");
  let { id } = useParams();
  const getData = useTopicsDetails();
  useEffect(() => {
    getData(id);
  }, [id]);
  const { loading, data, errorMessage, isError } = useSelector((state) => {
    return state.topic;
  });
  if (isError) {
    message.error(errorMessage);
  }
  // console.log( "============");

  return (
    <div id="topic">
      <Fragment>
        <TopicDetail data={data} loading={loading}></TopicDetail>
        <Replies data={data.replies} loading={loading}></Replies>
      </Fragment>
    </div>
  );
}
export default TopicPage;
