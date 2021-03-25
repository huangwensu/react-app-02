import React, { Component } from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import banner from "../../assets/images/banner.png"
import './Banner.scss'
import TabOne from "../../components/TabOne/TabOne"
import TabTwo from "../../components/TabTwo/TabTwo"


const tabs = [
    { title: '可领任务' },
    { title: '我的任务' }
];
export default class Banner extends Component {
    state = {num: 1}
    test = () => {
        console.log("=============this",this)
    }
    render() {
        return (
            <div className="banner-container">
                <div className="banner-img">
                    <img alt="banner" onClick={this.test} src={banner}/>
                </div>
                <div>
                    <WhiteSpace></WhiteSpace>
                    <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
                        <div style={{ minHeight: '170px', backgroundColor: '#fff' }}>
                            <TabOne></TabOne>
                        </div>
                        <div style={{ minHeight: '270px', backgroundColor: '#fff' }}>
                            <TabTwo></TabTwo>
                        </div>
                    </Tabs>
                    <WhiteSpace></WhiteSpace>
                </div>
            </div>
        )
    }
}

