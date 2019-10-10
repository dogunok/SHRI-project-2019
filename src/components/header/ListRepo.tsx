import React from 'react';
import { Link } from 'react-router-dom';

interface Props{
    list: string[];
}

export default function ListRepo(props: Props){
    return(
        <ul className="header__repo_list">
            {
                props.list.map((item: string, index: number) => (
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