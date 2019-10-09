import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header/Header.jsx';
import Content from './components/Main/Content.jsx';
import Footer from './components/Footer/Footer.jsx'
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
