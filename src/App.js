import React from 'react';
import { Website } from './Website';
import { Podweb } from './Podweb';
import { Contact } from './Contact';
import { Splash } from './Splash';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <Router>
          <div>
            <Route path="/" exact component={Splash} />
            <Route path="/website" component={Website} />
            <Route path="/podcast" component={Podweb} />
            <Route path="/contact" component={Contact} />			
          </div>
        </Router>
    );
}

export default App;
