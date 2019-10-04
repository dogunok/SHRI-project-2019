import React from 'react';
import CommitListItem from './commitListItem';

export default function CommitList(props){
    return(
        <ul className="commit__list">
            <CommitListItem
                infoCommit={props = [{name: 'testik', date: 1993},{name: 'testik', date: 1993}]}
            />
        </ul>
    )
}