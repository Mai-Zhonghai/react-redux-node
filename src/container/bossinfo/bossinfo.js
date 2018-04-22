import React from 'react';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import AvatarSelector from '../../componet/avatar-selector/avatarSelector.js'
import { connect } from 'react-redux';
import { update } from '../../redux/user.redux.js';
import { Redirect } from 'react-router';

@connect(
    state => state.user,
    { update }
)
export default class BossInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
        this.selectAvatar = this.selectAvatar.bind(this);
    }

    onChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    selectAvatar(imgName) {
        this.setState({
            avatar: imgName
        })
    }

    render() {
        const pathname = this.props.location.pathname;
        const redirectTo = this.props.redirectTo;
        return (
            <div>
                {redirectTo && redirectTo !== "pathname" ? <Redirect to={this.props.redirectTo} /> : null}
                <NavBar mode="dark">BOSS完善信息页</NavBar>
                <AvatarSelector selectAvatar={this.selectAvatar}></AvatarSelector>
                <InputItem onChange={(v) => this.onChange('title', v)}>招聘职位</InputItem>
                <InputItem onChange={(v) => this.onChange('company', v)}>公司名称</InputItem>
                <InputItem onChange={(v) => this.onChange('money', v)}>薪资范围</InputItem>
                <TextareaItem
                    onChange={(v) => this.onChange('desc', v)}
                    rows={3}
                    autoHeight
                    title='职位要求'
                ></TextareaItem>
                <Button type='primary' onClick={() => { this.props.update(this.state) }}>保存</Button>
            </div>
        )
    }
}