import React, { Component } from 'react'
import AdIcon from "../../assets/images/ad.png"
import rightIcon from "../../assets/images/right.png"
import './Ad.scss'
import store from "../../redux/store"
import { adAction } from "../../redux/action/action"

export default class Ad extends Component {
    toParent = () => {
        // 通过父子组件传值
        //this.props.parent.getChildrenMsg(this, this.state.modal)

        // 通过redux控制变量
        store.dispatch(adAction(true))
    }
    render() {
        return (
            <div className="ad-container" onClick={this.toParent}>
                <img alt="adIcon" src={AdIcon}/>
                <span>钱包功能即将上线，敬请期待！</span>
                <img alt="rightIcon" src={rightIcon}/>
            </div>
        )
    }
}
