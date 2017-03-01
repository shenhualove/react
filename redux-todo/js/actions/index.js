/**
 * Created by apple on 17/2/27.
 */

//筛选状态
function setVisibilityFilter(filter){
    return {
        type:"SET_VISIBILITY_FILTER",
        filter
    }
}

//增加TODO
function addToDo(text){
    return {
        type:"ADD_TODO",
        text
    }
}

//改变活动状态
function changeActive(id){
    return {
        type:"CHANGE_ACTIVE",
        id
    }
}



export {setVisibilityFilter,addToDo,changeActive}