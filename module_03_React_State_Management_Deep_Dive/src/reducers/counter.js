export const ACTIONS = {
    INCREMENT : 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset'
}


export const reducer = (state, action)=>{
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return state + action.value ;
        case ACTIONS.DECREMENT:
           return state - action.value;
        case ACTIONS.RESET:
            return action.value;
        default:
            return state
    }
}