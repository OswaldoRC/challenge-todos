import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { AddTodo } from "./AddTodo";
import { todoActions } from "./redux/actions";

const HomeComponent = ({todos, ...props}) => {

    const [data, setData] = useState([])
    const history = useHistory();

    useEffect(() => {
        if(!todos)
            props.getTodos()
        else
            setData(todos)
    }, [todos])

    const handleDelete = (id) => {
        props.deleteTodo(id);
    }

    const changeStatus = (id, newValue) => {
        props.updateStatus(id, newValue);
    }

    const filter = (e) => {
        const value = e.target.value;
        if(value != -1){
            setData(todos.filter(i => i.completed == value))
        } else 
            setData(todos)
    }

    return (
        <div className='mt-5'>
            <h3 className='h3'>To-Do List</h3>
            <hr/>
            <AddTodo/>
            <div className='row my-2'>
                <div className='float-end'>
                    <select class="col-4 form-select" onChange={filter}>
                        <option selected value={-1}>All tasks</option>
                        <option value={1}>Completed</option>
                        <option value={0}>Pending</option>
                    </select>
                </div>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Title</th>
                        <th style={{width: '15%'}}>Completed</th>
                        <th style={{width: '15%'}}></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (data && data.length > 0) && data.map((item, i) => {
                            return (
                                <tr key={item.id}>
                                    <td>{i+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.title}</td>
                                    <td>
                                        <div className="form-check">
                                            <input class="form-check-input" type="checkbox" checked={item.completed} onChange={() => changeStatus(item.id, !item.completed)}/>
                                        </div>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                                        <Link className="btn btn-success mx-2" to={`/details/${item.id}`}>Edit</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            
        </div>
    );
}

const mapState = (state) => {
    const { todos } = state
    return {
        todos
    }
}

const actionCreators = {
    getTodos: todoActions.getTodos,
    deleteTodo: todoActions.deleteTodo,
    updateStatus: todoActions.updateStatus
}


const Home = connect(mapState, actionCreators)(HomeComponent)

export default Home;