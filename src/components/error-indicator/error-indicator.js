import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
        return (
            <div className='error_indicator'>
                <h1>Something going wrong.</h1>
                <h1>Maybe you have mistake in url address. Check it!</h1>
                <h1>Or</h1>
                <h1>It's problem with our server side and we already send bearded man to fix this issue :)</h1>
            </div>
        );
};

 export default ErrorIndicator;
