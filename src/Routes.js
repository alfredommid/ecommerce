import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch, 
    Route,} from 'react-router-dom';
import SignUp from './views/SignUp';
import LogIn from './views/LogIn';
import LandPage from './views/LandPage';
import NavBar from './components/NavBar/Navbar'
import Profile from './views/Profile';
import SelectedProduct from './views/SelectedProduct'
import axios from 'axios';
import CartView from './views/CartView'

const Routes = () => {
    const [products, setProducts] = useState([]);
    const getData = async () => {
        const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item');
        setProducts(res.data);
    }

    useEffect(() => {
        getData();
    }, [])



    return ( 
        <Router>
            <NavBar fixed="top"/>
            <Switch>
                <Route exact path="/">
                    <LandPage products={products}/>
                </Route>
                <Route exact path="/signup">
                    <SignUp/>
                </Route>
                <Route exact path="/login">
                    <LogIn/>
                </Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
                <Route exact path="/shop/:idProduct">
                    <SelectedProduct/>
                </Route>
                <Route exact path="/cart">
                    <CartView products={products}/>
                </Route>
            </Switch>
        </Router>
     );
}


export default Routes;