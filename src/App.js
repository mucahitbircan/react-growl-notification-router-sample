import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import notifier from "./components/growlAlert/notifier";
import {Growl} from "primereact/growl";
import Home from "./components/growlAlert/Home";
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
      <Router>
          <div className="App">
            <Growl     ref={ref => notifier.setGrowl(ref)}
                     onClose={() => notifier.invokeOnClose()} />
          </div>
          <Route exact path="/" component={Home}/>
      </Router>
  );
}

export default App;
