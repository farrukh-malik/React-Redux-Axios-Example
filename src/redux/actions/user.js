import {
    USER
} from "../../constants/types";

export const user = (userData) => {
    return {
        type: USER,
        payload: userData
    }
}
