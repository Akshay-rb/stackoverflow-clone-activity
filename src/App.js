import React from 'react'
import { BrowserRouter, Route , Switch } from 'react-router-dom';


import LoginForm from './components/login/LoginForm';

import QuestionsList from './components/questions/QuestionsList';
import UserShow from './components/users/UserShow';

import GlobalStyles from './components/styles/GlobalStyles';

function App() {
  return (
    <div className="App">
        <h1>stack<span className="text-muted">overFlow</span> clone </h1>
        {/* <Reset/>*/}
        <GlobalStyles/>  
          {/* {/* <Header/> */}

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
