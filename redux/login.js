const LOGIN_ADD_SERVER = 'LOGIN_ADD_SERVER';
const LOGIN_ADD_INFO = 'LOGIN_ADD_INFO';
const LOGIN_ADD_USER_INFO = 'LOGIN_ADD_USER_INFO';
const LOGIN_REMEMBER = 'LOGIN_REMEMBER';
const LOGIN_FAILED = 'LOGIN_FAILED';
const LOGIN_LOADING = 'LOGIN_LOADING';
const LOGIN_LOGOUT = 'LOGIN_LOGOUT';


export const addLoginServer = (server) => ({
    type: LOGIN_ADD_SERVER,
    payload: server
});

export const addLoginInfo = (username, password) => ({
    type: LOGIN_ADD_INFO,
    payload: {username: username, password: password}
});

export const addUserInfo = (user) => ({
    type: LOGIN_ADD_USER_INFO,
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
    type: LOGIN_REMEMBER,
    payload: remember
});

export const logout = () => ({
    type: LOGIN_LOGOUT,
    payload: null
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
            case LOGIN_ADD_SERVER:
                return {...state, server: action.payload};

            case LOGIN_ADD_INFO:
                return {...state, username: action.payload.username, password: action.payload.password}

            case LOGIN_ADD_USER_INFO:
                return {...state, user: action.payload}

            case LOGIN_FAILED:
                return {...state, error: action.payload}
            
            case LOGIN_LOADING:
                return {...state, loading: action.payload}

            case LOGIN_REMEMBER:
                return {...state, remember: action.payload}

            case LOGIN_LOGOUT:
                return {...state, user: null}

            default:
                return state;
        }
    };

    export default login;