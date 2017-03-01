/**
 * Created by apple on 17/2/28.
 */
import React from 'react';
import {connect} from 'react-redux';
import {addToDo} from '../actions';

class Inputer extends React.Component{
    addTodo(){
        let val=this.refs.myInput;
        if(val.value==''){
            alert('请输入值');
            return;
        }
        this.props.addTodo(val.value);
        val.value='';
    }
    render(){
        return(
            <div>
               <input className="userInput" ref="myInput" type="text" /><a onClick={this.addTodo.bind(this)} >增加</a>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}


function mapDispatchToProps(dispatch){
    return {
        addTodo:(text)=>{
            dispatch(addToDo(text));
        }
    }
}

const Input = connect(
    mapStateToProps,
    mapDispatchToProps
)(Inputer);


export default Input;