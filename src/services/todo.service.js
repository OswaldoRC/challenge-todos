export const todoServices = {
    getTodos,
    getTodo,
    saveTodo,
    deleteTodo,
    updateStatus,
    updateTodo
}

const uri = 'http://localhost:9000'

const headers = {
    "Content-Type": "application/json",
};


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

function getTodos(){
    const requestOptions = {
        method: 'GET',
        headers: headers,
    };

    return fetch(`${uri}/todos`, requestOptions)
        .then(handleResponse)
        .then(response => {
            return response;
        });
}

function getTodo(id){
    const requestOptions = {
        method: 'GET',
        headers: headers,
    };

    return fetch(`${uri}/todos/${id}`, requestOptions)
        .then(handleResponse)
        .then(response => {
            return response;
        });
}

function saveTodo(data){
    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    };

    return fetch(`${uri}/todos`, requestOptions)
        .then(handleResponse)
        .then(response => {
            return response;
        });
}

function deleteTodo(id){
    const requestOptions = {
        method: 'DELETE',
        headers: headers,
    };

    return fetch(`${uri}/todos/${id}`, requestOptions)
        .then(handleResponse)
        .then(response => {
            return response;
        });
}

function updateStatus(id, value){
    const requestOptions = {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify({completed: value})
    };

    return fetch(`${uri}/todos/${id}`, requestOptions)
        .then(handleResponse)
        .then(response => {
            return response;
        });
}

function updateTodo(id, body){
    const requestOptions = {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(body)
    };

    return fetch(`${uri}/todos/${id}`, requestOptions)
        .then(handleResponse)
        .then(response => {
            return response;
        });
}