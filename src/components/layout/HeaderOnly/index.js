import React from 'react';
import Header from '~/components/layout/components/Header';

const HeaderOnly = ({ Children }) => {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="content">{Children}</div>
            </div>
        </div>
    );
};

export default HeaderOnly;
