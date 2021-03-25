import 'antd-mobile/dist/antd-mobile.css'; 
import './App.scss';
import React, {Component} from 'react'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import Home from "./pages/Home/Home"
import Detail from "./pages/Detail/Detail"
import Login from "./pages/Login/Login"

export default class App extends Component {
    render() {  
        return (
          // 注册路由
          <Router>
            <div>
              <Route exact path="/" component={Home}></Route>
              <Route path="/home" component={Home}></Route>
              <Route path="/detail/:id" component={Detail}></Route>
              <Route path="/login" component={Login}></Route>
            </div>
          </Router>
        )
    }
}

