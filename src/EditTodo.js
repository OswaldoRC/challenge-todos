import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { todoActions } from './redux/actions'

const EditTodo = (props) => {

    const [data, setData] = useState(props.data)
    const history = useHistory();

    useEffect(() => {
        const { success } = props
        if(success)
            history.push('/');
    }, [props.success])

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(data.name.trim() !== "" && data.title.trim() !== ""){
            let id = data.id;
            delete data.id;
            props.updateTodo(id, data);
        }
    }

    return (
        <div>
            <form className="row row-cols-lg-1 gy-3 align-items-center">
                <div className="col-12">
                    <label>Name</label>
                    <input name='name' type="text" className="form-control" placeholder="Name" value={data.name} onChange={handleChange}/>
                </div>

                <div className="col-12">
                    <label >Title</label>
                    <input name='title' type="text" className="form-control" placeholder="Title" value={data.title} onChange={handleChange}/>
                </div>

                <div className='col-12'>
                    <div className="form-check">
                        <input class="form-check-input" type="checkbox" name='completed' checked={data.completed} onChange={() => setData({...data, completed : !data.completed})}/>
                        <label class="form-check-label" for="flexCheckChecked">
                            Completed
                        </label>
                    </div>
                </div>
                
                <div className='col-12'>
                    <p class='h6'>Created At: {data.createdAt}</p>
                    <p class='h6'>Updated At: {data.updatedAt}</p>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary" onClick={onSubmit}>Edit Todo</button>
                </div>
            </form>
        </div>
    )
}

const mapState = (state) => {
    return {
        success: state.success
    }
}

const actionCreators = {
    updateTodo : todoActions.updateTodo
}

const connectedComponent = connect(mapState, actionCreators)(EditTodo)

export { connectedComponent as EditTodo }