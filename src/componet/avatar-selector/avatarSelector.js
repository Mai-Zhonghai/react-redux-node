import React from 'react';
import { Grid, List} from 'antd-mobile';

export default class AvatarSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const avatarList = 'boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'
                            .split(',')
                            .map( v => ({
                                icon:require(`../images/${v}.png`),
                                text:v
                            }))
        const gridHeader = this.state.icon ? (<div>
                                                <span>已选择头像</span>
                                                <img style={{width:20}} src={this.state.icon} alt={this.state.text} />
                                              </div>
                                            ) : '请选择头像'

        return (
            <div>
                <List renderHeader={()=>gridHeader}>
                    <Grid data={avatarList} columnNum={5} onClick={elm=>{this.setState(elm);this.props.selectAvatar(elm.text)}}/>
                </List>           
            </div>
        )
    }
}