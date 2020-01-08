//入口js
import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";//引入自定义模块 ./App 需要加点 /代表在当前目录下
//import 'antd/dist/antd.min.css'
//将 App组件中的 标签 渲染到 index.html 页面
ReactDOM.render(<App/>,document.getElementById('root'));