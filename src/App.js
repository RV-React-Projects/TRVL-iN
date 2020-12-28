import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import SignUp from './Pages/SignUp';
import Products from './Pages/Products';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/services" exact component={Services} />
				<Route path="/sign-up" exact component={SignUp} />
				<Route path="/products" exact component={Products} />
			</Switch>
		</Router>
	);
}

export default App;
