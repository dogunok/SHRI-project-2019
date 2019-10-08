import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './Components/Header/Header.jsx';
import Content from './Components/Main/Content.jsx';
import Footer from './Components/Footer/Footer.jsx'
import './App.scss';

export default class App extends React.Component{
    constructor(props) {
        super(props);
      }

    render() {
        return(
            <>
                <Switch>
                    <Route path='/' component={Header}/>
                    <Route path='/:repositoryId' component={Header}/>
                </Switch>
                <Switch>
                    <Route path='/' component={Content}/>
                    <Route path='/:repositoryId' component={Content}/>
                    <Route path='/:repositoryId/:path' component={Content}/>
                </Switch>
                <Footer/>
            </>
        )
    }
}
