/**
 * Created by apple on 17/2/27.
 */
import {combineReducers} from 'redux';

//设置默认STATE值
const ininstals={
    filter:"SHOW_ALL",
    list:[]
};

let id=0;

function todoApp(state=ininstals,action){

    switch (action.type){
        case "SET_VISIBILITY_FILTER":
            return Object.assign({},state,{filter:action.filter});
        case "ADD_TODO":
            return Object.assign({},state,{list:state.list.concat([{text:action.text,complete:false,id:id++}])});
        case "CHANGE_ACTIVE":
            let changeArray=state.list;
            for(let i=0;i<changeArray.length;i++){
                if(changeArray[i].id==action.id){
                    changeArray[i].complete=!changeArray[i].complete;
                    break;
                }
            }
            return Object.assign({},state,{list:changeArray});
        default :
            return state;
    }

}

//合并多个 REDUCERS
const toDo=combineReducers({
    todoApp
});

export default toDo;