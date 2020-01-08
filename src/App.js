import React, {Component} from "react";
import {BrowserRouter,Route, Switch} from "react-router-dom";
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";
//引入路由组件
// React 这我们虽然暂时没有用到，但是这个组件必须引入
//  Component是react的一个属性，用的时候，我们可以这样引入 React, {Component}
//应用的根组件

export default class App extends Component{

    render() {
        return (
            //注册路由
            <BrowserRouter>
                <Switch>{/*//根据访问的路径不同，只匹配其中的一个*/}
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
                </Switch>
            </BrowserRouter>
        )
    }


}