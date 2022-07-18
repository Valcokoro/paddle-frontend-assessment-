import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />
       <Switch>
       <Route path='/' exact component={LandingPage}/>
       <Route path='/comingsoon' exact component={LandingPage}/>
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
