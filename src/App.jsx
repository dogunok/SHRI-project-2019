import React from 'react';
import Header from './components/header/Header.jsx';
import Content from './components/main/Content.jsx';
import Footer from './components/footer/Footer.jsx'
import './App.scss';

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }

    componentDidMount() {
        fetch("http://localhost:3003/api/repos/react/tree/master")
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

    render() {
        const { error, isLoaded} = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return(
                <>
                    <Header/>
                    <Content 
                        infoContent={this.state.items}
                    />
                    <Footer/>
                </>
            )
        }
    }
}
