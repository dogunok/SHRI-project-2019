import React from 'react';
import CommitList from './CommitList';
import ContentList from './ContentList'

export default function Content(props){
    return(
        <div className="main">
        <div className="main__repo-path">
            <span>
                    arcadia
            </span>
        </div>

        <div className="main__info-commit">
            <div className="main__commit-name">
                <span>arcadia</span>
                <div className="selected-commit">trunk
                        <svg className="main__toggle-icon" aria-hidden="true" width="12" height="9">
                                <path className="main__toggle-icon_arrow" d="M6 7.5L.56 2.08l.88-.89L6 5.74l4.56-4.56.88.89z"></path>
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
                <a href="#" className="main__navigation_item main__navigation_item-active">FILES</a>
                <a href="#" className="main__navigation_item">BRANCHES</a>
            </nav>
            <ContentList info={props.infoContent}/>
            <div className="main__all-files main__all-files-mobile">
                    <ul className="info-file">
                            <li className="name-file name-file-folder">
                                <div className="picture picture-folder">
                                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.875 1.5H6.375L4.875 0H1.125C0.492188 0 0 0.515625 0 1.125V7.875C0 8.50781 0.492188 9 1.125 9H10.875C11.4844 9 12 8.50781 12 7.875V2.625C12 2.01562 11.4844 1.5 10.875 1.5Z" fill="black"/>
                                        </svg>
                                </div>
                                api
                            </li>
                            <li><span>ARCADIA-771:</span> convert string to json object</li>
                            <li className="commiter"> <a className="link-commit" href="#">d53dsv</a> 
                                by Alexey Besedin, 4 s ago</li>
                    </ul>
                    <ul className="info-file">
                        <li className="name-file name-file-folder">
                            <div className="picture picture-folder">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.875 1.5H6.375L4.875 0H1.125C0.492188 0 0 0.515625 0 1.125V7.875C0 8.50781 0.492188 9 1.125 9H10.875C11.4844 9 12 8.50781 12 7.875V2.625C12 2.01562 11.4844 1.5 10.875 1.5Z" fill="black"/>
                                    </svg>
                            </div>
                            ci
                        </li>
                        <li><span>ARCADIA-771:</span> convert string to json object</li>
                        <li className="commiter"> <a className="link-commit" href="#">d53dsv</a> 
                            by Alexey Besedin, 4 s ago</li>
                    </ul>
                    <ul className="info-file">
                        <li className="name-file name-file-folder">
                            <div className="picture picture-folder">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.875 1.5H6.375L4.875 0H1.125C0.492188 0 0 0.515625 0 1.125V7.875C0 8.50781 0.492188 9 1.125 9H10.875C11.4844 9 12 8.50781 12 7.875V2.625C12 2.01562 11.4844 1.5 10.875 1.5Z" fill="black"/>
                                    </svg>
                            </div>
                            contrib
                        </li>
                        <li><span>ARCADIA-771: </span>convert string to json object</li>
                        <li className="commiter"> <a className="link-commit" href="#">d53dsv</a> 
                            by Alexey Besedin, 4 s ago</li>
                    </ul>
                    <ul className="info-file">
                        <li className="name-file name-file-folder">
                            <div className="picture picture-folder">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.875 1.5H6.375L4.875 0H1.125C0.492188 0 0 0.515625 0 1.125V7.875C0 8.50781 0.492188 9 1.125 9H10.875C11.4844 9 12 8.50781 12 7.875V2.625C12 2.01562 11.4844 1.5 10.875 1.5Z" fill="black"/>
                                    </svg>
                            </div>
                            http
                        </li>
                        <li><span>ARCADIA-771:</span> convert string to json object</li>
                        <li className="commiter"> <a className="link-commit" href="#">d53dsv</a> 
                            by Alexey Besedin, 4 s ago</li>
                    </ul>
            </div>
        </div>
    </div>
   
    )
}