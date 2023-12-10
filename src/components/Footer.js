import React from "react";
import { Layout, Row, Col, Space, Typography } from 'antd';
import small_logo from "../images/small_logo.png"

const { Footer } = Layout;
const { Title, Text } = Typography;

const FooterComponent = () => {
    return(
        <Footer style={{ backgroundColor: '#fff', padding: '20px 50px', color: '#fff' }}>
            <Row justify="space-between" align="top">
                <Col>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <img src={small_logo} style={{height: '20vh'}} alt="Logo"/>
                    </div>
                </Col>
                <Col>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <Space direction="vertical">
                            <Title level={4} >Document Navigation</Title>
                            <Text>Home</Text>
                            <Text>About</Text>
                            <Text>Menu</Text>
                            <Text>Reservations</Text>
                            <Text>Order Online</Text>
                            <Text>Login</Text>
                        </Space>
                    </div>
                </Col>
                <Col>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <Space direction="vertical">
                            <Title level={4} >Contact</Title>
                            <Text>Address</Text>
                            <Text>Phone Number</Text>
                            <Text>Email</Text>
                        </Space>
                    </div>
                </Col>
                <Col>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <Space direction="vertical">
                            <Title level={4} >Social Media Links</Title>
                            <Text>Facebook</Text>
                            <Text>Twitter</Text>
                            <Text>Instagram</Text>
                        </Space>
                    </div>
                </Col>
            </Row>
        </Footer>
    )
}

export default FooterComponent;