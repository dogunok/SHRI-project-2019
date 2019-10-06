import React from 'react';

export default function BreadCrumb(props){
    return(
        <div className="main__repo-path">
            <span>
                {props.path.split('/').join(' / ')}
            </span>
        </div>
    )
}