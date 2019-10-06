import React from 'react';
import { Link } from 'react-router-dom'

import CommitList from './CommitList';
import ContentList from './ContentList';
import BreadCrumb from './BreadСrumb';

import toggleIcon from '../../picture/toggleIcon.svg'

export default class Content extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            location: window.location.pathname === '/' ? '/react' : window.location.pathname
          };
    }

    componentDidMount() {
        fetch(`http://localhost:3003/api/repos${this.state.location}/tree/master`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    error: error
                });
            }
        )
    }

    componentDidUpdate(prevProps){

        if(prevProps.history.location.pathname !== prevProps.location.pathname){
            this.setState({
                isLoaded: false,
                location: prevProps.history.location.pathname
            });
            fetch(`http://localhost:3003/api/repos${this.state.location}/tree/master`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        error: error
                    });
                }
            )
        }
    }

    render(){
        if(this.state.error){
            return this.state.error
        } else if(!this.state.isLoaded) { 
            return <div>загрузка</div>
        } else {
            return(
                <div className="main">
                    <BreadCrumb/>
                    <div className="main__info-commit">
                        <div className="main__commit-name">
                            <span>arcadia</span>
                            <div className="selected-commit">trunk
                                <svg className="header__toggle-icon" aria-hidden="true" width="12" height="9">
                                    <path className="header__toggle-icon_arrow" d="M6 7.5L.56 2.08l.88-.89L6 5.74l4.56-4.56.88.89z"></path>
                                </svg>
                                <CommitList />
                            </div>
                        </div>
                        <div className="main__commit-data">
                            Last commit <span className="main__commit-data_hash">c4d248</span> on
                            <span className="main__commit-data_date">20 Oct 2017, 12:24</span> by
                            <span className="autor-commit">robot-srch-releaser</span>
                        </div>
                        <nav className="main__navigation">
                            <Link to="files" className="main__navigation_item main__navigation_item-active">FILES</Link>
                            <Link to="branches" className="main__navigation_item">BRANCHES</Link>
                        </nav>
                        <ContentList info={this.state.items}/>
                        <div className="main__all-files main__all-files-mobile">
    
                        </div>
                    </div>
                </div>
            )
        }
    }
}