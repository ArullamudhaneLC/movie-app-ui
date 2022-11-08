
import { Route, Switch } from 'react-router-dom';
import Banner from './components/Banner';
import Login from './components/Login/Login';
import Nav from './components/Nav';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import AboutMovie from './components/AboutMovie/AboutMovie';

const Routes = () => {
    console.log('Routes called');
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={AboutMovie} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/movies/book' component={Banner} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
        </Switch>
    );

}
export default Routes;
