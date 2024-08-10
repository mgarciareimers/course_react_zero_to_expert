const initialState = [
    {
        id: 1,
        todo: 'Recolectar la piedra del Alma',
        done: false
    }
];

const todoReducer = (state = initialState, action = {}) => {
    
    switch (action.type) {
        case 'add': return [ ...state, action.payload ]; 
        default: break;
    }


    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del Poder',
    done: false
};

const addTodoAction = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction);

console.log(todos);