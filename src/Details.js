import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { EditTodo } from './EditTodo';
import { todoActions } from './redux/actions';


const DetailsComponent = (props) => {
    let { id } = useParams()

    useEffect(() => {
        props.getTodo(id)
    }, [])

    return (
        <div className='mt-5'>
            <h3 className='h3'>Edit Todo</h3>
            <hr/>
            { props.todo && <EditTodo data={props.todo}/> }
            
        </div>
    )
}

const mapState = (state) => {
    return {
        todo: state.todo
    }
}

const actionCreators = {
    getTodo: todoActions.getTodo
}

export default connect(mapState, actionCreators)(DetailsComponent)