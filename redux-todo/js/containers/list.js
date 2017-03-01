/**
 * Created by apple on 17/3/1.
 */
import React from 'react';
import {connect} from 'react-redux';
import {changeActive} from '../actions';

class ListShow extends React.Component{

    touch(id){
        this.props.touchTodo(id);
    }

    show(){
        switch(this.props.todoApp.filter){
            case 'SHOW_ALL':
                return this.props.todoApp.list.map((val,key)=>{
                    return(
                        <li onClick={this.touch.bind(this,val.id)} className={val.complete?"complete":''}>{val.text}</li>
                    )
                })
            case 'SHOW_ACTIVE':
                return this.props.todoApp.list.map((val,key)=>{
                    if(!val.complete){
                        return(
                            <li onClick={this.touch.bind(this,val.id)}>{val.text}</li>
                        )
                    }
                })
            case 'SHOW_COMPENT':
                return this.props.todoApp.list.map((val,key)=>{
                    if(val.complete){
                        return(
                            <li onClick={this.touch.bind(this,val.id)} className="complete">{val.text}</li>
                        )
                    }
                })
            default :
                break;
        }
    }

    render(){
        return(
            <div className="list">
                <ul>
                    {this.show()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}


function mapDispatchToProps(dispatch){
    return {
        touchTodo:(id)=>{
            dispatch(changeActive(id));
        }
    }
}

const List = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListShow);

export default  List;