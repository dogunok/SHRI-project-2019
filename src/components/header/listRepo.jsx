import React from 'react';
import { Link } from 'react-router-dom';

export default function ListRepo(props){
    return(
        <ul className="header__repo_list">
            {
                props.list.map((item, index) => (
                    <li className="header__repo_list-name" key={index}>
                        <Link to={`/${item}`}>
                            {item}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}