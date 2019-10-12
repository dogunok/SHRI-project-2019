import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/Header';
import Content from './components/main/Content';
import Footer from './components/footer/Footer'
import './App.scss';

export default class App extends React.Component{
    constructor(props: any) {
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
