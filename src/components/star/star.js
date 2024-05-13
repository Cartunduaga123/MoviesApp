import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

function Star({ filled }) {
    return (
        <>
            {filled ? <FaStar color="#FFD700" /> : <FaStarHalfAlt color="#FFD700" />}
        </>
    );
}

export default Star;