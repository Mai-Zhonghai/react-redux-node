import React from 'react';
import Logo from '../../componet/logo/logo.js';
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { login } from '../../redux/user.redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

@connect(
    state => state.user,
    { login }
)
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pwd: ''
        }
        this.register = this.register.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    register() {
        this.props.history.push('/register');
    }

    handleChange(key, val) {
        this.setState({
            [key]: val
        });
    }

    handleLogin() {
        this.props.login(this.state);
    }

    render() {
        return (
            <div>
                <Logo></Logo>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
                {this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
                <WingBlank>
                    <List>
                        <InputItem onChange={v => this.handleChange('user', v)}>用户</InputItem>
                        <WhiteSpace />
                        <InputItem onChange={v => this.handleChange('pwd', v)} type="password">密码</InputItem>
                    </List>
                    <WhiteSpace />
                    <Button type='primary' onClick={this.handleLogin}>登录</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type='primary'>注册</Button>
                </WingBlank>
            </div>
        )
    }
}