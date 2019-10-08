import React from 'react';
import ContentListItem from './ContentListItem.jsx';
import ContentListForMobile from './ContentListForMobile.jsx'

export default function ContentList(props){
    return (
        <>
            <ul className="main__all-files main__all-files-desktop">
                <li>
                    <ul className="name-columns">
                        <li>Name</li>
                        <li >Last commit</li>
                        <li>Commit message</li>
                        <li>Committer</li>
                        <li>Updated</li>
                    </ul>
                </li>

                <ContentListItem
                    info={props.info}
                />

            </ul>
            <ul className="main__all-files main__all-files-mobile">
                <ContentListForMobile
                    info={props.info}
                    />
            </ul>
        </>
    )
}