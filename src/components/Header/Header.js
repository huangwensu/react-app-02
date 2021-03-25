import React,{Component} from 'react'
import backImg from '../../assets/images/back.png'
import './Header.scss'

class Header extends Component {
    goBack = () => {
        window.history.go(-1)
    }

    render() {
        return (
            <div className="header-container">
                <img onClick={this.goBack} src={backImg}/>
                <div className="header-title">{this.props.title}</div>
                <div className="header-right"></div>
            </div>
        )
    }
}

export default Header