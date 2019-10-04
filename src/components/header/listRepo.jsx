import React from 'react';

export default function ListRepo(props){
    return(
        <ul className="header__repo_list">
            {
                props.list.map((item, index) => (
                    <li className="header__repo_list-name" key={index}>
                        <a href={`${item}/`}>
                            {item}
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}