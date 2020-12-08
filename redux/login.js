const ADD_SERVER = 'ADD_SERVER';
const ADD_LOGIN = 'ADD_LOGIN';
const LOGOUT = 'LOGOUT';


export const addServer = (server) => ({
    type: ADD_SERVER,
    payload: server
});


const login = (
    state = {
        server: null,
        username: null,
        password: null,
        logged: false,
        user: null
    }, action) => {
        
        switch(action.type){
            case ADD_SERVER:
                return {...state, server: action.payload};

            default:
                return state;
        }
    };

    export default login;