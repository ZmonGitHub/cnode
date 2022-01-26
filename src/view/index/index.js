import React, { useEffect } from "react";
import IndexNav from "./indexNav";
import TopicsList from "../../component/topicslist";
import { useSelector } from "react-redux";
import { useTopicsList } from "../../store/action";
import qs from "qs"
import { useLocation } from "react-router-dom";
import IndexPagination from "./indexPagination";
function IndexPage(props) {

  const getDataSource = useTopicsList();
  const {search} = useLocation()
  const {tab="all",page=1} = qs.parse(search.slice(1))
  useEffect(() => {
    getDataSource({tab,page}); // 不允许在副作用内直接使用use
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab,page]);
  const { loading, dataSource } = useSelector((state) => state.topics);
  // useEffect容易死循环
  return (
    <div>
      <IndexNav></IndexNav>
      <TopicsList dataSource={dataSource} loading={loading}></TopicsList>
      <IndexPagination></IndexPagination>
    </div>
  );
}

export default IndexPage;
