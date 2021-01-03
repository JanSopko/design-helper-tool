import React, { useState } from 'react';
import FloatingWindow from "../../FloatingWindow";
import { ACTIONS } from "../CreatePageWrapper";

const NavbarItemsManager = ({initActive, items, dispatch}) => {
    const [negativeId, setNegativeId] = useState(-1);

    const itemsInputs = items.map(item => {
        return(
            <div className="field-group">
                <label htmlFor={`text-${item.id}`}>Text</label>
                <input
                    key={`text-${item.id}`}
                    id={`text-${item.id}`}
                    type="text"
                    value={item.text}
                    style={{margin:'0 .4rem'}}
                    onChange={
                        e => dispatch({
                            type: ACTIONS.NAVBAR_ITEM_TEXT_UPDATED,
                            payload: {
                                id: item.id,
                                text: e.target.value
                            }
                        })
                    }
                />
                <label htmlFor={`url-${item.id}`}>URL</label>
                <input
                    key={`url-${item.id}`}
                    id={`url-${item.id}`}
                    type="text"
                    value={item.url}
                    style={{margin:'0 .4rem'}}
                    onChange={
                        e => dispatch({
                            type: ACTIONS.NAVBAR_ITEM_URL_UPDATED,
                            payload: {
                                id: item.id,
                                url: e.target.value
                            }
                        })
                    }
                />
                <button
                    className="button-red delete-button"
                    onClick={e => {
                        dispatch({
                            type: ACTIONS.NAVBAR_ITEM_ITEM_DELETED,
                            payload: {
                                id: item.id
                            }
                        });
                    }}
                >
                    Delete
                </button>
            </div>
        );
    });

    return(
        <FloatingWindow
            initActive={initActive}
            needsWide={true}
            initContents={[
                ...itemsInputs,
                <button
                    className="button-dark-green add-button hoverable"
                    onClick={e => {
                        dispatch({
                            type: ACTIONS.NAVBAR_ITEM_ADDED,
                            payload: {
                                newItem: {
                                    id: negativeId,
                                    text: '',
                                    url: '/'
                                }
                            }
                        });
                        setNegativeId(negativeId - 1);
                    }}
                >
                    Add new item
                </button>
            ]}
        />
    );
}

export default NavbarItemsManager