import React, {useState} from "react";
import {Link} from "react-router-dom";
import {LaptopOutlined, UserOutlined} from '@ant-design/icons'
import type {MenuProps} from 'antd';
import {Breadcrumb, Layout, Menu, theme} from 'antd'
import {Header} from "../Header/Header";

interface LayoutComponentProps {
    children: JSX.Element
}

const items2 = [
    {
        label: 'My Profile',
        key: 'my-profile',
        icon: <UserOutlined />,
        children: [
            {
                key: 'profile',
                label: <Link to="/profile">Profile</Link>
            },
            {
                key: 'dialogs',
                label: <Link to="/dialogs">Messages</Link>
            }
        ]
    },

    {
        label: 'Developers',
        key: 'developers',
        icon: <LaptopOutlined />,
        children: [
            {
                key: 'users',
                label: <Link to="/users">Users</Link>
            },
            {
                key: 'chat',
                label: <Link to="/chat">Chat</Link>
            }
        ]
    }
]

export const LayoutComponent: React.FC<LayoutComponentProps> = ({children}) => {
    const {token: {colorBgContainer},} = theme.useToken()
    const {Content, Footer, Sider} = Layout
    const [current, setCurrent] = useState('my-profile');

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key)
    }

    return (
        <Layout>
            <Header />
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout
                    style={{
                        padding: '24px 0'
                    }}
                >
                    <Sider
                        style={{
                            background: colorBgContainer,
                        }}
                        width={200}
                    >
                        <Menu
                            onClick={onClick}
                            mode="inline"
                            style={{
                                height: '100%',
                            }}
                            items={items2}
                        />
                    </Sider>
                    <Content
                        style={{
                            padding: '0 24px',
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >

                        {children}

                    </Content>
                </Layout>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Mativ Inc. ©2023 Created by mativ
            </Footer>
        </Layout>
    )
}