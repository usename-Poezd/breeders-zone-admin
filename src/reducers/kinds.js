import initialState from "./initialState";

const kinds = (state, action) => {
    const payload = action.payload;
    if (state === undefined) {
        return initialState.kinds;
    }

    switch (action.type) {
        case 'SET_KINDS':
            return {
                all: payload.kinds,
                active: payload.activeKinds,
                request: false
            };
        case 'DELETE_KIND':
            return {
                ...state,
                all: [...payload]
            };
        default:
            return state
    }
};

export default kinds;