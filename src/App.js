import React from 'react'
import { BrowserRouter, Link , Route } from 'react-router-dom';

import QuestionsList from './components/questions/QuestionsList';
import UserShow from './components/users/UserShow';

const isLoggedIn =true

function App() {
  return (
    <div className="App">
        <h1>Stackoverflow clone</h1>
        {/* <BrowserRouter>
          <Link to ='/questions' />
          <Route path='' ></Route>
        </BrowserRouter> */}
        <BrowserRouter>
            
            <Link to='/'>Login</Link>
            {isLoggedIn ? (<Link to='/questions' >featured questions</Link>) :'please login'}
            

            <Route path='/questions' component={QuestionsList} exact={true} />
            {/* <Route path='/' component={QuestionsList}  /> */}
            <Route path ='/users/:id' component={UserShow}/>
         
        </BrowserRouter>
    </div>
  );
}

export default App;
