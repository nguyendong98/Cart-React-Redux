import * as message from './../constants/Message'
import * as types from './../constants/actionTypes'
const InitialState = message.MSG_WELCOME
const myReducer = (state = InitialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.message
        default:
            return state
    }
}
export default myReducer