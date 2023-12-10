import React from "react";
import { Row, Col, Space } from "antd";
import littlelemon_logo from "../images/littlelemon_logo.png";

const Nav = () => {
  return (
    <Row
      align="middle"
      justify="space-between"
      style={{ padding: "10px 50px", borderBottom: "1px solid #f0f0f0" }}
    >
      <Col>
        <a href="/">
          <img
            src={littlelemon_logo}
            alt="Little Lemon Logo"
            style={{ height: "50px" }}
          />
        </a>
      </Col>
      <Col>
        <Space size="large">
          <a
            href="/"
            style={{ color: "#495e57", fontWeight: "bold", fontSize: "18px" }}
          >
            Home
          </a>
          <a
            href="/About"
            style={{ color: "#495e57", fontWeight: "bold", fontSize: "18px" }}
          >
            About
          </a>
          <a
            href="/Menu"
            style={{ color: "#495e57", fontWeight: "bold", fontSize: "18px" }}
          >
            Menu
          </a>
          <a
            href="/Booking"
            style={{ color: "#495e57", fontWeight: "bold", fontSize: "18px" }}
          >
            Reservations
          </a>
          <a
            href="/"
            style={{ color: "#495e57", fontWeight: "bold", fontSize: "18px" }}
          >
            Order Online
          </a>
          <a
            href="/"
            style={{ color: "#495e57", fontWeight: "bold", fontSize: "18px" }}
          >
            Login
          </a>
        </Space>
      </Col>
    </Row>
  );
};

export default Nav;
