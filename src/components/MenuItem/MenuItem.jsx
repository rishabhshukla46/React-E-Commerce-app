import React from 'react';
import './MenuItem.styles.scss';

function MenuItem({title, imageUrl, size}) {
    return (
        <div className={`menu-item ${size}`}>
            <div className="background-image"
                style={{
                    backgroundImage : `url(${imageUrl})`
                }}
            />
            <div className="content">
                <div className="title">{title}</div>
                <div className="subtitle">SHOP NOW</div>
            </div>
        </div>
    )
}

export default MenuItem
