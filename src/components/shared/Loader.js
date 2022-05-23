import React from 'react';
import loader from '../assets/spinner.gif';


function Loader(props) {
    return (
        <img src={loader} alt="Loading ..." style={{ width: '100px', margin: 'auto', display: 'block' }} />
    );
}

export default Loader;
