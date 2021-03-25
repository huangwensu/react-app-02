import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './TabOne.scss'


export default class TabOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [{
                id: 1,
                name: '国家基本公共卫生服务项目',
                price: '10',
                desc: '完善居民信息完善居民信息完善居民信息完善居民信息民信息完善居民'
            },{
                id: 2,
                name: '国家基本公共卫生服务项目',
                price: '20',
                desc: '完善居民信息完善居民信息完善居民信息完善居民信息民信息完善居民'
            },{
                id: 3,
                name: '国家基本公共卫生服务项目',
                price: '30',
                desc: '完善居民信息完善居民信息完善居民信息完善居民信息民信息完善居民'
            },{
                id: 4,
                name: '国家基本公共卫生服务项目',
                price: '40',
                desc: '完善居民信息完善居民信息完善居民信息完善居民信息民信息完善居民'
            }]
        }
    }
    render() {
        const {arr} = this.state;
        return (
            arr.map((item) => {
                return (
                    <Link to={`/detail/${item.id}`} key={item.id}>
                        <div className="tab-one-content">
                            <div className="tab-title">
                                <div className="title">{item.name}</div>
                                <div className="price">{item.price}元</div>
                            </div>
                            <div className="desc">{item.desc}</div>
                        </div>
                    </Link>
                )
            })
            
        )
    }
}
