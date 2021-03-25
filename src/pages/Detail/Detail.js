import React, { Component } from 'react'
import Header from "../../components/Header/Header"

export default class Detail extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        
    }
    
    render() {
        const id = this.props.match.params.id;
        return (
            <div>
                <Header title="任务详情"></Header>
                <div>详情页{id}</div>
            </div>
        )
    }
}
