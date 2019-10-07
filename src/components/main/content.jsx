import React from 'react';
import { Link } from 'react-router-dom'

import CommitList from './CommitList';
import ContentList from './ContentList';
import BreadCrumb from './BreadСrumb';

import './Content.scss';
// import loadingGif from '../../picture/loadingGif.gif'
import toggleIcon from '../../picture/toggleIcon.svg'

export default class Content extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            allRepo: [],
          };
    }

    _getAllFiles(nameRepo, newPath){
        const repoPath = nameRepo.split('/');
        repoPath.splice(0, 2);
        fetch(`http://localhost:3003/api/repos/${nameRepo.split('/')[1]}/tree/master/${repoPath.join('/')}`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    allRepo: result,
                    isLoaded: true,
                    location: newPath
                });
            },
            (error) => {
                this.setState({
                    error: error
                });
            }
        )
    }

    componentDidMount() {
        this._getAllFiles(window.location.pathname === '/' ? '/react' : window.location.pathname, 
            window.location.pathname === '/' ? '/react' : window.location.pathname
        )
    }

    componentDidUpdate(prevProps){

        if(prevProps.history.location.pathname !== prevProps.location.pathname){
            this.setState({
                isLoaded: false,
            });

            this._getAllFiles(prevProps.history.location.pathname,
                prevProps.history.location.pathname
            )
        }
    }

    render(){
        if(this.state.error){
            return this.state.error
        } else if(!this.state.isLoaded) { 
            return (
                <div className="wrapperLoading">
                    <div id="fountainTextG">
                        <div id="fountainTextG_1" className="fountainTextG">З</div>
                        <div id="fountainTextG_2" className="fountainTextG">а</div>
                        <div id="fountainTextG_3" className="fountainTextG">г</div>
                        <div id="fountainTextG_4" className="fountainTextG">р</div>
                        <div id="fountainTextG_5" className="fountainTextG">у</div>
                        <div id="fountainTextG_6" className="fountainTextG">з</div>
                        <div id="fountainTextG_7" className="fountainTextG">к</div>
                        <div id="fountainTextG_8" className="fountainTextG">а</div>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="main">
                    <BreadCrumb path={this.state.location}/>
                    <div className="main__info-commit">
                        <div className="main__commit-name">
                            <span>{this.state.location.split('/')[1]}</span>
                            <div className="selected-commit"> master
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
                        <ContentList info={this.state.allRepo}/>
                        <div className="main__all-files main__all-files-mobile">
    
                        </div>
                    </div>
                </div>
            )
        }
    }
}