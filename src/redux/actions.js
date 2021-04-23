import { todoServices } from '../services/todo.service'
import { todoActionsConstants } from './actionsTypes'

export const todoActions = {
    getTodos,
    getTodo,
    saveTodo,
    deleteTodo,
    updateStatus,
    updateTodo
}

function getTodos(){

    return dispatch => {
        dispatch(request());

        todoServices.getTodos()
            .then(
                response => {
                    dispatch(success(response.todos))
                }, error => {
                    dispatch(failure(error))
                }
            )
    }

    function request(){ return { type: todoActionsConstants.GET_TODOS_REQUEST }}
    function success(todos){ return { type: todoActionsConstants.GET_TODOS_SUCCESS, todos }}
    function failure(error){ return { type: todoActionsConstants.GET_TODOS_FAILURE, error }}
}

function getTodo(id){

    return dispatch => {
        dispatch(request());

        todoServices.getTodo(id)
            .then(
                response => {
                    dispatch(success(response.todo))
                }, error => {
                    dispatch(failure(error))
                }
            )
    }

    function request(){ return { type: todoActionsConstants.GET_TODO_REQUEST }}
    function success(todo){ return { type: todoActionsConstants.GET_TODO_SUCCESS, todo }}
    function failure(error){ return { type: todoActionsConstants.GET_TODO_FAILURE, error }}
}

function saveTodo(data){

    return dispatch => {
        dispatch(request());

        todoServices.saveTodo(data)
            .then(
                response => {
                    dispatch(success(response.todo))
                }, error => {
                    dispatch(failure(error))
                }
            )
    }

    function request(){ return { type: todoActionsConstants.ADD_TODO_REQUEST }}
    function success(todo){ return { type: todoActionsConstants.ADD_TODO_SUCCESS, todo }}
    function failure(error){ return { type: todoActionsConstants.ADD_TODO_FAILURE, error }}
}

function deleteTodo(id){

    return dispatch => {
        dispatch(request());

        todoServices.deleteTodo(id)
            .then(
                response => {
                    dispatch(success(response.deleted_id))
                }, error => {
                    dispatch(failure(error))
                }
            )
    }

    function request(){ return { type: todoActionsConstants.DELETE_TODO_REQUEST }}
    function success(id){ return { type: todoActionsConstants.DELETE_TODO_SUCCESS, id }}
    function failure(error){ return { type: todoActionsConstants.DELETE_TODO_FAILURE, error }}
}

function updateTodo(id, data){

    return dispatch => {
        dispatch(request());

        todoServices.updateTodo(id, data)
            .then(
                response => {
                    dispatch(success(response.updated_id))
                }, error => {
                    dispatch(failure(error))
                }
            )
    }

    function request(){ return { type: todoActionsConstants.UPDATE_STATUS_REQUEST }}
    function success(id){ return { type: todoActionsConstants.UPDATE_TODO_SUCCESS, id }}
    function failure(error){ return { type: todoActionsConstants.UPDATE_TODO_FAILURE, error }}
}



function updateStatus(id, value){

    return dispatch => {
        dispatch(request());

        todoServices.updateStatus(id, value)
            .then(
                response => {
                    dispatch(success(response))
                }, error => {
                    dispatch(failure(error))
                }
            )
    }

    function request(){ return { type: todoActionsConstants.UPDATE_STATUS_REQUEST }}
    function success(response){ return { type: todoActionsConstants.UPDATE_STATUS_SUCCESS, data: {id:response.updated_id, completed: response.completed } }}
    function failure(error){ return { type: todoActionsConstants.UPDATE_STATUS_FAILURE, error }}
}

