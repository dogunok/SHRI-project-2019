import React from 'react';
import CommitList from './commitList';

export default function Content(){
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

            <div className="main__all-files main__all-files-desktop">
                <ul className="name-columns">
                    <li>Name</li>
                    <li >Last commit</li>
                    <li>Commit message</li>
                    <li>Committer</li>
                    <li>Updated</li>
                </ul>
                <ul className="info-file">
                        <li className="name-file name-file-folder">
                            <div className="picture picture-folder">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.875 1.5H6.375L4.875 0H1.125C0.492188 0 0 0.515625 0 1.125V7.875C0 8.50781 0.492188 9 1.125 9H10.875C11.4844 9 12 8.50781 12 7.875V2.625C12 2.01562 11.4844 1.5 10.875 1.5Z" fill="black"/>
                                    </svg>
                            </div>
                            api
                        </li>
                        <li className="hash-commit"><a className="link-commit" href="#">d53dsv</a></li>
                        <li>[vcs] move http to arc</li>
                        <li className="commiter">noxoomo</li>
                        <li>4 s ago</li>
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
                        <li className="hash-commit"><a className="link-commit" href="#">c53dsv</a></li>
                        <li>[vcs] test for empty commit message</li>
                        <li className="commiter">nikitxskv</li>
                        <li>1 min ago</li>
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
                        <li className="hash-commit"><a className="link-commit" href="#">s53dsv</a></li>
                        <li>[vcs] change owner to g:arc</li>
                        <li className="commiter">nalpp</li>
                        <li>16:25</li>
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
                        <li className="hash-commit"><a className="link-commit" href="#">h5jdsv</a></li>
                        <li>[vcs] move http to arc</li>
                        <li className="commiter">somov</li>
                        <li>Yesterday, 14:50</li>
                </ul>
                <ul className="info-file">
                        <li className="name-file name-file-folder">
                            <div className="picture picture-folder">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.875 1.5H6.375L4.875 0H1.125C0.492188 0 0 0.515625 0 1.125V7.875C0 8.50781 0.492188 9 1.125 9H10.875C11.4844 9 12 8.50781 12 7.875V2.625C12 2.01562 11.4844 1.5 10.875 1.5Z" fill="black"/>
                                    </svg>
                            </div>
                            lib
                        </li>
                        <li className="hash-commit"><a className="link-commit" href="#">f5jdsv</a></li>
                        <li>ARCADIA-771: append /trunk/arcadia/</li>
                        <li className="commiter">deshevoy</li>
                        <li>Jan 11, 12:01</li>
                </ul>
                <ul className="info-file">
                        <li className="name-file name-file-folder">
                            <div className="picture picture-folder">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.875 1.5H6.375L4.875 0H1.125C0.492188 0 0 0.515625 0 1.125V7.875C0 8.50781 0.492188 9 1.125 9H10.875C11.4844 9 12 8.50781 12 7.875V2.625C12 2.01562 11.4844 1.5 10.875 1.5Z" fill="black"/>
                                    </svg>
                            </div>
                            local
                        </li>
                        <li className="hash-commit"><a className="link-commit" href="#">k5jdsv</a></li>
                        <li>ARCADIA:771: detect binary files</li>
                        <li className="commiter">exprmntr</li>
                        <li>Jan 10, 12:01</li>
                </ul>
                <ul className="info-file">
                        <li className="name-file name-file-folder">
                            <div className="picture picture-folder">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.875 1.5H6.375L4.875 0H1.125C0.492188 0 0 0.515625 0 1.125V7.875C0 8.50781 0.492188 9 1.125 9H10.875C11.4844 9 12 8.50781 12 7.875V2.625C12 2.01562 11.4844 1.5 10.875 1.5Z" fill="black"/>
                                    </svg>
                            </div>
                            packages
                        </li>
                        <li className="hash-commit"><a className="link-commit" href="#">a5jdsv</a></li>
                        <li>[vcs] VCS-803: packages for services</li>
                        <li className="commiter">levanov</li>
                        <li>Jan 1, 12:01</li>
                </ul>
                <ul className="info-file">
                        <li className="name-file name-file-folder">
                            <div className="picture picture-folder">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.875 1.5H6.375L4.875 0H1.125C0.492188 0 0 0.515625 0 1.125V7.875C0 8.50781 0.492188 9 1.125 9H10.875C11.4844 9 12 8.50781 12 7.875V2.625C12 2.01562 11.4844 1.5 10.875 1.5Z" fill="black"/>
                                    </svg>
                            </div>
                            robots
                        </li>
                        <li className="hash-commit">l5jdsv</li>
                        <li>ARCADIA-771: convert string to json object</li>
                        <li className="commiter">torkve</li>
                        <li>Dec 29, 2017</li>
                </ul>
                <ul className="info-file">
                        <li className="name-file name-file-folder">
                            <div className="picture picture-folder">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.875 1.5H6.375L4.875 0H1.125C0.492188 0 0 0.515625 0 1.125V7.875C0 8.50781 0.492188 9 1.125 9H10.875C11.4844 9 12 8.50781 12 7.875V2.625C12 2.01562 11.4844 1.5 10.875 1.5Z" fill="black"/>
                                    </svg>
                            </div>
                            server
                        </li>
                        <li className="hash-commit"><a className="link-commit" href="#">j5jdsv</a></li>
                        <li>[vcs] get list of refs</li>
                        <li className="commiter">spreis</li>
                        <li>Dec 29, 2017</li>
                </ul>
                <ul className="info-file">
                        <li className="name-file name-file-folder">
                            <div className="picture picture-file">
                                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.875 1.5H6.375L4.875 0H1.125C0.492188 0 0 0.515625 0 1.125V7.875C0 8.50781 0.492188 9 1.125 9H10.875C11.4844 9 12 8.50781 12 7.875V2.625C12 2.01562 11.4844 1.5 10.875 1.5Z" fill="black"/>
                                    </svg>
                            </div>
                            ut
                        </li>
                        <li className="hash-commit"><a className="link-commit" href="#">5jdsvk</a></li>
                        <li>[vsc] store merge conflicts</li>
                        <li className="commiter">annaveronika</li>
                        <li>Dec 29, 2017</li>
                </ul>
                <ul className="info-file">
                        <li className="name-file name-file-folder">
                            <div className="picture picture-instruction">
                                    <svg className="file" width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.5 3.35938C9.5 3.24219 9.40625 3.05469 9.3125 2.96094L7.03906 0.6875C6.92188 0.570312 6.78125 0.5 6.64062 0.5H6.5V3.5H9.5V3.35938ZM6.3125 4.25C5.98438 4.25 5.75 4.01562 5.75 3.6875V0.5H1.0625C0.734375 0.5 0.5 0.757812 0.5 1.0625V11.9375C0.5 12.2656 0.734375 12.5 1.0625 12.5H8.9375C9.24219 12.5 9.5 12.2656 9.5 11.9375V4.25H6.3125ZM3.38281 9.89844C3.35938 9.92188 3.3125 9.94531 3.28906 9.94531C3.26562 9.94531 3.21875 9.92188 3.19531 9.89844L1.67188 8.46875C1.64844 8.46875 1.64844 8.42188 1.64844 8.375C1.64844 8.35156 1.64844 8.30469 1.67188 8.30469L3.19531 6.875C3.21875 6.85156 3.26562 6.82812 3.28906 6.82812C3.3125 6.82812 3.35938 6.85156 3.38281 6.875L3.82812 7.36719C3.85156 7.39062 3.875 7.41406 3.875 7.46094C3.875 7.48438 3.85156 7.53125 3.82812 7.55469L2.86719 8.375L3.82812 9.21875C3.85156 9.24219 3.875 9.28906 3.875 9.3125C3.875 9.35938 3.85156 9.38281 3.82812 9.40625L3.38281 9.89844ZM4.57812 11.0703L3.94531 10.9062C3.875 10.8828 3.85156 10.8359 3.85156 10.7656V10.7422L5.28125 5.77344C5.30469 5.72656 5.35156 5.67969 5.39844 5.67969C5.42188 5.67969 5.44531 5.67969 5.44531 5.70312L6.07812 5.86719C6.14844 5.89062 6.17188 5.9375 6.17188 6.00781V6.03125L4.74219 11C4.71875 11.0469 4.67188 11.0938 4.625 11.0938C4.60156 11.0938 4.57812 11.0938 4.57812 11.0703ZM8.35156 8.46875L6.82812 9.89844C6.80469 9.92188 6.75781 9.94531 6.73438 9.94531C6.71094 9.94531 6.66406 9.92188 6.64062 9.89844L6.19531 9.40625C6.17188 9.38281 6.14844 9.35938 6.14844 9.3125C6.14844 9.28906 6.17188 9.24219 6.19531 9.21875L7.15625 8.375L6.19531 7.55469C6.17188 7.53125 6.14844 7.48438 6.14844 7.46094C6.14844 7.41406 6.17188 7.39062 6.19531 7.36719L6.64062 6.875C6.66406 6.85156 6.71094 6.82812 6.73438 6.82812C6.75781 6.82812 6.80469 6.85156 6.82812 6.875L8.35156 8.30469C8.375 8.30469 8.39844 8.35156 8.39844 8.375C8.39844 8.42188 8.375 8.46875 8.35156 8.46875Z" fill="black"/>
                                    </svg>
                            </div>
                            README.md
                        </li>
                        <li className="hash-commit"><a className="link-commit" href="#">h5jdsl</a></li>
                        <li>[vcs] add readme</li>
                        <li className="commiter">pg</li>
                        <li>Dec 29, 2017</li>
                </ul>
                <ul className="info-file">
                        <li className="name-file name-file-folder">
                            <div className="picture picture-file-code">
                                    <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.75 3.6875V0.5H1.0625C0.734375 0.5 0.5 0.757812 0.5 1.0625V11.9375C0.5 12.2656 0.734375 12.5 1.0625 12.5H8.9375C9.24219 12.5 9.5 12.2656 9.5 11.9375V4.25H6.3125C5.98438 4.25 5.75 4.01562 5.75 3.6875ZM7.25 9.21875C7.25 9.38281 7.10938 9.5 6.96875 9.5H3.03125C2.86719 9.5 2.75 9.38281 2.75 9.21875V9.03125C2.75 8.89062 2.86719 8.75 3.03125 8.75H6.96875C7.10938 8.75 7.25 8.89062 7.25 9.03125V9.21875ZM7.25 7.71875C7.25 7.88281 7.10938 8 6.96875 8H3.03125C2.86719 8 2.75 7.88281 2.75 7.71875V7.53125C2.75 7.39062 2.86719 7.25 3.03125 7.25H6.96875C7.10938 7.25 7.25 7.39062 7.25 7.53125V7.71875ZM7.25 6.03125V6.21875C7.25 6.38281 7.10938 6.5 6.96875 6.5H3.03125C2.86719 6.5 2.75 6.38281 2.75 6.21875V6.03125C2.75 5.89062 2.86719 5.75 3.03125 5.75H6.96875C7.10938 5.75 7.25 5.89062 7.25 6.03125ZM9.5 3.35938C9.5 3.21875 9.42969 3.07812 9.33594 2.96094L7.03906 0.664062C6.92188 0.570312 6.78125 0.5 6.64062 0.5H6.5V3.5H9.5V3.35938Z" fill="black"/>
                                    </svg>
                            </div>
                            ya.make
                        </li>
                        <li className="hash-commit"><a className="link-commit" href="#">k5jdsv</a></li>
                        <li>[vcs] move http to arc</li>
                        <li className="commiter">mvel</li>
                        <li>Dec 29, 2017</li>
                </ul>
            </div>
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