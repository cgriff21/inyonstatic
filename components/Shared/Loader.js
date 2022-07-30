import React from 'react';

export default function Loader(props) {

        return (
            <>
                <div className={`preloader ${props.loading ? '' : 'preloader-deactivate'}`}>
                    <div className="loader">
                        <div className="shadow"></div>
                        <div className="box"></div>
                    </div>
                </div>
            </>
        );
    }
