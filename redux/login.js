const ADD_LOGIN_SERVER = 'ADD_LOGIN_SERVER';
const ADD_LOGIN_INFO = 'ADD_LOGIN_INFO';
const ADD_LOGIN_USER_INFO = 'ADD_LOGIN_USER_INFO';
const ADD_LOGIN_REMEMBER = 'ADD_LOGIN_REMEMBER';
const LOGIN_FAILED = 'LOGIN_FAILED';
const LOGIN_LOADING = 'LOGIN_LOADING';


export const addLoginServer = (server) => ({
    type: ADD_LOGIN_SERVER,
    payload: server
});

export const addLoginInfo = (username, password) => ({
    type: ADD_LOGIN_INFO,
    payload: {username: username, password: password}
});

export const addUserInfo = (user) => ({
    type: ADD_LOGIN_USER_INFO,
    payload: user
});

export const loginFailed= (error) => ({
    type: LOGIN_FAILED,
    payload: error
});

export const loginLoading = (loading) => ({
    type: LOGIN_LOADING,
    payload: loading
});

export const addRemember = (remember) => ({
    type: ADD_LOGIN_REMEMBER,
    payload: remember
});

export const loginArtie = (server, username, password) => (dispatch) => {

    dispatch(loginLoading(true));
    fetch(server + '/api/v1/users/loginWithRole?userName=' + username + '&password=' + password)
        .then(response => response.json())
        .then(data => {
            if(data.body.message !== null){
                dispatch(loginFailed(data.body.message));
            }else{
                dispatch(addUserInfo(data.body.object));
            }
            dispatch(loginLoading(false));
        });
}


const login = (
    state = {
        server: null,
        username: null,
        password: null,
        logged: false,
        user: null,
        remember: false,
        error: null,
        loading: false
    }, action) => {
        
        switch(action.type){
            case ADD_LOGIN_SERVER:
                return {...state, server: action.payload};

            case ADD_LOGIN_INFO:
                return {...state, username: action.payload.username, password: action.payload.password}

            case ADD_LOGIN_USER_INFO:
                return {...state, user: action.payload}

            case LOGIN_FAILED:
                return {...state, error: action.payload}
            
            case LOGIN_LOADING:
                return {...state, loading: action.payload}

            case ADD_LOGIN_REMEMBER:
                return {...state, remember: action.payload}

            default:
                return state;
        }
    };

    export default login;