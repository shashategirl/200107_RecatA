import React, {Component} from "react";
//  form 表单 icon 白色小图标 input 输入框 button 按钮
import { Form, Icon, Input, Button } from 'antd';
import './login.less'
import login from './images/logo.png'

const Item=Form.Item; //不能写在import前面
//阻止事件的默认行为


//登陆的路由组件
 class Login extends Component{

    handleSubmit=(event) =>{
        event.preventDefault();
        //手动获取values
       //  const form = this.props.form;//获取具有强大功能的form对象
       //  const value = form.getFieldsValue();//获取表单中输入的数据
       //  console.log(value.password);

        this.props.form.validateFields((err, values) => {
            if (!err) {//如果点击后，如果校验成功
                console.log('执行提交ajax请求', values);
            }else {
                console.log('校验失败');
            }
        });

    };

     validatorPwd = (rule,value,callback) =>{
        if (value==""||value==" "||!value){
            callback('请输入密码！');
        }else if (value.length<4){
            callback('密码必须大于等于4位');
        }else if (value.length>12) {
            callback('密码必须小于等于12位');
        }else if (!/^[a-zA-Z0-9]+$/.test(value)) {
            callback('必须是英文或者数字或者下划线组成');
        }else {
            callback();
        }
     };

    render() {
        const form = this.props.form;//获取具有强大功能的form对象
        const { getFieldDecorator } = form;//得到form中的getFieldDecorator方法 后面利用此方法来获取值和表达验证
        return(
            <div className='login'>Login
                <header className='login-header'>
                    <img src={login} alt='logo'/>
                    <h1>崩坏酱零-React-登陆界面测试</h1>
                </header>
                <section className='login-content'>
                    <h2>登陆界面</h2>
                    {/*这个表单中 点击提交（onSubmit）会调用handleSubmit方法，然后handleSubmit方法去发 ajax请求，去请求登陆*/}
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item> {/*账号框*/}
                            {/*getFieldDecorator是一个高阶函数*/}
                            {/*getFieldDecorator方法会接受两个参数：username标识名称你输入的内容就存在此名称中
                              | rules 配置对象 ：属性名是一些特定的名称  用于配置 一些验证规则 */
                            }
                            {getFieldDecorator('username', {
                                /*合法性要求：
                                *   1.必须输入
                                *   2.必须大于4位，小于12位
                                *   3.必须是英文或者数字或者下划线组成
                                * */
                                //声明式验证：直接使用别人定义好的验证规则进行验证
                                rules: [
                                    //whitespace:true, 不允许输入空格，如果输入空格，则视为 没有输入
                                    { required: true, whitespace:true, message: '请输入你的账号!' },
                                    { min: 4, message: '用户名最少4位!' },
                                    { max: 12, message: '用户名最多12位!' },
                                    //   /^[a-zA-Z0-9]+$/ 正则校验 ^：以什么开头
                                    // ^[a-zA-Z0-9]：以数字、字母、下划线开头只匹配第一个字符
                                    // ^[a-zA-Z0-9]+ :以数字、字母、下划线开头匹配输入的所有字符
                                    // [a-zA-Z0-9]+$ :以数字字母下划线结尾
                                    { pattern: /^[a-zA-Z0-9]+$/, message: '必须是英文或者数字或者下划线组成!' }
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="qq" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="QQ帐号"
                                />
                            )}
                        </Item>

                        {/*密码框*/}
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ validator: this.validatorPwd }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {/*登陆按钮  htmlType="submit"  按钮类型为提交按钮*/}
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                点我登陆哟
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>

        )
    }
}

/*高阶函数 能返回一个函数的 函数
* 1).一类特别的函数
*   能接收 函数类型 的参数
*   返回值是一个函数
* 常见高阶函数
*   定时器：setTimeout()   setInterval()
*   Promise:Promise(() => {}) , then(value => {成功回调},reason => {失败回调}),
*   数组遍历相关的方法：forEach()/filter()/map()find()/findIndex()
*   函数对象的bind()
* */


/*高阶组件
    本质上是一个函数
    能接收一个组件（被包装组件），返回一个新的组件（包装组件），包装组件会向被包装组件传入特定属性
    作用：扩展子组件的功能
    高阶组件也是一个高阶函数：接收一个组件函数，返回一个新的组件函数
* */
//包装Form组件，生成一个新的组件 Form(Login)
//新组件会向Form传递一个强大对象属性：from
const WarpLogin = Form.create()(Login);//From这个组件调用create（）这个高阶函数，传给他一个Login组件，返回一个 WarpLogin组件
export default WarpLogin//默认输出组件 WarpLogin