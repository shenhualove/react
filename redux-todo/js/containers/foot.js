/**
 * Created by apple on 17/2/28.
 */
import React from 'react';
import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions';

class Foot extends React.Component{

    check(text){
        this.props.checks(text);
    }

    render(){
        return(
            <div className="footer">
                <a className={this.props.todoApp.filter=='SHOW_ALL'?'hover':''}  onClick={this.check.bind(this,'SHOW_ALL')}>全部</a>
                <a className={this.props.todoApp.filter=='SHOW_ACTIVE'?'hover':''}  onClick={this.check.bind(this,'SHOW_ACTIVE')}>活动</a>
                <a className={this.props.todoApp.filter=='SHOW_COMPENT'?'hover':''}  onClick={this.check.bind(this,'SHOW_COMPENT')}>完成</a>
            </div>
        )
    }
}

function mapStateToProps(state){
   return state
}


function mapDispatchToProps(dispatch){
   return {
       checks:(text)=>{
           dispatch(setVisibilityFilter(text));
       }
   }
}

const Footer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Foot);

export default  Footer;