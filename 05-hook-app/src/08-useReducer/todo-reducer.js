const todoReducer = (initialState  = [], action) => {
    switch (action.type) {
        case 'abc': throw new Error('Action.type "abc" not implemented.');
        default: break;
    }
}   

export default todoReducer;