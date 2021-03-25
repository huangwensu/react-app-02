import React, { Component } from 'react'
import { Button, WhiteSpace } from 'antd-mobile';
import { Link } from "react-router-dom"
import "./TabTwo.scss"
import NoContent from "../../assets/images/no-content.png"

export default class TabTwo extends Component {
    render() {
        return (
            <div className="tab-two-content">
                <div className="tab-login">
                    <img style={{width: 120, height: 120}} src={NoContent}/>
                    <div className="login-text">登录后，您领取的任务可以在这里查看</div>
                </div>
                <Link to={'/login'}>
                    <Button className="button">登录</Button><WhiteSpace />
                </Link>
            </div>
        )
    }
}
