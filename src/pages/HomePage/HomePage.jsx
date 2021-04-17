import React from 'react';
import './HomePage.styles.scss';
import Directory from '../../components/Directory/Directory';

function HomePage() {
    return (
        <div className="homepage">
            <h1>Welcome to Home Page</h1>
            <Directory />
        </div>
    )
}

export default HomePage
