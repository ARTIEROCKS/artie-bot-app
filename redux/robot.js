const ROBOT_LIST_LOADING = 'ROBOT_LIST_LOADING';
const ROBOT_LIST_LOADED = 'ROBOT_LIST_LOADED';
const ROBOT_ADDED = 'ROBOT_ADDED';
const ROBOT_REMOVED = 'ROBOT_REMOVED';


export const loadingRobotList = (loading) => ({
    type: ROBOT_LIST_LOADING,
    payload: loading
});

export const loadRobotList = (robotList) => ({
    type: ROBOT_LIST_LOADED,
    payload: robotList
});

export const addRobot = (robot) => ({
    type: ROBOT_ADDED,
    payload: robot
});

export const removeRobot = (robot) => ({
    type: ROBOT_REMOVED,
    payload: robot
});


const robot = (
    state = {
        loading: false,
        robots: []
    },action) => 
{
    switch(action.type){

        case ROBOT_LIST_LOADING:
            return {...state, loading: action.payload};

        case ROBOT_LIST_LOADED:
            return {...state, loading: false, robots: action.payload}

        default:
            return state;
    }
}

export default robot;