import React from 'react'
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import LoginForm from './components/login/LoginForm';

import QuestionsList from './components/questions/QuestionsList';
import UserShow from './components/users/UserShow';

function App() {
  return (
    <div className="App">
        {/* <h1></h1>
        <header>
          <a href="" className="logo">Stackoverflow clone</a>
          <a href="" className="profile">Akshay</a>
        </header> */}
        <BrowserRouter>
          <Switch>
            <Route path='/' component={LoginForm} exact={true} />
            <Route path='/questions' component={QuestionsList} exact={true} />
            <Route path ='/users/:id' component={UserShow}/> 
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
