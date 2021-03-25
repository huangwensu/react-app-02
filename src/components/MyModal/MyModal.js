import React,{Component} from 'react'
import { Modal, List, Button, WhiteSpace, WingBlank, Icon } from 'antd-mobile';
import modalIcon from "../../assets/images/modal.png"
import store from "../../redux/store"
export default class MyModal extends Component {

  componentDidMount() {
      store.subscribe(() => { // 解决redux中的值改变了，页面没变化的问题
          this.setState({})
      })
  }

  onClose(){
    // 通过父子组件传值
    // this.props.app.getModalChildMsg(this, this.state.modal)

    // 通过redux改变状态
    //store.dispatch(adAction(false))

    // 通过react-redux改变状态
    this.props.onClose(false)
  }

  render() {
    return (
      <WingBlank>
        <WhiteSpace />
        <Modal
          visible={this.props.modal}
          transparent
          maskClosable={false}
          onClose={this.onClose}
          title=""
          footer={[
            { 
              text: '我知道了', 
              onPress: () => { this.onClose() } 
            }
          ]}
        >
          <div style={{ height: 200, overflow: 'scroll' }}>
            <img style={{ width: 60, height: 60 }} alt="modal" src={modalIcon}/>
            <div style={{ fontWeight: 700 }}>钱包功能即将上线 敬请期待</div>
            <div>
              <span>1.在此期间您做任务依然能够获得奖励金，请放心领取任务</span>
              <span>2.钱包功能上线后，已获奖励金将一并存入您的钱包</span>
            </div>
          </div>
        </Modal>
      </WingBlank>
    );
  }
}
