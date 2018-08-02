import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from "./home.jsx"
import Projects from "./projects.jsx"


/* -----------------    COMPONENT     ------------------ */

export default class Root extends Component {
	constructor(props) {
		super(props)

	}
	componentDidMount() {
		// this.props.fetchInitialData();
	}
	render () {

		return (
	      <Router>
				<div>
					<div id="main" className="container-fluid">
			    <Route exact path="/" component={Home} />
					<Route exact path="/Projects" component={Projects} />
			  </div>
		  </div>
		  </Router>
		)
	}
}

/* -----------------    CONTAINER     ------------------ */

// const mapState = null;
//
// const mapDispatch = () => ();
//
// export default connect(mapState, mapDispatch)(Root);
