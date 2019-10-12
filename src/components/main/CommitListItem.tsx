import React from 'react';

export default function CommitList(props: /*{infoCommit:  object[]}*/any){
    return(
        props.infoCommit.map(() => (item:{name: string, date: string}, index: number) => (
            <li className="commit__list_item" key={`listItem-${index}`}>
                <div className="commit__list_item-name">{item.name}</div>
                <div className="commit__list_item-date-change">{item.date}</div>
            </li>
        ))
    )
}