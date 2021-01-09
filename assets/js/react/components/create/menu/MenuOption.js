import React, {useState} from 'react';
import elementOrParentHasClass from "../../../../functions/elementOrParentHasClass";

const MenuOption = ({text, content, menuDispatch, initActive = false}) => {
    const [active, setActive] = useState(initActive);

    let chevronClass = initActive && active ? 'chevron chevron-reverse' : 'chevron';

    const handleClick = e => {
        if (!elementOrParentHasClass(e.target, 'design-menu-editor')) {
            menuDispatch(text);
            setActive(!active);
        }
    }

    return(
        <div
            className="menu-option"
            onClick={e => handleClick(e)}
        >
            <span>
                {text}
                <img src="../img/chevron.png" alt="chevron" className={chevronClass}/>
            </span>
            {(initActive && active) && content}
        </div>
    );
}

export default MenuOption;