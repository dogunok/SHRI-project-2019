import React from 'react';

export default function BreadCrumb(props: {path: string}){
    return(
        <div className="main__repo-path">
            <span>
                {props.path.split('/').join(' / ')}
            </span>
        </div>
    )
}