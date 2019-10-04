import React from 'react';
import Header from './components/header/header.jsx';
import Content from './components/main/content.jsx';
import Footer from './components/footer/footer.jsx'
import './App.scss';

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          items2: [],
        };
      }
    
    componentDidMount() {
        const fetchOne = fetch("http://localhost:3003/api/repos")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                items: result
                });
            },
            (error) => {
                this.setState({
                error: error
                });
            }
        )

        const fetchTwo =         fetch("http://localhost:3003/api/repos/server-and-API/commits/902f830c7")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                items2: result
                });
            },
            (error) => {
                this.setState({
                    error: error
                });
            }
        )

        Promise.all([fetchOne, fetchTwo]).then(result => {
            this.setState({
                isLoaded: true,
            });
        })

    }

    render() {
        //   if(this.state.isLoaded){
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return(
                <>
                    <Header
                        info={items}
                    />
                    <Content />
                    <Footer/>
                </>
            )
        }
    }
}


// export default App;
