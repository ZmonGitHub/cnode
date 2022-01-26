import React from "react";
import { route } from "./router/index";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import Header from "./component/header";
import Footer from "./component/footer";

import "./static/css/index.less";
export default function App() {
  return (
    <Layout className="page">
      {/* <Button>按钮</Button> */}
      <Header></Header>
      <Layout.Content>
        <div className="wrap">
          <Switch>
            {route.map((itemData, index) => {
              return (
                <Route
                  key={index}
                  path={itemData.path}
                  exact={itemData.exact}
                  render={(props) => {
                    props.username = "kkb";
                    return itemData.render(props);
                  }}
                ></Route>
              );
            })}
          </Switch>
        </div>
      </Layout.Content>
      <Footer></Footer>
    </Layout>
  );
}
