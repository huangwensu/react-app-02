import moduleUi from "./MyModal"

import { connect } from "react-redux"

import { adAction } from "../../redux/action/action"
// 页面中的store是从prop是中拿的

// ui组件与容器组件的连接
/*
1.mapStateToProps 函数返回的是一个对象
2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
3.mapStateToProps用于传递操作的状态
*/

const mapStateToProps = state => ({modal: state.ad})  // 此时取的是总的reducers对象中的对应的key

/*
1.mapDispatchtoProps 函数返回的是一个对象
2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
3.mapDispatchtoProps用于传递操作状态的方法
*/
const mapDispatchtoProps = dispatch =>({ 
    'onClose': (data) => {
        dispatch(adAction(data))
    }
}) 


export default connect(mapStateToProps, mapDispatchtoProps)(moduleUi)   