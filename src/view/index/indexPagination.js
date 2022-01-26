import React from "react";
import { Pagination } from "antd";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import qs from "qs";
export default function IndexPagination(props) {
  const { search } = useLocation();
  const { page = 1, tab = "all" } = qs.parse(search.slice(1));

  return (
    <div className="index-pagination">
      <Pagination
        defaultCurrent={1}
        current={+page}
        defaultPageSize={20}
        total={1000}
        // onChange={(page)=>console.log(page)}
        itemRender={(page, type) => {
          switch (type) {
            case "page":
              return <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>;
            case "prev":
              return <Link to={`/?tab=${tab}&page=${page}`}>{"<"}</Link>;
            case "next":
              return <Link to={`/?tab=${tab}&page=${page}`}>{">"}</Link>;
            default:
            // ...跳转到上一组或者下一组
              return <Link to={`/?tab=${tab}&page=${page}`}>{"..."}</Link>;
          }
        }}
      ></Pagination>
    </div>
  );
}
