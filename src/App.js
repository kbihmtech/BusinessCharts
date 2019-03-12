import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainLayout from './Layout';
import Home from './pages/home';
class App extends Component {
  render() {
    return (
   	<Router>
	  	<MainLayout>
	    	<Route path="/" exact component={Home} />
	  	</MainLayout>
		</Router>
    );
  }
}

export default App;
