import React, { Component } from 'react'
import {List, InputItem, WhiteSpace, Button } from 'antd-mobile'
import Header from "../../components/Header/Header"

export default class Login extends Component {

    loginHandle = () => {
        const account = this.account.state.value
        const password = this.password.state.value
        console.log(account, password)
        
    }

    render() {
        return (
            <div className="login-container">
                <Header title="用户登录"></Header>
                <List>
                    <InputItem
                        clear
                        placeholder="请输入账号"
                        ref={c => this.account = c}
                    >账号</InputItem>
                    <InputItem
                        clear
                        placeholder="请输入密码"
                        ref={c => this.password = c}
                    >密码</InputItem>
                </List>
                <Button className="button" onClick={this.loginHandle}>登录</Button><WhiteSpace />
            </div>
        )
    }
}
