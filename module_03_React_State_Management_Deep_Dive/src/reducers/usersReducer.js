export const initialValue = {
  users: [
    { id: 1, name: "Mohammad" },
    { id: 2, name: "Ibrahim" },
  ],
};

export const reducer = (state, action)=>{
    switch (action.type) {
        case 'ADD_USER':
            return{
                ...state,
                users: [...state.users, action.payload]
            }
            
        case 'DELETE_USER':
            const filteredUser = state.users.filter((user)=> user.id !== action.payload)
            return{
                ...state,
                users: filteredUser
            }
    
        default:
            return state
    }
}
