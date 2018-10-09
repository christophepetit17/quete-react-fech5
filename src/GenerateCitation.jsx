import React from 'react';

const  GenerateCitation = ({ selectCitation }) => {
    return (
        <div  className="GenerateCitation">
        <button  onClick={selectCitation}>Get citation</button>
        </div>
    );
};



export default GenerateCitation;