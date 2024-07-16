// reducers/aidsReducer.js
const initialState = {
    aids: []
};

const aidsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_AID':
            return {
                ...state,
                aids: [...state.aids, action.payload]
            };
        case 'DELETE_AID':
            return {
                ...state,
                aids: state.aids.filter(aid => aid.id !== action.payload)
            };
        default:
            return state;
    }
};

export default aidsReducer;
