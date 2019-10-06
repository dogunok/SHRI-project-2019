import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/Header.jsx';
import Content from './components/main/Content.jsx';
import Footer from './components/footer/Footer.jsx'
import './App.scss';

export default class App extends React.Component{
    constructor(props) {
        super(props);
        // this.state = {
        //   error: null,
        //   isLoaded: false,
        //   items: [],
        //   location: window.location.pathname
        // };
      }



    // componentDidUpdate(propsPrev){
        
        // console.log(propsPrev)
    //    const reposItem =  document.querySelectorAll('.header__repo_list-name');
    //    [].slice.call(reposItem).forEach((item) => {
    //        item.addEventListener('mousedown', () => {
    //         console.log(item.textContent)
    //         fetch("http://localhost:3003/api/repos/server-and-API/tree/master")
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 this.setState({
    //                     allRepo: '',
    //                     isLoaded: true,
    //                 });
    //             },
    //             (error) => {
    //                 this.setState({
    //                     error
    //                 });
    //             }
    //         )
    //        })
    //    })
    // }

    render() {
        return(
            <>
                <Header/>
                <Switch>
                    <Route path='/' component={Content}/>
                    <Route path='/:repositoryId' component={Content}/>
                </Switch>
                {/* <Content/> */}
                <Footer/>
            </>
        )
    }



    // _getAllFiles(){
    //     fetch("http://localhost:3003/api/repos/server-and-API/tree/master")
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             this.setState({
    //                 allRepo: result,
    //                 isLoaded: true,
    //             });
    //         },
    //         (error) => {
    //             this.setState({
    //                 error
    //             });
    //         }
    //     )
    // }
}
