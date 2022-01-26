import axios from "axios";
import { useDispatch } from "react-redux";

const http = axios.create({
  baseURL: "https://cnodejs.org/api/v1",
});
// 异步获取主题列表数据
function useTopicsList() {
  const dispatch = useDispatch();
  return function ({ page = 1, tab = "all", limit = 20, mdrender = true }) {
    dispatch({
      type: "topics_loading",
    });
    http
      .get(
        `/topics?page=${page}&tab=${tab}&limit=${limit}&mdrender=${mdrender}`
      )
      .then((res) => {
        dispatch({
          type: "topics_loadover",
          dataSource: res.data.data,
        });
      });
  };
}

// 异步获取主题详情数据
function useTopicsDetails() {
  const dispatch = useDispatch();
  return function (id) {
    dispatch({
      type: "topic_loading",
    });
    http
      .get(`/topic/${id}`)
      .then((res) => {
        dispatch({
          type: "topic_loadover",
          data: res.data.data,
        });
      })
      .catch((res) => {
        dispatch({
          type: "error",
          errorMessage: res.response.data.error_msg,
        });
      });
  };
}

// 异步获取用户详情数据
function useUser() {
  const dispatch = useDispatch();
  return function (loginname) {
    dispatch({
      type: "user_loading",
    });
    http.get(`/user/${loginname}`).then((res) => {
      dispatch({
        type: "user_loadover",
        data: res.data.data,
      });
    });
  };
}

export { useTopicsList, useTopicsDetails, useUser };
