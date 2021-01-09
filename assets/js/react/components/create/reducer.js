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
        case ACTIONS.NAVBAR_SPACING_OPTION:
            const newNavbarSpacing = {...state.navbar};
            newNavbarSpacing.spacingOption = action.payload.spacingOption;
            return {...state, navbar: newNavbarSpacing};
        case ACTIONS.NAVBAR_TEXT_SIZE:
            const newNavbarFontSize = {...state.navbar};
            newNavbarFontSize.fontSize = action.payload.fontSize;
            return {...state, navbar: newNavbarFontSize}

        case ACTIONS.NAVBAR_ITEM_TEXT_UPDATED:
            let newNavbarItemsText = state.navbar.items;
            newNavbarItemsText.forEach(item => {
                if (item.id !== undefined && item.id === action.payload.id) {
                    item.text = action.payload.text;
                }
            });
            const newNavbarChangedItemsText = {...state.navbar, items: newNavbarItemsText};
            return {...state, navbar: newNavbarChangedItemsText};
        case ACTIONS.NAVBAR_ITEM_URL_UPDATED:
            let newNavbarItemsUrl = state.navbar.items;
            newNavbarItemsUrl = newNavbarItemsUrl.map(item => {
                if (item.id !== undefined && item.id === action.payload.id) {
                    return {...item, url: action.payload.url};
                } else {
                    return item;
                }
            });
            const newNavbarChangedItemsUrl = {...state.navbar, items: newNavbarItemsUrl};
            return {...state, navbar: newNavbarChangedItemsUrl};
        case ACTIONS.NAVBAR_ITEM_ITEM_DELETED:
            const oldNavbarItems = state.navbar.items;
            const newNavbarItemsAfterDeleting = oldNavbarItems.filter(item =>
                item.id !== action.payload.id
            );
            const newNavbarAfterDeletion = {...state.navbar};
            newNavbarAfterDeletion.items = newNavbarItemsAfterDeleting;
            return {...state, navbar: newNavbarAfterDeletion};
        case ACTIONS.NAVBAR_ITEM_ADDED:
            const newNavItems = state.navbar.items;
            newNavItems.push(action.payload.newItem);
            const newNavbarAfterAdding = {...state.navbar, items: newNavItems};
            return {...state, navbar: newNavbarAfterAdding};

        case ACTIONS.BODY_BACKGROUND_COLOR:
            const newBody = {...state.body};
            newBody.backgroundColor = action.payload.backgroundColor;
            return {...state, body: newBody};
        case ACTIONS.BODY_TEXT_COLOR:
            const newBodyTc = {...state.body};
            newBodyTc.color = action.payload.color;
            return {...state, body: newBodyTc};
        default:
            return state;
        case ACTIONS.BODY_FONT_SIZE:
            const newBodyFs = {...state.body};
            newBodyFs.fontSize = action.payload.fontSize;
            return {...state, body: newBodyFs};
        case ACTIONS.BODY_PADDING:
            const newBodyContentPadding = {...state.body.content};
            newBodyContentPadding.padding = action.payload.padding;
            return {...state, body: {...state.body, content: newBodyContentPadding}};

        case ACTIONS.FOOTER_BACKGROUND_COLOR:
            const newFooterBg = {...state.footer};
            newFooterBg.backgroundColor = action.payload.backgroundColor;
            return {...state, footer: newFooterBg};
        case ACTIONS.FOOTER_HEIGHT:
            const newFooterHeight = {...state.footer};
            newFooterHeight.height = action.payload.height;
            return {...state, footer: newFooterHeight}
        case ACTIONS.FOOTER_TEXT_COLOR:
            const newFooterTc = {...state.footer};
            newFooterTc.color = action.payload.color;
            return {...state, footer: newFooterTc};
        case ACTIONS.FOOTER_FONT_SIZE:
            const newFooterFs = {...state.footer};
            newFooterFs.fontSize = action.payload.fontSize;
            return {...state, footer: newFooterFs};
    }
}

export default reducer;