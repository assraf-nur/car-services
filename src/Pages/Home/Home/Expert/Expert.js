import React from 'react';

const Expert = ({expert}) => {
    const {name, img} = expert;
    return (
        <div className="row col-sm-12 col-md-6 col-lg-4 g-5">
            <div className="col">
                <div className="card h-100">
                <img src={img} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Expert;