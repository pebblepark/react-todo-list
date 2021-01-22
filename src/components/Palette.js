import React from 'react';
import './Palette.css';

const Color = ({color, onClick}) => {
    return (
        <div className="color" style={{background: color}} onClick={() => onClick(color)}/>
    );
}

const Palette = ({colors, selected, onSelected}) => {
    const colorList = colors.map(color => (<Color color={color} onClick={selected}/>))

    return (
        <div className="palette">
            {colorList}
        </div>
    );
}
export default Palette;