const todoReducer = (initialState  = [], action) => {
    switch (action.type) {
        case 'add': 
            return [ ...initialState, action.payload ];
        case 'delete': 
            return initialState.filter((todo) => todo.id !== action.payload.id);
        case 'toggle': 
            return initialState.map((item) => {
                return {
                    ...item,
                    done: action.payload === item.id ? !item.done : item.done
                };
            });
        default: break;
    }
}   

export default todoReducer;