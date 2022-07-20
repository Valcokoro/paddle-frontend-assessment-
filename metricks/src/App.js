import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import ContactPage from './components/ContactPage';
import GitHub from './components/GitHub';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Switch>
       <Route path='/' exact component={LandingPage}/>
       <Route path='/comingsoon' exact component={LandingPage}/>
       <Route path='/about' exact component={AboutUs}/>
       <Route path='/contact' exact component={ContactPage}/>
       <Route path='/github' exact component={GitHub}/>
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
