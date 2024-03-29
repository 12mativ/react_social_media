import {Link} from "react-router-dom";
import React from "react";
import {Avatar, Button, Col, Layout, Menu, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getIsAuthSelector} from "../../redux/auth/auth-selector";
import {UserOutlined} from "@ant-design/icons";
import {logout} from "../../redux/auth/auth-reducer";

const items1 = [
    {
        label: <Link to="/users">Developers</Link>,
        key: 'developer'
    }
]

export const Header: React.FC = () => {
    const { Header } = Layout;

    const dispatch = useDispatch()
    const isAuth = useSelector(getIsAuthSelector)
    // const login = useSelector(getLoginSelector)
    const logoutFunc = () => {
        dispatch(logout())
    }

    return (
        <Header className="header">
            <Row>
                <Col span={18}>
                    <Menu theme="dark" mode="horizontal" items={items1}/>
                </Col>

                {isAuth
                    ? <>
                        <Col span={1}>
                            <Avatar style={{ backgroundColor: '#5055b0' }} icon={<UserOutlined />} />
                        </Col>
                        <Col span={5}>
                            <Button onClick={logoutFunc}>Log out</Button>
                        </Col>
                    </>
                    : <Col span={6}>
                        <Link to={'/login'}>
                            <Button>Log in</Button>
                        </Link>
                    </Col>

                }
            </Row>


        </Header>
        /*<header className={classes.header}>
            <div className={classes.header_container}>
                <NavLink to={'/profile'}>
                    <img src="data:image/jpeg;base64,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" alt=""/>
                </NavLink>
                <div className={classes.login_link}>
                    {isAuth
                        ? <div>
                                <NavLink className={classes.login_name} to={'/profile'}>{login}</NavLink>
                                <button className={clsx(classes.login_btn, classes.red_btn, 'btn')} onClick={logout}>Log out</button>
                            </div>
                        : <NavLink to={'/login'}>
                            <button className={`${classes.login_btn} btn`}>Log in</button>
                        </NavLink>
                    }
                </div>
            </div>
        </header>*/
    );
}