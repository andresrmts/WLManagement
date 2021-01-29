import React from 'react';
import { locationToRoute } from './utils';
import { history, RouterContext } from './context';
import { Route } from './route';
import { Link } from './link';

class Router extends React.Component {
	constructor(props) {
		super(props);
		this.routes = Object.keys(props.routes).map((key) => props.routes[key].path);

		this.state = {
			route: locationToRoute(history.location)
		}
	}

	componentWillUnmount() {
		this.unlisten()
	}

	componentDidMount() {
		this.unlisten = history.listen(this.handleRouteChange);
	}

	handleRouteChange = ({location}) => {
		const route = locationToRoute(location);
		this.setState({route: route})
	}

	render() {
		const { children, NotFound } = this.props;
		const { route } = this.state;

		const routerContextValue = { route };

		const is404 = this.routes.indexOf(route.path) === -1;

		return (
			<RouterContext.Provider value={routerContextValue}>
				{is404 ? <NotFound /> : children}
			</RouterContext.Provider>
		)
	}
}

export { history, RouterContext, Router, Route, Link }