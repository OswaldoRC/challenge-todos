import { todoActionsConstants } from "./actionsTypes";

export default function todo(state = {}, action){
    switch (action.type) {
        case todoActionsConstants.GET_TODOS_REQUEST:
        case todoActionsConstants.GET_TODO_REQUEST:
        case todoActionsConstants.ADD_TODO_REQUEST:
        case todoActionsConstants.UPDATE_TODO_REQUEST:
        case todoActionsConstants.UPDATE_STATUS_REQUEST:
        case todoActionsConstants.DELETE_TODO_REQUEST:
            return { ...state, requesting: true, success: false }

        case todoActionsConstants.GET_TODOS_SUCCESS:
            return { todos: action.todos };

        case todoActionsConstants.ADD_TODO_SUCCESS:
            return { todos: [...state.todos, action.todo], success: true };

        case todoActionsConstants.DELETE_TODO_SUCCESS:
            return { todos: state.todos.filter(i => i.id != action.id) };

        case todoActionsConstants.UPDATE_STATUS_SUCCESS:
            //there are some other ways to do this, I chose handle this using es6 features with map and spread operator, it could depend of the amount of data
            return { todos: state.todos.map(x => (x.id == action.data.id ? { ...x, completed: action.data.completed } : x)) };

        case todoActionsConstants.GET_TODO_SUCCESS: 
            return { todo: action.todo }

        case todoActionsConstants.UPDATE_TODO_SUCCESS: 
            return { todo: action.id, success: true }  

        case todoActionsConstants.GET_TODOS_FAILURE:
        case todoActionsConstants.GET_TODOS_FAILURE:
        case todoActionsConstants.ADD_TODO_FAILURE:
        case todoActionsConstants.UPDATE_TODO_FAILURE:
        case todoActionsConstants.UPDATE_STATUS_FAILURE:
        case todoActionsConstants.DELETE_TODO_FAILURE:
                return { error: action.error, requesting: false, success: false }

        default:
            return {}
    }
}