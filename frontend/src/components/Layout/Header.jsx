import React, { useContext, useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useHistory } from 'react-router-dom'
import { AuthContext } from "./../../context/Authcontext";
import logo from "../../assets/images/LOGO.png";

import Select from 'react-select';


import ProfileMenu from "../ProfileMenu/ProfileMenu";
import Categories from '../../components/Dropdown/Dropdown.jsx';


import "./header.css";

const Header = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  // const history = useHistory();
  const [profileMenuOpen, setProfileMenuOpen]=useState(false);

  const enableProfileMenu=()=>{
    setProfileMenuOpen(true);
  }
  
  const storyHandler = () => {
    
    window.scrollTo({
      top: 1700,
      behavior: 'smooth',
    });
  
   
    const onScrollComplete = () => {
      
      window.removeEventListener('scroll', onScrollComplete);
  
   
      navigate('/');
    };
  
    // Attach the event listener
    window.addEventListener('scroll', onScrollComplete);
  };

  const catHandler =()=>{
  
    window.scrollTo({
     top: 800,
     behavior: 'smooth',
   });
 
   navigate('/home');
   }


  const handleClick=()=>{
    
    try {
      localStorage.removeItem('user');
    dispatch({type:'LOGOUT'});
    navigate('/home');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="Navbar">
      <div className="upperNav">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <input type="text" class="icon" placeholder="search for your currencies"/>
        
        {user && (
          <div className="userDetails">
            <label onClick={enableProfileMenu}>{user.username}
            {/* <i class="ri-arrow-down-s-fill"></i> */}
            </label>
            {profileMenuOpen && <ProfileMenu/>}
            <Link className="link" onClick={handleClick} to='/login'>
              Logout
            </Link>
          </div>
        )}

        {!user && (
          <Link className="Button" to="/login">
            Sign In
          </Link>
        )}
      </div>
      <div className="lowerNav">
        <div onClick={catHandler}>
          <Categories/>
        </div>
        
        <Link className="link" to="/featured">
          Featured
        </Link>
        <Link className="link">Auctions</Link>
        <Link className="link" onClick={storyHandler}>Stories</Link>
        <Link className="link">Articles</Link>
      </div>
    </div>
  );
};

export default Header;
