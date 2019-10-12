import React from 'react';
import CommitListItem from './CommitListItem';

export default function CommitList(props: any){
    return(
        <ul className="commit__list">
            <CommitListItem
                infoCommit={props.infoBranch}
            />
        </ul>
    )
}