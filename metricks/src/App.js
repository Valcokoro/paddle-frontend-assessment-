import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Switch>
       <Route path='/' exact component={LandingPage}/>
       <Route path='/comingsoon' exact component={LandingPage}/>
       <Route path='/contact' exact component={ContactPage}/>
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
