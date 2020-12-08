const ADD_LOGIN_SERVER = 'ADD_LOGIN_SERVER';
const ADD_LOGIN_INFO = 'ADD_LOGIN_INFO';
const ADD_LOGIN_REMEMBER = 'ADD_LOGIN_REMEMBER';


export const addLoginServer = (server) => ({
    type: ADD_LOGIN_SERVER,
    payload: server
});

export const addLoginInfo = (username, password) => ({
    type: ADD_LOGIN_INFO,
    payload: {username: username, password: password}
});

export const addRemember = (remember) => ({
    type: ADD_LOGIN_REMEMBER,
    payload: remember
});

const login = (
    state = {
        server: null,
        username: null,
        password: null,
        logged: false,
        user: null,
        remember: false
    }, action) => {
        
        switch(action.type){
            case ADD_LOGIN_SERVER:
                return {...state, server: action.payload};

            case ADD_LOGIN_INFO:
                return {...state, username: action.payload.username, password: action.payload.password}

            case ADD_LOGIN_REMEMBER:
                return {...state, remember: action.payload}

            default:
                return state;
        }
    };

    export default login;