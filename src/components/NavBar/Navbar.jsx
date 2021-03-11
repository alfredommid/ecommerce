import React from 'react';
import {Link} from 'react-router-dom'
import { Nav, NavItem, FormGroup, Input} from 'reactstrap';
import panther from './panther.svg';
import './NavBar.scss'
import Payload from '../../utils/payload'

const NavBar = () => {
    const user = Payload()

    /*const getSearch = async() => {
        if(search.length < 2) return alert('Valor no válido');
        const url_shows= `https://ecomerce-master.herokuapp.com/api/v1/${search}`;
        const {data} = await axios.get(url_shows);
    }*/
    return ( 
        <div className="d-flex justify-content-between py-3 px-2  align-items-center navbard">
            <Link to="/"><img src={panther} className="panther_logo" alt="logo"/></Link>

            <FormGroup className="d-flex search-nav align-items-center">
                <Input 
                    // onChange={(e) => setSearch(e.target.value)}
                    type="text" 
                    id="buscar" 
                    className="searchbox" 
                    placeholder="Buscar" 
                    style={{background:'#FDC54F', borderStyle:"none", borderBottom:"solid 1.8px #8F18AC", borderRadius:"0px"}} />
                <span className="lupa" style={{color:"#8F18AC"}}>
                    <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </span>
            </FormGroup>
            {user
                ?
                    <Nav vertical className="text-right mx-3 navboot">
                        <NavItem className="mb-2">
                            <Link to="profile" className="nav-text">Profile</Link>
                        </NavItem>
                        <NavItem  className="mb-1">
                            <Link to="logout" className="nav-text">Log Out</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="cart" className="cart">Cart</Link>
                        </NavItem>
                    </Nav> 
                :
                    <Nav vertical className="text-right mx-3 navboot">
                        <NavItem className="mb-2">
                            <Link to="signup" className="nav-text">Sign Up</Link>
                        </NavItem>
                        <NavItem  className="mb-1">
                            <Link to="login" className="nav-text">Log In</Link>
                        </NavItem>
                    </Nav>
            }
        </div>
     );
}
 
export default NavBar;