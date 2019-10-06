import React from 'react';
import Listrepo from './ListRepo.jsx';
import logotype from '../../picture/logo.svg';

export default class HeaderWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allRepo: [],
            isLoaded: false,
            error: null
        }
    }

    componentDidMount() {
        this._getAllRepo();
    }

    render() {
        const { error, isLoaded} = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <header className="header">
                    <a className="header__logo" href="#">
                        <img src={logotype} alt="logotype"/>
                    </a>
                    <div className="header__repo">
                        <span className="header__repo-text">
                                Repository <span className="header__repo-name">Arc</span>
                        </span>
                        <Listrepo
                            list={['Loading']}
                        />
                        <svg className="header__toggle-icon" aria-hidden="true" width="12" height="9">
                            <path className="header__toggle-icon_arrow" d="M6 7.5L.56 2.08l.88-.89L6 5.74l4.56-4.56.88.89z"></path>
                        </svg>
                    </div>
                </header>
            )
        } else {

        return(
                <header className="header">
                    <a className="header__logo" href="#">
                        <img src={logotype} alt="logotype"/>
                    </a>
                    <div className="header__repo" onMouseEnter={
                        this._getAllRepo.bind(this)
                    }>
                        <span className="header__repo-text">
                                Repository <span className="header__repo-name">Arc</span>
                        </span>
                        <Listrepo
                            list={this.state.allRepo}
                        />
                        <svg className="header__toggle-icon" aria-hidden="true" width="12" height="9">
                            <path className="header__toggle-icon_arrow" d="M6 7.5L.56 2.08l.88-.89L6 5.74l4.56-4.56.88.89z"></path>
                        </svg>
                    </div>
                </header>
            )
        }
    }

    _getAllRepo(){
        fetch("http://localhost:3003/api/repos")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    allRepo: result,
                    isLoaded: true,
                });
            },
            (error) => {
                this.setState({
                    error
                });
            }
        )
    }

}