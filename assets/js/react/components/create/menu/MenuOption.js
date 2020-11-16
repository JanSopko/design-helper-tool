import React, {useState} from 'react';
import elementOrParentHasClass from "../../../../functions/elementOrParentHasClass";

const MenuOption = ({text, content}) => {
    const [active, setActive] = useState(false);

    let chevronClass = active ? 'chevron chevron-reverse' : 'chevron';

    const handleClick = e => {
        if (!elementOrParentHasClass(e.target, 'design-menu-editor')) {
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
            {active && content}
        </div>
    );
}

export default MenuOption;