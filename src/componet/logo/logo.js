import React from 'react';
import logoImg from './job.png';
import './logo.css';

export default class Register extends React.Component {
    render() {
        return (
            <div className="login_logo">
                <img src={logoImg} alt="登陆图片" />
            </div>     
        )
    } 
}