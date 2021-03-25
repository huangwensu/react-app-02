/*
1.该文件是用于创建一个为ad组件服务的reducer,reducer本质就是一个函数
2.reducer接收两个参数，分别为之前的状态preState, 动作对象action
3.reducer的作用：初始化状态，加工状态
*/
const initState = false
export default function adReducer(preState = initState, action) {
    switch(action.type) {
        case 'ADCLICK':
            return action.data
        default:
            return preState
    }
}
