import React, {Component} from 'react'
import Header from '../../components/Header/Header'
import Ad from '../../components/Ad/Ad'
import Banner from '../../components/Banner/Banner'
// import ModalComponent from '../../components/MyModal/MyModal' // UI组件
import ModalComponent from '../../components/MyModal/ModalContainer'  // 容器组件
import store from "../../redux/store"

export default class Home extends Component {

    getChildrenMsg  = (result, msg) => {
        this.setState({
          modal: msg
        })
    }

    getModalChildMsg = (result, msg) => {
      this.setState({
        modal: msg
      })
    }

    render() {  
        return (
          <div>
            <Header title="任务中心"></Header>
            <Ad></Ad>
            <Banner></Banner>
            <ModalComponent store={store}></ModalComponent>
          </div>
        )
    }
}

