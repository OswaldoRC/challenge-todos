import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { todoActions } from './redux/actions'

const AddTodo = (props) => {

    const [data, setData] = useState({
        name: "",
        title: ""
    })

    useEffect(() => {
        const { success } = props
        console.log(success)
        if(success){
            setData({
                name: "",
                title: ""
            })
        }
    },[props.success])

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(data.name.trim() !== "" && data.title.trim() !== ""){
            props.addTodo(data)
        }
    }

    return (
        <div>
            <form className="row row-cols-lg-auto g-3 align-items-center">
                <div className="col-12">
                    <label className="visually-hidden">Name</label>
                    <input name='name' type="text" className="form-control" placeholder="Name" value={data.name} onChange={handleChange}/>
                </div>

                <div className="col-12">
                    <label className="visually-hidden">Title</label>
                    <input name='title' type="text" className="form-control" placeholder="Title" value={data.title} onChange={handleChange}/>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary" onClick={onSubmit}>Add Todo</button>
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
    addTodo : todoActions.saveTodo
}

const connectedComponent = connect(mapState, actionCreators)(AddTodo)

export { connectedComponent as AddTodo }