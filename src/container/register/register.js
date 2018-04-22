import React from 'react';
import Logo from '../../componet/logo/logo.js';
import { connect } from 'react-redux';
import { register } from '../../redux/user.redux';
import { List, InputItem, Radio, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { Redirect } from 'react-router-dom';

@connect(
    state => state.user,
    { register }
)
export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            pwd: "",
            repeatpwd: "",
            type: "genius"
        }
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleChange(key, val) {
        this.setState({
            [key]: val
        });
    }

    handleRegister() {
        this.props.register(this.state);
        console.log(this.state);
    }

    render() {
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo></Logo>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
                {this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
                <List>
                    <InputItem
                        onChange={v => this.handleChange('user', v)}
                    >用户名</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type="password"
                        onChange={v => this.handleChange('pwd', v)}
                    >密码</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type="password"
                        onChange={v => this.handleChange('repeatpwd', v)}
                    >确认密码</InputItem>
                    <WhiteSpace />
                    <RadioItem checked={this.state.type == 'genius'} onChange={() => this.handleChange('type', 'genius')}>
                        牛人
                    </RadioItem>
                    <RadioItem checked={this.state.type == 'boss'} onChange={() => this.handleChange('type', 'boss')}>
                        Boss
                    </RadioItem>
                    <Button type="primary" onClick={this.handleRegister}>注册</Button>
                </List>
            </div>
        )
    }
}