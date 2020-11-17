import {ACTIONS} from "./CreatePageWrapper";

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.NAVBAR_HEIGHT:
            const newNavbarH = {...state.navbar};
            newNavbarH.height = action.payload.height;
            return {...state, navbar: newNavbarH};
        case ACTIONS.NAVBAR_BACKGROUND_COLOR:
            const newNavbarBg = {...state.navbar};
            newNavbarBg.backgroundColor = action.payload.backgroundColor;
            return {...state, navbar: newNavbarBg};
        case ACTIONS.NAVBAR_TEXT_COLOR:
            const newNavbarTc = {...state.navbar};
            newNavbarTc.color = action.payload.color;
            return {...state, navbar: newNavbarTc};
        default:
            return state;
    }
}

export default reducer;