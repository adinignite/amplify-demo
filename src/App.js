import logo from './logo.svg';
import './App.css';

import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
import { NewHomes, NavBar, MarketingFooter } from './ui-components';

Amplify.configure(awsconfig);


function App() {
  return (
    <AmplifyProvider>
      <NavBar />
      <div className="App">
        <h1>New Homes</h1>
        <NewHomes  />
      </div>
      <MarketingFooter/> 
    </AmplifyProvider>
  );
}

export default App;
