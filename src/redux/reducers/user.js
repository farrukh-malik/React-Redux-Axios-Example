import { USER } from "../../constants/types";

const INIT_STATE = {
    userData: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case USER: {
            return {
                ...state,
                userData: action.payload,
            }
        }

        default:
            return state;
    }
}