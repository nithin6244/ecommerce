import { Suspense, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header";
import App from "./App";
import Cart from "./components/cart";

function Routes() {
	const [key, setKey] = useState("");

	const updateKey = (prifix) => {
		setKey(prifix);
	};
	return (
		<Suspense fallback={"<h1>Loading</h1>"}>
			<Header updateKey />
			<Switch>
				<Route path='/' exact>
					<Redirect to='/home'></Redirect>
				</Route>
				<Route path='/home' exact>
					<App key={key}></App>
				</Route>
				<Route path='/cart' exact component={Cart} />
			</Switch>
		</Suspense>
	);
}

export default Routes;
