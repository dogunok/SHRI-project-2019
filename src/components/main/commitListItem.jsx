import React from 'react';

export default function CommitList(props){
    return(
        props.infoCommit.map((item, index) => (
            <li className="commit__list_item" key={`listItem-${index}`}>
                <div className="commit__list_item-name">{item.name}</div>
                <div className="commit__list_item-date-change">{item.date}</div>
            </li>
        ))
    )
}