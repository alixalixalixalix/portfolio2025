import React from 'react';

const TitreSection = ( {titre, num} ) => {
    return (
        <div>
            <hr></hr>
            <p className="titreSection">{ titre }<sup>{ num }</sup></p>
        </div>
    );
};

export default TitreSection;