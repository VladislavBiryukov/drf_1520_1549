import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import UserList from './components/users.js'
import Menu from './components/Menu.js'
import Footer from './components/Footer.js'



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          'users':[]
        }
    }
    componentDidMount() {

        axios.get('http://127.0.0.1:8000/api/users/').then(response => {
            this.setState(
            {
                'users':response.data
            })
        }).catch(error => console.log(error))

    }

    render() {
        return (
          <div >
                <main role="main" class="flex-shrink-0">
                    <div className="footer">
                        <UserList users={this.state.users}/>
                    </div>
                </main>
                <Menu/>
                <Footer/>
          </div>



        );
    }
}

export default App;
