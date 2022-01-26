import React from "react";
import { Affix, Layout, Row, Col, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import {nav} from "../router/index"
function Header(props) {
    let pathName = useLocation().pathname

    let activeIndex = nav.findIndex((navitem)=>{
       return pathName === navitem.to
    })

  return (
    <Affix offsetTop={0}>
      <Layout.Header id="header">
        <div className="wrap">
          <Row>
            <Col 
            xs={6}
            sm={4}
            md={2}
            >
              <h1 className="logo">
                <Link to="/">Logo</Link>
              </h1>
            </Col>
            <Col 
            xs={18}
            sm={20}
            md={22}
            >
              {/* <p>头部到啊很难过</p> */}
              <Menu mode="horizontal" theme="dark" selectedKeys={[activeIndex+'']}>
              {
                nav.map((data,index)=>{
                    return <Menu.Item key={index}> <Link to={data.to}>{data.txt}</Link>  </Menu.Item>
                })
              }
                
              </Menu>
            </Col>
          </Row>
        </div>
      </Layout.Header>
    </Affix>
  );
}
export default Header;
