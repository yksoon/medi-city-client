// Actions
export const SET_ALERT = "SET_ALERT";
export const SET_SPINNER = "SET_SPINNER";

// Action Creator
export const set_alert = (data) => {
    return {
        type: SET_ALERT,
        payload: data,
    };
};

export const set_spinner = (data) => {
    return {
        type: SET_SPINNER,
        payload: data,
    };
};
